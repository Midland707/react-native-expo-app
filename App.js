import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/Photo_BG.jpg")}
        resizeMode="cover"
        style={styles.imageBack}
      >
        <RegistrationScreen />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch", //width: 100%
  },

  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
