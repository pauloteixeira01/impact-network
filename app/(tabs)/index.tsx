import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const causes = [
  {
    id: "1",
    title: "Abrigo São Francisco",
    description: "Ajude cuidando de animais resgatados",
    distance: "2.4 km",
  },
  {
    id: "2",
    title: "Projeto Criança Feliz",
    description: "Voluntários para reforço escolar",
    distance: "4.1 km",
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#0B1220" }}>
      {/* Header */}
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
        Olá 👋
      </Text>

      <Text style={{ color: "#94a3b8", marginBottom: 20 }}>
        Pronto para fazer a diferença hoje?
      </Text>

      {/* Section */}
      <Text style={{ fontSize: 18, color: "white", marginBottom: 10 }}>
        Causas perto de você
      </Text>

      {/* List */}
      <FlatList
        data={causes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#111827",
              padding: 16,
              borderRadius: 14,
              marginBottom: 12,
            }}
            onPress={() => router.push(`/cause/${item.id}`)}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
              {item.title}
            </Text>

            <Text style={{ color: "#cbd5e1", marginTop: 4 }}>
              {item.description}
            </Text>

            <Text style={{ marginTop: 8, color: "#38bdf8" }}>
              📍 {item.distance}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* CTA */}
      <TouchableOpacity
        style={{
          backgroundColor: "#2563eb",
          padding: 18,
          borderRadius: 14,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          🤝 Quero ajudar agora
        </Text>
      </TouchableOpacity>
    </View>
  );
}
