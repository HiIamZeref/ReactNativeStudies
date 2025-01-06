import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row", // Isso faz com que os elementos fiquem em linha e sejam alinhados horizontalmente
    justifyContent: "space-between", // Isso faz com que os elementos sejam alinhados e seja colocado um espaço entre eles
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
  },
});
