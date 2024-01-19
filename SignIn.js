
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    setError(null);

    // Check for empty fields
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      phone.trim() === "" ||
      address.trim() === ""
    ) {
      setError("Please fill in all fields");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("https://65aa12d8081bd82e1d960561.mockapi.io/user", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (response.status === 201) {
        Alert.alert("Sign Up Success", `Welcome ${response.data.name}!`);
        Alert.alert("Success", "Account created successfully", [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
        ]);
      }
      // if (response.data.success) {
      //   Alert.alert("Success", "Account created successfully", [
      //     {
      //       text: "OK",
      //       onPress: () => {
      //         navigation.navigate("Login");
      //       },
      //     },
      //   ]);
      // } else {
      //   setError("Failed to register. Please try again.");
      //   navigation.navigate("Login");
      // }
    }
     catch (error) {
      console.error("API Error:", error);
      setError("Failed to register. Please try again.");
    }
  };

  const renderError = () => {
    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Sign Up</Text>
        <Text style={styles.subHeaderTitle}>
          Create a new account to access our services.
        </Text>

        <View style={styles.formContainer}>
          {renderError()}
          <Text style={styles.inputHeader}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />

          <Text style={styles.inputHeader}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />

          <Text style={styles.inputHeader}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
          />

          <Text style={styles.inputHeader}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType="phone-pad"
          />

          <Text style={styles.inputHeader}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <Text style={styles.inputHeader}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          {/* ... Other input fields ... */}

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.goBackText}>Go Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subHeaderTitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    width: "100%",
  },
  inputHeader: {
    textTransform: "uppercase",
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  signUpButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "900",
  },
  goBackButton: {
    marginTop: 10,
  },
  goBackText: {
    fontSize: 14,
    color: "blue",
  },
  errorContainer: {
    backgroundColor: "#e74c00",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    },
    errorText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    },
});
    
    
export default SignUp;

