import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CauseDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Detalhes da causa</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}
