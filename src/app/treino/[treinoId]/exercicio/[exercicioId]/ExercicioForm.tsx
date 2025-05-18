"use client";

import { Exercicio } from "@/models/supabase/exercicio";
import { atualizarExercicio } from "../../../../../backend/supabase/tables/exercicios";
import PlayerVideo from "../../../../../components/ui/PlayerVideo";
import { Textarea } from "../../../../../components/ui/textarea";

export default function ExercicioForm({ exercicio }: { exercicio: Exercicio }) {
  const observacao = exercicio?.observacao || "";

  return (
    <>
      <h1 className="text-lg font-bold">{exercicio?.nome}</h1>
      <Textarea
        defaultValue={observacao}
        className="h-32"
        onBlur={async (e) => {
          await atualizarExercicio({
            exercicioId: exercicio?.id || "",
            chave: "observacao",
            valor: e.target.value,
          });
        }}
      />
      <PlayerVideo video={exercicio?.video || ""} />
    </>
  );
}
