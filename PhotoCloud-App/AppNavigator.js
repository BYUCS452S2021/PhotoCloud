import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Import Screens
import Register from './screens/Register'
import Login from './screens/Login'
import Groups from './screens/Groups'
import Folders from './screens/Folders'
import Upload from './screens/Upload'
import Home from './screens/Home'
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' mode='modal'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={loggedIn} />
        </Stack.Navigator>
  </NavigationContainer>
);}

function loggedIn () {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                  iconName = focused ? 'home': 'home-outline';
                  return <Ionicons name={iconName} size={size} color={color} />

              } else if (route.name === 'Groups') {
                  iconName = focused ? 'account-group' : 'account-group-outline';
                  return <MaterialCommunityIcons name={iconName} size={size} color={color} />
              }
              else {
                  iconName = focused ? 'cloudupload' : 'clouduploado';
                  return <AntDesign name={iconName} size={size} color={color} />
              }
          }
      })}
      tabBarOptions={{
          activeBackgroundColor: '#2ce2b5',
          activeTintColor: '#040505',
          inactiveTintColor: '#10494e',
          inactiveBackgroundColor: '#2baec8',
      }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Groups" component={Groups} />
        <Tab.Screen name="Upload" component={Upload}/>
      </Tab.Navigator>
  );
}