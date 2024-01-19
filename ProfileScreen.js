

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
//   Linking,
//   Platform,
//   ScrollView,
//   Image,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import axios from "axios";
// import * as Location from "expo-location";

// const ProfileScreen = ({ route }) => {
//   const [userData, setUserData] = useState(null);
//   const [location, setLocation] = useState(null);
//   const [address, setAddress] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const navigation = useNavigation();
//   const userId = route.params?.userId;

//   useEffect(() => {
//     if (userId) {
//       const fetchUserData = async () => {
//         try {
//           const response = await axios.get(
//             // `https://fakestoreapi.com/users/${userId}`
//             `https://65aa12d8081bd82e1d960561.mockapi.io/user/${userId}`
//           );
//           setUserData(response.data);
//         } catch (error) {
//           console.error("API Error:", error);
//         }
//       };
//       fetchUserData();
//     }

//     // Get current location
//     const getLocation = async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         console.error("Permission to access location was denied");
//         setLoading(false);
//         return;
//       }

//       try {
//         const locationResult = await Location.getCurrentPositionAsync({
//           accuracy: Location.Accuracy.Highest,
//           timeout: 10000, // Increase timeout if needed
//         });

//         setLocation(locationResult.coords);

//         const reverseGeocode = await Location.reverseGeocodeAsync({
//           latitude: locationResult.coords.latitude,
//           longitude: locationResult.coords.longitude,
//         });

//         console.log("Reverse Geocode Result:", reverseGeocode); // Debug: Check the result

//         if (reverseGeocode && reverseGeocode.length > 0) {
//           setAddress(reverseGeocode[0]);
//           console.log("Set Address:", reverseGeocode[0]); // Debug: Check the address object
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error getting current location:", error);
//         setLoading(false);
//       }
//     };

//     getLocation();
//   }, [userId]);

//   const handleLogout = () => {
//     navigation.navigate("Login");
//   };

//   const openMap = () => {
//     if (location) {
//       const lat = location.latitude;
//       const lon = location.longitude;
//       const label = address
//         ? `${address.name}, ${address.street}, ${address.city}`
//         : `${lat},${lon}`;

//       const encodedLabel = encodeURIComponent(label);

//       const url = Platform.select({
//         ios: `http://maps.apple.com/?q=${encodedLabel}`,
//         android: `geo:${lat},${lon}?q=${encodedLabel}`,
//       });

