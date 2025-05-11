import DetalhesExercicio from "./DetalhesExercicio";
import { buscarExerciciosPorTreino } from "../../../backend/supabase/tables/exercicios";
import CabecalhoExercicios from "./CabecalhoExercicios";

export default async function Treino({
  params,
}: {
  params: Promise<{ treinoId: string }>;
}) {
  const treinoId = (await params).treinoId;
  const exercicios = await buscarExerciciosPorTreino({ treinoId });

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full h-full gap-2">
      <CabecalhoExercicios treinoId={treinoId} rotaAnterior={`/`} />
      <DetalhesExercicio exercicios={exercicios!} />
    </div>
  );
}
