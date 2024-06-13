import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// call drawer
import { createDrawerNavigator } from "@react-navigation/drawer";


import { PaperProvider, configureFonts } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import 'react-native-gesture-handler';

import {
  SplashScreen,
  Login,
  Register,
  Nerby,
  Home,
  ProfileScreen,
} from "./screens";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import FlashMessage from "react-native-flash-message";
import AppLoading from "expo-app-loading";
import CustomDrawer from "../ss/components/CustomDrawer"

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import EditProfile from "./screens/EditProfile";
import about from "./screens/about";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


LogBox.ignoreAllLogs();


const TabList = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn == "Home") {
            iconName = focused ? "home" : "home-outline";
            return (
              <CustomTabIcon
                name={iconName}
                focused={focused}
                size={size}
                color={color}
              />
            );
          } else if (rn == "Nerby") {
            iconName = focused ? "map-marker" : "map-marker-outline";
            return (
              <CustomTabIcon
                name={iconName}
                focused={focused}
                size={size}
                color={color}
              />
            );
          }

        },
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          backgroundColor: "#ffffff",
        },
      })}
      tabBarOptions={{
        activeTintColor: "#774494",
        inactiveTintColor: "#C7C7C7",
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreenWithDrawer}
        options={{
          tabBarShowLabel: false,
          
        }}
      />
      <Tab.Screen
        name={"Nerby"}
        component={Nerby}
        options={{
          tabBarShowLabel: false,
        }}
      />
     
    </Tab.Navigator>
  );
};


const CustomTabIcon = ({ name, focused, size, color }) => {
  return (
    <View style={styles.tabIconContainer}>
      {focused ? (
        <View
          style={{
            width: "100%",
            height: 7,
            backgroundColor: "#774494",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        />
      ) : null}
      <MaterialCommunityIcons
        name={name}
        size={30}
        color={color}
        style={styles.tabIcon}
      />
    </View>
  );
};


//Drawer
const HomeScreenWithDrawer = () => {
  return(
<Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
      headerShown:false,
      headerStyle:{
        backgroundColor: '#0163d2'
      },
    }}
    >
    <Drawer.Screen name={"Home"} component={Home}/>
    <Drawer.Screen name={"Profile"} component={ProfileScreen}/>

    </Drawer.Navigator>
    
  );
};


export default function App() {
 
  
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  return fontsLoaded ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={"Splash"} component={SplashScreen} />
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"Register"} component={Register} />
        <Stack.Screen name={"HomeTab"} component={TabList}/>
        <Stack.Screen name={"EditProfil"} component={EditProfile}/>
        <Stack.Screen name={"About"} component={about}/>



      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },
  tabIcon: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
