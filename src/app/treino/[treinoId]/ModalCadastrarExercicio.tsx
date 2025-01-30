"use client";

import { CirclePlus } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { FormularioExercicio } from "./FormularioExercicio";

export function ModalCadastrarExercicio() {
  const criarTarefa = async (data: {
    nome: string;
    observacao: string;
    video: string;
    gif: string;
  }) => {
    const { nome, observacao, video, gif } = data;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CirclePlus color="green" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Exercício</DialogTitle>
        </DialogHeader>
        <FormularioExercicio onSubmit={criarTarefa} />
      </DialogContent>
    </Dialog>
  );
}
