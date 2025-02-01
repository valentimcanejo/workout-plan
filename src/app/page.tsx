import CardTreino from "../components/ui/CardTreino";
import { buscarTodosTreinos } from "../backend/supabase/tables/treinos";

export default async function Home() {
  const data = await buscarTodosTreinos();

  return (
    <div className="max-w-sm flex flex-col justify-center gap-4 items-center h-screen w-screen mx-auto px-2">
      {data?.map((treino) => (
        <CardTreino
          key={treino.id}
          treinoId={treino.id}
          nome={treino?.nome}
          observacao={treino?.observacao}
        />
      ))}
    </div>
  );
}
