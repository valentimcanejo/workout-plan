"use client";

import { useState } from "react";
import CardExercicio from "../../../components/ui/CardExercicio";
import { Exercicio } from "../../../models/supabase/exercicio";
import PlayerVideo from "../../../components/ui/PlayerVideo";

const exercicios: Exercicio[] = [
  {
    id: "1",
    nome: "Exercicio 1",
    observacao: "Primeiro exercicio",
    criado_em: new Date().toISOString(),
    alterado_em: new Date().toISOString(),
    indice: 1,
    treino_id: "1",
    imagem:
      "https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif",
    video: "",
  },

  {
    id: "2",
    nome: "Exercicio 1",
    observacao: "Primeiro exercicio",
    criado_em: new Date().toISOString(),
    alterado_em: new Date().toISOString(),
    indice: 1,
    treino_id: "1",
    imagem:
      "https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif",
    video: "",
  },
  {
    id: "3",
    nome: "Exercicio 1",
    observacao: "Primeiro exercicio",
    criado_em: new Date().toISOString(),
    alterado_em: new Date().toISOString(),
    indice: 1,
    treino_id: "1",
    imagem:
      "https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif",
    video: "",
  },
  {
    id: "4",
    nome: "Exercicio 1",
    observacao: "Primeiro exercicio",
    criado_em: new Date().toISOString(),
    alterado_em: new Date().toISOString(),
    indice: 1,
    treino_id: "1",
    imagem:
      "https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif",
    video: "",
  },
  {
    id: "5",
    nome: "Exercicio 1",
    observacao: "Primeiro exercicio",
    criado_em: new Date().toISOString(),
    alterado_em: new Date().toISOString(),
    indice: 1,
    treino_id: "1",
    imagem:
      "https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif",
    video: "",
  },
  {
    id: "6",
    nome: "Exercicio 1",
    observacao: "Primeiro exercicio",
    criado_em: new Date().toISOString(),
    alterado_em: new Date().toISOString(),
    indice: 1,
    treino_id: "1",
    imagem:
      "https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif",
    video: "",
  },
  {
    id: "7",
    nome: "Exercicio 1",
    observacao: "Primeiro exercicio",
    criado_em: new Date().toISOString(),
    alterado_em: new Date().toISOString(),
    indice: 1,
    treino_id: "1",
    imagem:
      "https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif",
    video: "",
  },
];

export default function DetalhesExercicio() {
  const [detalhesExercicio, setDetalhesExercicio] = useState("");
  const exercicioAtual = exercicios?.find(
    (exercicio) => exercicio.id === detalhesExercicio
  );

  return detalhesExercicio ? (
    <div className="flex flex-col w-full">
      <PlayerVideo video="https://www.youtube.com/watch?v=DPNZ-KQjAoY" />
      <button onClick={() => setDetalhesExercicio("")}></button>
    </div>
  ) : (
    <div className="flex flex-col gap-4 w-full">
      {exercicios?.map((exercicio) => (
        <CardExercicio
          exercicioId={exercicio.id}
          key={exercicio.id}
          nome={exercicio.nome!}
          observacao={exercicio.observacao!}
          imagem={exercicio.imagem!}
          setDetalhesExercicio={setDetalhesExercicio}
        />
      ))}
    </div>
  );
}
