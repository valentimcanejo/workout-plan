"use client";

import { useState } from "react";
import CardExercicio from "../../../components/ui/CardExercicio";
import { Exercicio } from "../../../models/supabase/exercicio";
import { useRouter } from "next/navigation";

export default function DetalhesExercicio({
  exercicios,
}: {
  exercicios: Exercicio[];
}) {
  const [exerciciosOrdenados, setExerciciosOrdenados] = useState(exercicios);

  const router = useRouter();
  console.log(exerciciosOrdenados);

  const moveUp = ({
    index,
    exercicioId,
  }: {
    index: number;
    exercicioId: string;
  }) => {
    console.log(index, exercicioId);

    const newExercicios = [...exercicios];
    const [removed] = newExercicios.splice(index, 1);
    newExercicios.splice(index - 1, 0, removed);
    setExerciciosOrdenados(newExercicios);
  };

  const moveDown = (index: number) => {
    const newExercicios = [...exercicios];
    const [removed] = newExercicios.splice(index, 1);
    newExercicios.splice(index + 1, 0, removed);
    setExerciciosOrdenados(newExercicios);
  };

  const verDetalhesExercicio = ({
    exercicioId,
    treinoId,
  }: {
    exercicioId: string;
    treinoId: string;
  }) => {
    router.push(`/treino/${treinoId}/exercicio/${exercicioId}`);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      {exercicios?.map((exercicio) => (
        <CardExercicio
          exercicioId={exercicio.id}
          index={exercicios.indexOf(exercicio)}
          key={exercicio.id}
          nome={exercicio.nome || ""}
          observacao={exercicio.observacao || ""}
          imagem={exercicio.imagem || ""}
          moveUp={moveUp}
          moveDown={moveDown}
          verDetalhesExercicio={() =>
            verDetalhesExercicio({
              exercicioId: exercicio.id,
              treinoId: exercicio.treino_id!,
            })
          }
        />
      ))}
    </div>
  );
}
