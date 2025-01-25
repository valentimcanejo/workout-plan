import { workoutPlans } from "./workoutPlans";

export const buscarExerciciosTreino = (id: number) => {
  const exercicios = workoutPlans?.find(
    (treino) => treino.id === id
  )?.exercicios;

  return exercicios;
};
