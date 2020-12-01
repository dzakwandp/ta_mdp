import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

//import komponen yang akan dimasukan kedalam Stack Navigator
import DetailScreen from './DetailScreen'
import ClubListScreen from './ClubListScreen'

//HomeScreen.js berfungsi hanya sebagai penghubung Stack Navigator
const Stack = createStackNavigator();
export default function HomeScreen() {
    return ( 
        //Ketika Tombol Home di klik Default nya akan menampilkan Halaman List karena HomeScreen.js tidak punya tampilan , jadi merender ClubListScreen.js
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name ="Detail" component={DetailScreen}/>
          <Stack.Screen name ="List" component={ClubListScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}