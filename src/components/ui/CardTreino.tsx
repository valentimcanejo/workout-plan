import Link from "next/link";

interface CardTreinoProps {
  treinoId: string;
  nome: string;
  observacao: string;
}

export default function CardTreino({
  treinoId = "",
  nome = "",
  observacao = "",
}: CardTreinoProps) {
  return (
    <Link
      href={`/treino/${treinoId}`}
      className="border shadow-xl text-lg w-full p-4 rounded-xl text-center"
    >
      <h1>{nome}</h1>
      <p className="text-sm text-gray-500">{observacao}</p>
    </Link>
  );
}
