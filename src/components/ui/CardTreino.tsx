interface CardTreinoProps {
  nome: string;
  observacao: string;
}

export default function CardTreino({
  nome = "",
  observacao = "",
}: CardTreinoProps) {
  return (
    <button className="border shadow-xl text-lg w-full p-4 rounded-xl text-center">
      <h1>{nome}</h1>
      <p className="text-sm text-gray-500">{observacao}</p>
    </button>
  );
}
