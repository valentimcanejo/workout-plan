import Image from "next/image";
import CardTreino from "../components/ui/CardTreino";
import { Treino } from "../models/supabase/treino";

export default function Home() {
  const treinos: Treino[] = [
    {
      id: "1",
      nome: "Push 1",
      observacao: "Primeiro treino de push",
      criado_em: new Date().toISOString(),
      alterado_em: new Date().toISOString(),
      indice: 1,
      treino_id: "1",
    },
    {
      id: "2",
      nome: "Pull 1",
      observacao: "Primeiro treino de push",
      criado_em: new Date().toISOString(),
      alterado_em: new Date().toISOString(),
      indice: 1,
      treino_id: "1",
    },
    {
      id: "3",
      nome: "Legs 1",
      observacao: "Primeiro treino de push",
      criado_em: new Date().toISOString(),
      alterado_em: new Date().toISOString(),
      indice: 1,
      treino_id: "1",
    },
    {
      id: "4",
      nome: "Push 2",
      observacao: "Primeiro treino de push",
      criado_em: new Date().toISOString(),
      alterado_em: new Date().toISOString(),
      indice: 1,
      treino_id: "1",
    },
    {
      id: "5",
      nome: "Pull 2",
      observacao: "Primeiro treino de push",
      criado_em: new Date().toISOString(),
      alterado_em: new Date().toISOString(),
      indice: 1,
      treino_id: "1",
    },
    {
      id: "6",
      nome: "Legs 2",
      observacao: "Primeiro treino de push",
      criado_em: new Date().toISOString(),
      alterado_em: new Date().toISOString(),
      indice: 1,
      treino_id: "1",
    },
  ];

  return (
    <div className="max-w-sm flex flex-col justify-center gap-4 items-center h-screen w-screen mx-auto px-2">
      {treinos?.map((treino) => (
        <CardTreino
          key={treino.id}
          nome={treino?.nome!}
          observacao={treino?.observacao!}
        />
      ))}
    </div>
  );
}
