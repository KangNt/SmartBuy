import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomHeader, CustomDrawerContent,Scanner,BarcodeScannerExample } from './src'
import { HomeScreen, HomeScreenDetail, SettingsScreen, SettingsScreenDetail, HistoryScreen, CreateCodeScreen, ButtonScreen } from './src/tab'
import { NotificationsScreen } from './src/drawer'
import { LoginScreen, RegisterScreen,ShowScan } from './src/auth'

import { Ionicons, Feather } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';
import { IMAGE } from './src/constants/Image';



//error AddButton 

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator();

function HomeStack() {

  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
      
      
    </StackHome.Navigator>
  );
};

const StackHistory = createStackNavigator();

function HistoryStack() {
  return (
    <StackHistory.Navigator initialRouteName="History" >
      <StackHistory.Screen name="History" component={HistoryScreen} options={navOptionHandler} />
    </StackHistory.Navigator>
  );
};

const StackButton = createStackNavigator();

function ButtonStack() {
  return (
    <StackButton.Navigator initialRouteName="ButtonScreen" >
      <StackButton.Screen name="ButtonScreen" component={ButtonScreen} options={navOptionHandler} />
    </StackButton.Navigator>
  ) 
}


const StackCreate = createStackNavigator();
function CreateStack() {
  return (
    <StackCreate.Navigator initialRouteName="CreateCode">
      <StackCreate.Screen name="CreateCode" component={BarcodeScannerExample} options={navOptionHandler} />
      <StackCreate.Screen name="showscan" component={ShowScan} options={navOptionHandler} />
    </StackCreate.Navigator>
  );
};


//history-create the code - like(<3)    
const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="SettingDetail">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler} />
    </StackSetting.Navigator>
  )
}


function TabNavigator() {
  return (
    <Tab.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused }) => {
    //     let iconName;
    //     if (route.name === 'Home') {
    //       iconName = focused
    //         ? IMAGE.ICON_HOME
    //         : IMAGE.ICON_HOME_BLACK;
    //     } else if (route.name === 'Settings') {
    //       iconName = focused
    //         ? IMAGE.ICON_SETTINGS
    //         : IMAGE.ICON_SETTINGS_BLACK;
    //     }
    //     // You can return any component that you like here!
    //     return <Ionicons name={iconName} style={{ width: 20, height: 20 }}
    //       resizeMode="contain" />;
    //   },
    // })}
    // tabBarOptions={{
    //   activeTintColor: 'red',
    //   inactiveTintColor: 'black',
    // }}
    >

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />
        }}
        name="Home" component={HomeStack} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="clock" size={24} color={color} />
        }}
        name="History" component={HistoryStack} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="star" size={24} color={color} />
        }}
        name="ButtonScreen" component={ButtonStack} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="qrcode" size={24} color={color} />
        }}
        name="Scan" component={CreateStack} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="cog" size={24} color={color} />
        }}
        name="Settings123"  component={SettingStack} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab"
      drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )

}


const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="HomeApp">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}




// import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createDrawerNavigator } from "react-navigation-drawer";
// import { Dimensions } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import {
//   ProfileScreen,
//   SignOutScreen,
//   HomeScreen,
//   HistoryScreen
// } from "./screens";

// import SideBar from "./components/SideBar";
// // //**----------------------------------------- */
// // import { createBottomTabNavigator } from 'react-navigation-tabs';

// // import { NavigationContainer } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // import { createStackNavigator } from 'react-navigation-stack';
// // import { NavigationContainer } from '@react-navigation/native';

// import HomeScreen from './screens/HomeScreen'
// import ProfileScreen from './screens/ProfileScreen'



// const DrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => <Feather name="home"  size={16} color={tintColor}  />
//       }
//     },

//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
//       }
//     },
//     History: {
//       screen: HistoryScreen,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => <Feather name="clock" size={16} color={tintColor} />
//       }
//     },


//     SignOut: {
//       screen: SignOutScreen,
//       navigationOptions: {
//         title: "Sign Out",
//         drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
//       }
//     },

//   },
//   {
//     contentComponent: props => <SideBar {...props} />,
//     drawerWidth: Dimensions.get("window").width * 0.85,
//     hideStatusBar: true,

//     contentOptions: {
//       activeBackgroundColor: "rgba(212,118,207, 0.2)",
//       activeTintColor: "#53115B",
//       itemsContainerStyle: {
//         marginTop: 16,
//         marginHorizontal: 8
//       },
//       itemStyle: {
//         borderRadius: 4
//       }
//     }
//   }
// );




// export default createAppContainer(DrawerNavigator);



/***************************************************************************************** */

// import React from 'react';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// // import { createStackNavigator } from 'react-navigation-stack';//
// // import {createSwitchNavigator} from 'react-navigation';//
// import { FontAwesome5 } from '@expo/vector-icons';
// import { createAppContainer} from 'react-navigation'
// import { JournalScreen, MeasuresScreen, TreamentScreen, ProfileScreen } from './screens';
// import AddButton from './components/AddButton';

// // import SettingScreen from './screens/SettingScreen'
// import HistoryScreen from './screens/HistoryScreen'

// // import LoginScreen from './components/InputTextField'



// const TabNavigator = createBottomTabNavigator(
//   {
//     Journal: {
//       screen: JournalScreen,
//       navigationOptions: {
//         tabBarIcon: <HistoryScreen/>
//         //  () =>  <FontAwesome5 name="clock" size={24} color={"#CDCCCE"} />

//       }
//     },

//     Measures: {
//       screen: MeasuresScreen,
//       navigationOptions: {
//         tabBarIcon: () => <FontAwesome5 name="qrcode" size={24} color={"#CDCCCE"} />

//       }
//     },
//     Add: {
//       screen: () => null,
//       navigationOptions: {
//         tabBarIcon: <AddButton />
//       }
//     },
//     Treament: {
//       screen: TreamentScreen,
//       navigationOptions: {
//         tabBarIcon: () => <FontAwesome5 name="star" size={24} color={"#CDCCCE"} />

//       }
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         tabBarIcon: () => <FontAwesome5 name="cog" size={24} color={"#CDCCCE"} />

//       }
//     }
//   },
//   {
//     tabBarOptions: {
//       showLabel: false
//     }
//   }




// );//end-export

// export default createAppContainer(TabNavigator);




