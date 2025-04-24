import { CardExercicioSkeleton } from "../../../components/ui/CardExercicio";
import { CabecalhoExerciciosSkeleton } from "./CabecalhoExercicios";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-sm w-full mt-2 h-full gap-2">
      <CabecalhoExerciciosSkeleton />
      {Array.from({ length: 10 }).map((_, index) => (
        <CardExercicioSkeleton key={index} />
      ))}
    </div>
  );
}