//       Linking.openURL(url).catch((err) =>
//         console.error("An error occurred", err)
//       );
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text style={styles.loadingText}>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.scrollView}>
//       <View style={styles.profileContainer}>
//         {userData && (
//           <View style={styles.userInfoSection}>
//             <Image
//             source={require('./assets/avatar.jpg')} 
//             style={styles.profileImage}
//             />
//             <Text style={styles.name}>{`${userData.name}`}</Text>
//             <Text style={styles.email}>Email: {userData.email}</Text>
//             <Text style={styles.phone}>Phone: {userData.phone}</Text>
//           </View>
//         )}
//       </View>
//       <View style={styles.locationContainer}>
//         <Text style={styles.sectionTitle}>Current Location</Text>
//         {location ? (
//           <>
//             {address && (
//               <>
//                 <Text style={styles.locationText}>Name: {address.name}</Text>
//                 <Text style={styles.locationText}>
//                   Street: {address.street}
//                 </Text>
//                 <Text style={styles.locationText}>
//                   City: {address.subregion}
//                 </Text>
//               </>
//             )}
//             <TouchableOpacity style={styles.button} onPress={openMap}>
//               <Text style={styles.buttonText}>Open in Maps</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <Text style={styles.errorText}>Unable to fetch location.</Text>
//         )}
//         <TouchableOpacity
//           style={[styles.button, styles.logoutButton]}
//           onPress={handleLogout}
//         >
//           <Text style={styles.buttonText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f2f2f2",
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 18,
//     color: "#555",
//   },
//   scrollView: {
//     backgroundColor: "#f2f2f2",
//   },
//   profileContainer: {
//     alignItems: "center",
//     paddingVertical: 20,
//   },
//   userInfoSection: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 20,
//     alignItems: "center",
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   email: {
//     fontSize: 16,
//     color: "#666",
//   },
//   phone: {
//     fontSize: 16,
//     color: "#666",
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     padding: 10,
//   },
//   locationContainer: {
//     padding: 20,
//   },
//   locationText: {
//     fontSize: 16,
//     color: "#666",
//   },
//   errorText: {
//     fontSize: 16,
//     color: "red",
//   },
//   button: {
//     backgroundColor: "#0066cc",
//     padding: 15,
//     borderRadius: 8,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   logoutButton: {
//     backgroundColor: "#cc0000",
//   },
//   // Add any other styles you need here
// });

// export default ProfileScreen;



import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as Location from "expo-location";
import { MaterialIcons } from '@expo/vector-icons'; // You may use other icon libraries
const ProfileScreen = ({ route }) => {
  const [userData, setUserData] = useState(null);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const userId = route.params?.userId;

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `https://65aa12d8081bd82e1d960561.mockapi.io/user/${userId}`
          );
          setUserData(response.data);
        } catch (error) {
          console.error("API Error:", error);
        }
      };
      fetchUserData();
    }

    // Get current location
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        setLoading(false);
        return;
      }

      try {
        const locationResult = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
          timeout: 10000,
        });

        setLocation(locationResult.coords);

        const reverseGeocode = await Location.reverseGeocodeAsync({
          latitude: locationResult.coords.latitude,
          longitude: locationResult.coords.longitude,
        });

        console.log("Reverse Geocode Result:", reverseGeocode);

        if (reverseGeocode && reverseGeocode.length > 0) {
          setAddress(reverseGeocode[0]);
          console.log("Set Address:", reverseGeocode[0]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error getting current location:", error);
        setLoading(false);
      }
    };

    getLocation();
  }, [userId]);

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const openMap = () => {
    if (location) {
      const lat = location.latitude;
      const lon = location.longitude;
      const label = address
        ? `${address.name}, ${address.street}, ${address.city}`
        : `${lat},${lon}`;

      const encodedLabel = encodeURIComponent(label);

      const url = Platform.select({
        ios: `http://maps.apple.com/?q=${encodedLabel}`,
        android: `geo:${lat},${lon}?q=${encodedLabel}`,
      });

      Linking.openURL(url).catch((err) =>
        console.error("An error occurred", err)
      );
    }
  };

  if (loading) {
    return (
      <View style={newStyles.centeredView}>
        <ActivityIndicator size="large" color="#5DB075" />
        <Text style={newStyles.loadingText}>Loading your profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={newStyles.container}>
      <View style={newStyles.profileCard}>
        {userData && (
          <>
            <Image
              source={require('./assets/avatar.jpg')} // Update with dynamic image
              style={newStyles.profileImage}
            />
            <Text style={newStyles.name}>{userData.name}</Text>
            <Text style={newStyles.details}>Email: {userData.email}</Text>
            <Text style={newStyles.details}>Phone: {userData.phone}</Text>
          </>
        )}
      </View>

      <View style={newStyles.locationCard}>
        <Text style={newStyles.cardTitle}>Current Location</Text>
        {location ? (
          <>
            {address && (
              <>
                <Text style={newStyles.details}>Street: {address.street}</Text>
                <Text style={newStyles.details}>City: {address.city}</Text>
              </>
            )}
            <TouchableOpacity style={newStyles.button} onPress={openMap}>
              <Text style={newStyles.buttonText}>View on Map</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={newStyles.errorText}>Location not available.</Text>
        )}
      </View>

      <TouchableOpacity
        style={[newStyles.button, newStyles.logoutButton]}
        onPress={handleLogout}
      >
        <MaterialIcons name="logout" size={24} color="white" />
        <Text style={newStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const newStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    margin: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  locationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 16,
    color: "#666",
    marginVertical: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#5DB075",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
  logoutButton: {
    backgroundColor: "#FF6347",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#FF6347",
    textAlign: "center",
  },
  // Add any additional styles you need here
});

export default ProfileScreen;
