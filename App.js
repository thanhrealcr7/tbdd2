import Restart from 'react-native-restart';

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductList from "./ProductList";
import DetailProduct from "./DetailProduct";
import SearchComponent from "./SearchComponent";
import Cart from "./Cart";
import Login from "./Login";
import SignIn from "./SignIn";
import { CartProvider } from "./CartContext";
import ProfileScreen from "./ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the icon library
import { useTranslation } from 'react-i18next';


//////
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="ホーム">
    <Stack.Screen
      name="ホーム"
      component={ProductList}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="DetailProduct" component={DetailProduct} />
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          {/* The Login screen will be the initial screen */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={SignIn} />

          {/* Wrap the Tab.Navigator inside the Stack.Navigator */}
          <Stack.Screen name="Main">
            {(props) => (
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "ホーム") {
                      iconName = focused ? "home" : "home";
                    } else if (route.name === "検索") {
                      iconName = focused ? "search" : "search";
                    }
                    else if (route.name === "Profile") {
                      iconName = focused ? "share" : "share";
                    }
                    // Add more conditions for other tabsr
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                  },
                })}
              >
              
                <Tab.Screen name="ホーム" component={HomeStack} />
                <Tab.Screen name="検索" component={SearchComponent} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
              </Tab.Navigator>
            )}
            
          </Stack.Screen>
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
    
  );
};

export default App;
