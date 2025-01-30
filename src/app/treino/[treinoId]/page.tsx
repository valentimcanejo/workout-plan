import {
  CirclePlus,
  Plus,
  SkipBackIcon,
  StepBackIcon,
  Undo,
  Undo2,
} from "lucide-react";
import CardExercicio from "../../../components/ui/CardExercicio";
import { Exercicio } from "../../../models/supabase/exercicio";
import Link from "next/link";
import DetalhesExercicio from "./DetalhesExercicio";
import { Button } from "../../../components/ui/Button";
import { ModalCadastrarExercicio } from "./ModalCadastrarExercicio";

export default async function Treino({
  params,
}: {
  params: Promise<{ treinoId: string }>;
}) {
  const treinoId = (await params).treinoId;

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full h-full gap-2">
      <div className="flex justify-between w-full p-4 sticky top-0 bg-white max-w-sm">
        <Link href="/">
          <Undo2 />
        </Link>
        <h1>Exercícios</h1>
        <ModalCadastrarExercicio />
      </div>
      <DetalhesExercicio />
    </div>
  );
}
