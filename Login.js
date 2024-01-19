

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   Image,
//   Alert,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const isTestMode = true;

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState(isTestMode ? "john@gmail.com" : "");
//   const [password, setPassword] = useState(isTestMode ? "m38rmF$" : "");
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("API Error:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleLogin = () => {
//     const user = users.find(
//       (u) => u.email === email && u.password === password
//     );
//     if (user) {
//       navigation.navigate("Main", {
//         screen: "Profile",
//         params: { userId: user.id },
//       });
//       Alert.alert("Authentication Success", "Welcome back to our clothes shop");
//     } else {
//       Alert.alert("Authentication Failed", "Invalid email or password");
//     }
//   };

//   const handleSignIn = () => {
//     navigation.navigate('SignIn');
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Image
//           source={require("./assets/login_banner.png")}
//           style={styles.bannerImage}
//         />

//         <Text style={styles.headerTitle}>Sign In</Text>
//         <Text style={styles.subHeaderTitle}>
//           Please sign in to your existing account.
//         </Text>

//         <View style={styles.formContainer}>
//           <Text style={styles.inputHeader}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="john@gmail.com"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             keyboardType="email-address"
//           />

//           <Text style={styles.inputHeader}>Password</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="m38rmF$"
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry={true}
//           />

//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//             <Text style={styles.buttonText}>LOGIN</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.forgotPasswordButton}
//             onPress={() => navigation.navigate("Verification")}
//           >
//             <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
//             <Text style={styles.signInText}>SIGN IN</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingBottom: 4,
//   },
//   bannerImage: {
//     width: "100%",
//     height: 250,
//     marginBottom: 20,
//     borderRadius: 20,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   subHeaderTitle: {
//     fontSize: 16,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   formContainer: {
//     width: "100%",
//   },
//   inputHeader: {
//     textTransform: "uppercase",
//     fontSize: 14,
//     marginBottom: 4,
//     fontWeight: "bold",
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 16,
//     paddingHorizontal: 10,
//   },
//   loginButton: {
//     backgroundColor: "green",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "900",
//   },
//   forgotPasswordButton: {
//     marginTop: 10,
//   },
//   forgotPasswordText: {
//     fontSize: 14,
//     color: "blue",
//   },
//   signInButton: {
//     backgroundColor: "#3498db", // Màu xanh dương
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   signInText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "900",
//   },
// });

// export default Login;


import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const isTestMode = true;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(isTestMode ? "thanhjp0108@gmail.com" : "");
  const [password, setPassword] = useState(isTestMode ? "thanh123" : "");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://65aa12d8081bd82e1d960561.mockapi.io/user");
        setUsers(response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      navigation.navigate("Main", {
        screen: "Profile",
        params: { userId: user.id },
      });
      Alert.alert("Authentication Success", "Welcome back to our clothes shop");
    } else {
      Alert.alert("Authentication Failed", "Invalid email or password");
    }
  };

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground
      source={require("./assets/bg.jpg")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            source={require("./assets/login_banner.png")}
            style={styles.bannerImage}
          />

          <Text style={styles.headerTitle}>Sign In</Text>
          <Text style={styles.subHeaderTitle}>
            Please sign in to your existing account.
          </Text>

          <View style={styles.formContainer}>
            <Text style={styles.inputHeader}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="thanhjp0108@gmail.com"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />

            <Text style={styles.inputHeader}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="thanh123"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={() => navigation.navigate("Verification")}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
              <Text style={styles.signInText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  bannerImage: {
    width: "112%",
    height: 250,
    marginBottom: 20,
    borderRadius: 20,
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
    color: "white",
  },
  formContainer: {
    width: "100%",
  },
  inputHeader: {
    textTransform: "uppercase",
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
    color: "white",
  },
  loginButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "900",
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "blue",
  },
  signInButton: {
    backgroundColor: "#3498db", // Màu xanh dương
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  signInText: {
    color: "white",
    fontSize: 16,
    fontWeight: "900",
  },
});

export default Login;
