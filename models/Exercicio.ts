export interface Exercicio {
  id: number;
  nome: string;
  observacao: string;
  imagem: string;
  video: string;
}

export interface Treino {
  id: number;
  nome: string;
  observacao: string;
  exercicios: Exercicio[];
}
