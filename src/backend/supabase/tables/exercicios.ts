import supabase from "../init-supabase";

export const buscarDadosExercicio = async ({
  exercicioId,
}: {
  exercicioId: string;
}) => {
  try {
    const exercicioQuery = await supabase
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
      .eq("id", exercicioId);
    const { data, error } = exercicioQuery;

    if (error) {
      throw new Error(error.message);
    }

    return data[0] || null;
  } catch (error) {
    console.error(error);
  }
};

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
      .order("indice", { ascending: true });
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
    const ultimoIndice = await supabase
      .from("exercicios")
      .select(`indice`)
      .order("indice", { ascending: false });

    if (ultimoIndice.data && ultimoIndice.data[0].indice) {
      const indice = ultimoIndice.data[0].indice + 1;

      return await supabase.from("exercicios").insert({
        treino_id: data.treino_id,
        nome: data.nome,
        observacao: data.observacao,
        video: data.video,
        imagem: data.imagem,
        indice,
      });
    }

    return await supabase.from("exercicios").insert({
      treino_id: data.treino_id,
      nome: data.nome,
      observacao: data.observacao,
      video: data.video,
      imagem: data.imagem,
      indice: 1,
    });
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
