import supabase from "../init-supabase";

export const buscarTodosTreinos = async () => {
  try {
    const treinosQuery = await supabase.from("treinos").select(`
      id,
      nome,
      observacao,
      indice,
      criado_em,
      alterado_em
    `);
    const { data, error, status, statusText, count } = treinosQuery;
    console.log({ data, error, status, statusText, count });
    return data;
  } catch (error) {
    console.error(error);
  }
};
