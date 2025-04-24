import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Skeleton } from "./skeleton";

interface CardExercicioProps {
  exercicioId: string;
  nome: string;
  observacao: string;
  imagem: string;
  setDetalhesExercicio: Dispatch<SetStateAction<string>>;
}

export default function CardExercicio({
  exercicioId = "",
  nome = "",
  observacao = "",
  imagem = "",
  setDetalhesExercicio = () => {},
}: CardExercicioProps) {
  return (
    <button
      className="border shadow-xl text-lg w-full flex p-4 rounded-xl text-left"
      onClick={() => setDetalhesExercicio(exercicioId)}
    >
      <Image
        alt="exercicio"
        src={imagem}
        loading="lazy"
        width={80}
        height={80}
      />
      <div className="flex flex-col">
        <h1>{nome}</h1>
        <p className="text-sm text-gray-500">{observacao}</p>
      </div>
    </button>
  );
}

export const CardExercicioSkeleton = () => {
  return (
    <div className="flex items-center space-x-4 w-full h-full">
      <Skeleton className="w-full h-full p-4">
        <div className="flex w-full gap-2">
          <Skeleton className="w-16 h-16" />
          <div className="flex flex-col w-full gap-2 items-center justify-center">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
        </div>
      </Skeleton>
    </div>
  );
};
