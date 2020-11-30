import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//import komponen yang bakal dimasukan ke bottom tab navigator
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'

//inisialisasi fungsi bottom tab navigator
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
              let iconName;

              if(route.name==='Home'){
                iconName=focused?'ios-home':'ios-home';
              } else if ( route.name === 'Profile'){
                iconName=focused?'ios-person':'ios-person';
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'grey',
          }}
        >
          <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          />
          <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
