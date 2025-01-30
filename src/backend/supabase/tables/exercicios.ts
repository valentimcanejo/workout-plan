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
      alterado_em
    `
      )
      .eq("treino_id", treinoId);
    const { data, error, status, statusText, count } = exerciciosQuery;
    console.log({ data, error, status, statusText, count });
    return data;
  } catch (error) {
    console.error(error);
  }
};
