import React from "react";
import { StyleSheet, Image, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

const handleChange = (e) => {
  e.target.reset;
};
const handleBlur = () => {};
const handleSubmit = () => {};

export const RegistrationScreen = (props) => (
  <Formik
    style={styles.form}
    initialValues={{ username: "", email: "", password: "" }}
    onSubmit={(values) => console.log("submitted", values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text>Username</Text>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={values.username}
          onBlur={handleBlur("username")}
          onChangeText={handleChange("username")}
        />
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={values.email}
          onBlur={handleBlur("email")}
          onChangeText={handleChange("email")}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={values.password}
          onBlur={handleBlur("password")}
          onChangeText={handleChange("password")}
          secureTextEntry={true}
        />
        <Button
          onPress={handleSubmit}
          style={styles.submitButn}
          title="Submit"
        />
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  form: {
    flex: 3,
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },

  input: {
    margin: 15,
    width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
  },

  submitButn: {
    width: 156,
    height: 19,

    fontFamily: "Roboto",
    // fontStyle: normal,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    // textAlign: center,
  },
});
