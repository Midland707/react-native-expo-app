import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from "react-native";

// const handleChange = (e) => {
//   e.target.reset;
// };
// const handleBlur = () => {};
// const handleSubmit = () => {};

export const RegistrationScreen = (props) => (
  <View style={styles.form}>
    <Image
      style={styles.tinyLogo}
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
    />

    <Text>Registration</Text>
    <TextInput
      placeholder="Username"
      style={styles.input}
      // onBlur={handleBlur("username")}
      // onChangeText={handleChange("username")}
    />
    <TextInput
      placeholder="Email"
      style={styles.input}
      // onBlur={handleBlur("email")}
      // onChangeText={handleChange("email")}
    />
    <TextInput
      placeholder="Password"
      style={styles.input}
      // onBlur={handleBlur("password")}
      // onChangeText={handleChange("password")}
      secureTextEntry={true}
    />
    <TouchableOpacity
      // onPress={handleSubmit}
      style={styles.submitBtn}
    >
      <Text>Sing in</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  form: {
    width: 375,
    height: 550,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F6F6F6",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    display: "flex",
    justifyContent: "space-evenly",
    // justifyContent: "center",
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },

  input: {
    height: 50,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    padding: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },

  submitBtn: {
    width: 343,
    height: 51,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "red",
  },
});
