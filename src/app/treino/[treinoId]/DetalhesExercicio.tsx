"use client";

import { useState } from "react";
import CardExercicio from "../../../components/ui/CardExercicio";
import { Exercicio } from "../../../models/supabase/exercicio";
import { useRouter } from "next/navigation";
import { atualizarExercicio } from "../../../backend/supabase/tables/exercicios";

export default function DetalhesExercicio({
  exercicios,
}: {
  exercicios: Exercicio[];
}) {
  const [exerciciosOrdenados, setExerciciosOrdenados] = useState(exercicios);

  const router = useRouter();
  console.log(exerciciosOrdenados);

  const moveUp = async ({ index }: { index: number }) => {
    if (index <= 0) return;

    const newExercicios = [...exerciciosOrdenados];

    // troca local
    const currentItem = newExercicios[index];
    const itemAbove = newExercicios[index - 1];

    newExercicios[index] = itemAbove;
    newExercicios[index - 1] = currentItem;

    // atualiza índices no banco
    await Promise.all([
      atualizarExercicio({
        exercicioId: currentItem.id,
        chave: "indice",
        valor: index - 1,
      }),
      atualizarExercicio({
        exercicioId: itemAbove.id,
        chave: "indice",
        valor: index,
      }),
    ]);

    setExerciciosOrdenados(newExercicios);
  };

  const moveDown = async ({ index }: { index: number }) => {
    if (index >= exerciciosOrdenados.length - 1) return;

    const newExercicios = [...exerciciosOrdenados];

    // troca local
    const currentItem = newExercicios[index];
    const itemBelow = newExercicios[index + 1];

    newExercicios[index] = itemBelow;
    newExercicios[index + 1] = currentItem;

    // atualiza índices no banco
    await Promise.all([
      atualizarExercicio({
        exercicioId: currentItem.id,
        chave: "indice",
        valor: index + 1,
      }),
      atualizarExercicio({
        exercicioId: itemBelow.id,
        chave: "indice",
        valor: index,
      }),
    ]);

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
      {exerciciosOrdenados?.map((exercicio, index) => (
        <CardExercicio
          exercicioId={exercicio.id}
          index={index}
          indexExercicio={exercicio?.indice!}
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
