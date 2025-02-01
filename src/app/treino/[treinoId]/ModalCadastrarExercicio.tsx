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
import { cadastrarExercicio } from "../../../backend/supabase/tables/exercicios";

export function ModalCadastrarExercicio({ treinoId }: { treinoId: string }) {
  const criarExercicio = async (data: {
    nome: string;
    observacao: string;
    video: string;
    imagem: string;
    treino_id: string;
  }) => {
    await cadastrarExercicio(data);
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
        <FormularioExercicio onSubmit={criarExercicio} treino_id={treinoId} />
      </DialogContent>
    </Dialog>
  );
}
