import { Link } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Exercicio } from "../../models/Exercicio";

interface CardProps {
  nome: string;
  observacao: string;
  treinoId: string;
}

export default function Card({
  nome = "",
  observacao = "",
  treinoId = "",
}: CardProps) {
  return (
    <Link
      href={{
        pathname: "/detalhesTreino",
        params: { treinoId },
      }}
      style={styles.card}
      asChild
    >
      <TouchableOpacity>
        <Text style={styles.nome}>{nome}</Text>
        <Text>{observacao}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
