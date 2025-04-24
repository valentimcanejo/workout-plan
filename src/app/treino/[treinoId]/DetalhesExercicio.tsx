"use client";

import { useState } from "react";
import CardExercicio from "../../../components/ui/CardExercicio";
import { Exercicio } from "../../../models/supabase/exercicio";
import PlayerVideo from "../../../components/ui/PlayerVideo";
import { Button } from "../../../components/ui/Button";
import { Textarea } from "../../../components/ui/textarea";
import { atualizarExercicio } from "../../../backend/supabase/tables/exercicios";

export default function DetalhesExercicio({
  exercicios,
}: {
  exercicios: Exercicio[];
}) {
  const [detalhesExercicio, setDetalhesExercicio] = useState("");
  const exercicioAtual = exercicios?.find(
    (exercicio) => exercicio.id === detalhesExercicio
  );

  return detalhesExercicio ? (
    <div className="flex flex-col w-full max-w-sm gap-4 h-full px-2">
      <h1 className="text-lg font-bold">{exercicioAtual?.nome}</h1>
      <Textarea
        defaultValue={exercicioAtual?.observacao || ""}
        onBlur={async (e) => {
          await atualizarExercicio({
            exercicioId: exercicioAtual?.id || "",
            chave: "observacao",
            valor: e.target.value,
          });
        }}
      />

      <Button onClick={() => setDetalhesExercicio("")}>
        Voltar para os exercícios
      </Button>
      <PlayerVideo video={exercicioAtual?.video || ""} />
    </div>
  ) : (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      {exercicios?.map((exercicio) => (
        <CardExercicio
          exercicioId={exercicio.id}
          key={exercicio.id}
          nome={exercicio.nome || ""}
          observacao={exercicio.observacao || ""}
          imagem={exercicio.imagem || ""}
          setDetalhesExercicio={setDetalhesExercicio}
        />
      ))}
    </div>
  );
}
