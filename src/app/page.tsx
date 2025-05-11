import CardTreino from "../components/ui/CardTreino";
import { buscarTodosTreinos } from "../backend/supabase/tables/treinos";

export default async function Home() {
  const data = await buscarTodosTreinos();
  console.log(data);

  return (
    <div className="max-w-sm flex flex-col justify-center gap-4 items-center h-screen w-screen mx-auto px-2">
      {data ? (
        data?.map((treino) => (
          <CardTreino
            key={treino.id}
            treinoId={treino.id}
            nome={treino?.nome}
            observacao={treino?.observacao}
          />
        ))
      ) : (
        <p>Nenhum treino cadastrado</p>
      )}
    </div>
  );
}
