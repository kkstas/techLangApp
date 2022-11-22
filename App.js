import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Home from './screens/Home'
import Game from './screens/Game'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabBar from './components/MyTab';
import BackgroundFill from './theme/BackgroundFill';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

function HomeStackNav() {
  return (

      <HomeStack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Game" component={Game} />
      </HomeStack.Navigator>

  )
}


const Tab = createMaterialTopTabNavigator();


function MyTab() {
  return (
    <BackgroundFill>
    <Tab.Navigator
          tabBarPosition='bottom'
          tabBar={props => <MyTabBar {...props} />}   
          initialRouteName="HomeStack"
          >
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
        />
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStackNav}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
        />
      </Tab.Navigator>
    </BackgroundFill>
  )
}

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "rgba(38, 48, 64, 0)",
  },
};

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer theme={MyTheme}>
      <MyTab />
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
