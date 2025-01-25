import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { buscarExerciciosTreino } from "../../utils/buscarExerciciosTreino";

export default function DetalhesTreino({}) {
  const { treinoId } = useLocalSearchParams();
  const exercicios = buscarExerciciosTreino(Number(treinoId));
  console.log(exercicios);

  return (
    <View>
      <Text>children</Text>
    </View>
  );
}
