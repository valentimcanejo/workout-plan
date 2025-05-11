import {
  atualizarExercicio,
  buscarDadosExercicio,
} from "../../../../../backend/supabase/tables/exercicios";
import { Button } from "../../../../../components/ui/Button";
import PlayerVideo from "../../../../../components/ui/PlayerVideo";
import { Textarea } from "../../../../../components/ui/textarea";
import CabecalhoExercicios from "../../CabecalhoExercicios";
import ExercicioForm from "./ExercicioForm";

export default async function Exercicio({
  params,
}: {
  params: Promise<{ exercicioId: string }>;
}) {
  const exercicioId = (await params).exercicioId;
  const exercicio = await buscarDadosExercicio({
    exercicioId,
  });

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full h-full gap-2">
      <div className="flex flex-col w-full max-w-sm gap-4 h-full px-2">
        <CabecalhoExercicios
          treinoId={exercicio?.id!}
          rotaAnterior={`/treino/${exercicio?.treino_id}`}
        />
        <ExercicioForm exercicio={exercicio} />
      </div>
    </div>
  );
}
