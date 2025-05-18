import Image from "next/image";
import { Dispatch, forwardRef, SetStateAction } from "react";
import { Skeleton } from "./skeleton";
import { ChevronDown, ChevronUp, Eye } from "lucide-react";

interface CardExercicioProps {
  exercicioId: string;
  nome: string;
  index: number;
  indexExercicio: number;
  observacao: string;
  imagem: string;
  verDetalhesExercicio?: any;
  moveUp?: any;
  moveDown?: any;
}

const CardExercicio = forwardRef<HTMLDivElement, CardExercicioProps>(
  (
    {
      exercicioId = "",
      nome = "",
      index = 0,
      indexExercicio = 0,
      observacao = "",
      imagem = "",
      verDetalhesExercicio = () => {},
      moveUp = () => {},
      moveDown = () => {},
      ...rest
    },
    ref
  ) => {
    return (
      <div
        {...rest}
        ref={ref}
        className="border shadow-xl text-lg w-full flex p-4 rounded-xl text-left cursor-pointer"
      >
        <Image
          alt="exercicio"
          src={imagem}
          loading="lazy"
          width={80}
          height={80}
        />
        <div className="flex flex-col ml-4">
          <h1>{nome}</h1>
          <p className="text-sm text-gray-500 break-words overflow-hidden text-ellipsis line-clamp-3">
            {observacao}
          </p>
        </div>
        <div className="flex flex-col my-auto ml-auto gap-1">
          <button
            onClick={() => moveUp({ index, exercicioId, indexExercicio })}
            className="border p-1"
          >
            <ChevronUp />
          </button>
          <button
            onClick={() => moveDown({ index, exercicioId, indexExercicio })}
            className="border p-1"
          >
            <ChevronDown />
          </button>
          <button onClick={verDetalhesExercicio} className="border p-1">
            <Eye />
          </button>
        </div>
      </div>
    );
  }
);

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

export default CardExercicio;
