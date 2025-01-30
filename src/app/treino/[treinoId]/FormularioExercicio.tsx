"use client"; // Este é um Client Component

import { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

interface FormularioExercicioProps {
  onSubmit: (data: {
    nome: string;
    observacao: string;
    video: string;
    gif: string;
  }) => void;
}

export function FormularioExercicio({ onSubmit }: FormularioExercicioProps) {
  const [nome, setNome] = useState("");
  const [observacao, setObservacao] = useState("");
  const [video, setVideo] = useState("");
  const [gif, setGif] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({ nome, observacao, video, gif });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4 w-full">
      <div className="flex flex-col gap-2">
        <Label htmlFor="nome">Nome</Label>
        <Input
          type="text"
          placeholder="Digite o nome..."
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="observacao">Observação</Label>
        <Input
          type="text"
          placeholder="Digite a observação..."
          id="observacao"
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="video">Link do vídeo</Label>
        <Input
          type="text"
          placeholder="Digite o link do vídeo..."
          id="video"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="gif">Link do gif</Label>
        <Input
          type="text"
          placeholder="Digite o link do gif..."
          id="gif"
          value={gif}
          onChange={(e) => setGif(e.target.value)}
          className="col-span-3"
        />
      </div>

      <Button type="submit">Salvar Exercício</Button>
    </form>
  );
}
