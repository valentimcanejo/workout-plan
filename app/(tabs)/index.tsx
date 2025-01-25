import {
  Image,
  StyleSheet,
  Platform,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Constants from "expo-constants";
import Card from "../../components/ui/Card";
import { workoutPlans } from "../../utils/workoutPlans";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={workoutPlans}
          renderItem={({ item }) => (
            <Card
              nome={item.nome}
              observacao={item.observacao}
              treinoId={item.id.toString()}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
