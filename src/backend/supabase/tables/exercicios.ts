import supabase from "../init-supabase";

export const buscarExerciciosPorTreino = async ({
  treinoId,
}: {
  treinoId: string;
}) => {
  try {
    const exerciciosQuery = await supabase
      .from("exercicios")
      .select(
        `
      id,
      nome,
      observacao,
      indice,
      criado_em,
      alterado_em,
      imagem,
      video,
      treino_id
    `
      )
      .eq("treino_id", treinoId)
      .order("criado_em", { ascending: true });
    const { data, error } = exerciciosQuery;

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const cadastrarExercicio = async (data: {
  treino_id: string;
  nome: string;
  observacao: string;
  video: string;
  imagem: string;
}) => {
  try {
    await supabase.from("exercicios").insert(data);
  } catch (error) {
    console.log(error);
  }
};

export const atualizarExercicio = async ({
  exercicioId,
  chave,
  valor,
}: {
  exercicioId: string;
  chave: string;
  valor: string | number;
}) => {
  try {
    await supabase
      .from("exercicios")
      .update({ [chave]: valor })
      .eq("id", exercicioId);
  } catch (error) {
    console.log(error);
  }
};
