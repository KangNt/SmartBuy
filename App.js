import * as React from 'react';
// import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import { CustomDrawerContent, BarcodeScannerExample } from './src'
import Cart from './src/Cart'
import {
  HomeScreen,
  HomeScreenDetail,
  SettingsScreen,
  SettingsScreenDetail,
  HistoryScreen,
  DetailHistoryScreen,
  CategoryDetail,
  FavouriteScreen,
  ScanQrCodeScreen,
  TutorialScreen,
  IntroduceScreen
} from './src/tab'
import {
  NotificationsScreen,
  ProfileScreen,
  ContactScreen,
  EditProfileScreen,
  ChangePasswordScreen,
  PolicyScreen,
  TutorialPaymentScreen,
  IntroduceDrawer,
  IntroduceStart,
} from './src/drawer'
import Test from "./src/Test"
import { LoginScreen, RegisterScreen, ShowScan, } from './src/auth'
import { AddButton } from './components/AddButton'
// import { Ionicons, Feather } from '@expo/vector-icons';

import { MaterialCommunityIcons } from 'react-native-vector-icons';

// import { FontAwesome5 } from '@expo/vector-icons';
// import { IMAGE } from './src/constants/Image';
// import { AddButton } from './src/tab/AddButton'
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
      <StackHome.Screen name="cart" component={Cart} options={navOptionHandler} />
      <StackSetting.Screen name="Test" component={Test} options={navOptionHandler} />
      <StackHome.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
      <StackHome.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
      <StackHome.Screen name="Menu" component={CustomDrawerContent} options={navOptionHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
      <StackHome.Screen name="CategoryDetail" component={CategoryDetail} options={navOptionHandler} />
    </StackHome.Navigator>
  );
};

const StackHistory = createStackNavigator();

function HistoryStack() {
  return (
    <StackHistory.Navigator initialRouteName="History" >
      <StackHistory.Screen name="History" component={HistoryScreen} options={navOptionHandler} />
      <StackHistory.Screen name="DetailHistory" component={DetailHistoryScreen} options={navOptionHandler} />
    </StackHistory.Navigator>
  );
};


//button scan Qrcode  


const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler} />
      <StackSetting.Screen name="Profile" component={ProfileScreen} options={navOptionHandler} />
      <StackSetting.Screen name="ChangePassword" component={ChangePasswordScreen} options={navOptionHandler} />
      <StackSetting.Screen name="EditProfile" component={EditProfileScreen} options={navOptionHandler} />
      <StackSetting.Screen name="Login" component={LoginScreen} options={navOptionHandler} />

    </StackSetting.Navigator>
  )
}

const StackFavourite = createStackNavigator();

function FavouriteStack() {
  return (
    <StackFavourite.Navigator initialRouteName="Favourite">
      <StackFavourite.Screen name="Favourite" component={FavouriteScreen} options={navOptionHandler} />
      <StackFavourite.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />

    </StackFavourite.Navigator>
  )
}

const StackScanQrCode = createStackNavigator();

function ScanQrCodeStack() {
  return (
    <StackScanQrCode.Navigator initialRouteName="ScanQrCode" >
      <StackScanQrCode.Screen name="ScanQrCode" component={BarcodeScannerExample} options={navOptionHandler} />
      <StackScanQrCode.Screen name="showscan" component={ShowScan} options={navOptionHandler} />

    </StackScanQrCode.Navigator>

  )
}

function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        // style:{
        //   height:40,
        //   marginBottom:20,
        //   backgroundColor: 'blue', 

        // },
        // labelStyle :{

        // },
        // tabStyle:{


        //   top:40
        // }

      }}
    >

      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={HomeStack} />
      <Tab.Screen

        options={{
          tabBarLabel: 'Lịch Sử',
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="clock" color={color} size={size} />),
        }}
        name="History" component={HistoryStack} />

      <Tab.Screen

        options={{
          tabBarLabel: 'Quét QR',
          tabBarIcon: () => <AddButton {...navigation} />,


        }}

        name="ScanQrCode" component={ScanQrCodeStack}

      />

      <Tab.Screen

        options={{
          tabBarLabel: 'Yêu Thích',
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="charity" color={color} size={size} />),
        }}
        name="favourite" component={FavouriteStack} />


      <Tab.Screen
        options={{
          tabBarLabel: 'Cài Đặt',
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="settings" color={color} size={size} />),
        }}
        name="Settings" component={SettingStack} />

    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={() => <CustomDrawerContent navigation={navigation} />} >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Menu" component={CustomDrawerContent} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Introduce" component={IntroduceScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Policy" component={PolicyScreen} />
      <Drawer.Screen name="TutorialPayment" component={TutorialPaymentScreen} />
      <Drawer.Screen name="IntroduceDrawer" component={IntroduceDrawer} />
      <Drawer.Screen name="IntroduceStart" component={IntroduceStart} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="HomeApp">
        <StackApp.Screen name="Introduce" component={IntroduceScreen} options={navOptionHandler} />
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>

  );
}
