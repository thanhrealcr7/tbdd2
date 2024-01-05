// // Inside your Profile component
// import React, { useEffect, useState } from "react";
// import { View, Text } from "react-native";
// import axios from "axios";

// const ProfileScreen = ({ route }) => {
//   const { userId, username } = route.params;
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(
//           `https://fakestoreapi.com/users/${userId}`
//         );
//         setUserData(response.data);
//       } catch (error) {
//         console.error("API Error:", error);
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   return (
//     <View>
//       <Text>User ID: {userId}</Text>
//       <Text>Username: {username}</Text>
//       {userData && (
//         <>
//           <Text>Email: {userData.email}</Text>
//         </>
//       )}
//     </View>
//   );
// };

// export default ProfileScreen;

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const ProfileScreen = ({ route }) => {
  const { userId } = route.params;
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/users/${userId}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleLogout = () => {
    // Navigate to the Login page
    navigation.navigate("Login");
  };

  const getInitials = () => {
    if (userData && userData.name) {ư
      const { firstname, lastname } = userData.name;
      return `${firstname.charAt(0)}${lastname.charAt(0)}`;
    }
    return "";ww
  };

  return (
    <View style={styles.container}>
      {userData && (
        <>
          <Text style={styles.name}>
            {`${userData.name.firstname.toUpperCase()} ${userData.name.lastname.toUpperCase()}`}
          </Text>
          <Text style={styles.email}>Email: {userData.email}</Text>
          <Text style={styles.phone}>Phone: {userData.phone}</Text>
          <Text style={styles.address}>
            Address: {userData.address.number} {userData.address.street},{" "}
            {userData.address.city}, {userData.address.zipcode}
          </Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textTransform: "uppercase",
  },
  email: {
    fontSize: 16,
    marginTop: 5,
  },
  phone: {
    fontSize: 16,
    marginTop: 5,
  },
  address: {
    fontSize: 16,
    marginTop: 5,
  },
  button: {
    padding: 20,
    width: 20,

    // backgroundColor: "red",
    // borderRadius: 20,
    margin: 10,
    width: 200,
  },
});

export default ProfileScreen;
