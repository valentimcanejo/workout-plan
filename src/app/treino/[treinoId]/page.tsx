import { Undo2 } from "lucide-react";
import Link from "next/link";
import DetalhesExercicio from "./DetalhesExercicio";
import { ModalCadastrarExercicio } from "./ModalCadastrarExercicio";
import { buscarExerciciosPorTreino } from "../../../backend/supabase/tables/exercicios";

export default async function Treino({
  params,
}: {
  params: Promise<{ treinoId: string }>;
}) {
  const treinoId = (await params).treinoId;
  const exercicios = await buscarExerciciosPorTreino({ treinoId });

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full h-full gap-2">
      <div className="flex justify-between w-full p-4 sticky top-0 bg-white max-w-sm">
        <Link href="/">
          <Undo2 />
        </Link>
        <h1>Exercícios</h1>
        <ModalCadastrarExercicio treinoId={treinoId} />
      </div>
      <DetalhesExercicio exercicios={exercicios!} />
    </div>
  );
}
