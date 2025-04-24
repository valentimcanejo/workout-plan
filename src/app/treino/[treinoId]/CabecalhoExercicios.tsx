import { Undo2 } from "lucide-react";
import Link from "next/link";
import { ModalCadastrarExercicio } from "./ModalCadastrarExercicio";
import { Skeleton } from "../../../components/ui/skeleton";

export default function CabecalhoExercicios({
  treinoId,
}: {
  treinoId: string;
}) {
  return (
    <div className="flex justify-between w-full p-4 sticky top-0 bg-white max-w-sm">
      <Link href="/">
        <Undo2 />
      </Link>
      <h1>Exercícios</h1>
      <ModalCadastrarExercicio treinoId={treinoId} />
    </div>
  );
}

export const CabecalhoExerciciosSkeleton = () => {
  return <Skeleton className="w-full h-12" />;
};
