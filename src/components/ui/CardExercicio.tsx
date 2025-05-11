import Image from "next/image";
import { Dispatch, forwardRef, SetStateAction } from "react";
import { Skeleton } from "./skeleton";

interface CardExercicioProps {
  exercicioId: string;
  nome: string;
  index: number;
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
        onClick={verDetalhesExercicio}
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
          <p className="text-sm text-gray-500">{observacao}</p>
        </div>
        {/* <div className="flex flex-col ml-auto">
          <button onClick={() => moveUp({ index, exercicioId })}>{"<"}</button>
          <button onClick={moveDown}>{">"}</button>
        </div> */}
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
