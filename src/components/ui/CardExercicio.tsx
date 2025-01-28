import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

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
      className="border shadow-xl text-lg w-full flex p-4 rounded-xl text-center"
      onClick={() => setDetalhesExercicio(exercicioId)}
    >
      <Image alt="exercicio" src={imagem} width={80} height={80} />
      <div className="flex flex-col">
        <h1>{nome}</h1>
        <p className="text-sm text-gray-500">{observacao}</p>
      </div>
    </button>
  );
}
