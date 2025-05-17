"use client";

import { Undo2 } from "lucide-react";
import { ModalCadastrarExercicio } from "./ModalCadastrarExercicio";
import { Skeleton } from "../../../components/ui/skeleton";
import { useRouter } from "next/navigation";

export default function CabecalhoExercicios({
  treinoId,
  rotaAnterior = "",
}: {
  treinoId: string;
  rotaAnterior?: string;
}) {
  const router = useRouter();

  return (
    <div className="flex justify-between w-full p-4 sticky top-0 bg-white max-w-sm">
      <button onClick={() => router.push(rotaAnterior)}>
        <Undo2 />
      </button>
      <h1>Exercícios</h1>
      <ModalCadastrarExercicio treinoId={treinoId} />
    </div>
  );
}

export const CabecalhoExerciciosSkeleton = () => {
  return <Skeleton className="w-full h-12" />;
};
