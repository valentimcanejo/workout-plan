import type { Exercicio } from "@/models/supabase/exercicio";
import { buscarDadosExercicio } from "../../../../../backend/supabase/tables/exercicios";
import CabecalhoExercicios from "../../CabecalhoExercicios";
import ExercicioForm from "./ExercicioForm";

export default async function Exercicio({
  params,
}: {
  params: Promise<{ exercicioId: string }>;
}) {
  const exercicioId = (await params).exercicioId;
  const exercicio = (await buscarDadosExercicio({
    exercicioId,
  })) as Exercicio;

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full h-full gap-2">
      <div className="flex flex-col w-full max-w-sm gap-4 h-full px-2">
        <CabecalhoExercicios
          treinoId={exercicio?.id || ""}
          rotaAnterior={`/treino/${exercicio?.treino_id}`}
        />
        <ExercicioForm exercicio={exercicio} />
      </div>
    </div>
  );
}
