"use client";

import { useState } from "react";
import CardExercicio from "../../../components/ui/CardExercicio";
import { Exercicio } from "../../../models/supabase/exercicio";
import PlayerVideo from "../../../components/ui/PlayerVideo";
import { Button } from "../../../components/ui/Button";

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
    <div className="flex flex-col w-full max-w-sm gap-4 px-2">
      <PlayerVideo video={exercicioAtual?.video || ""} />
      <Button onClick={() => setDetalhesExercicio("")}>
        Voltar para os exercícios
      </Button>
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
