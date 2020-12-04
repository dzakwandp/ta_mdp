import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

//import komponen yang akan dimasukan kedalam Stack Navigator
import DetailScreen from './DetailScreen'
import ClubListScreen from './ClubListScreen'

//inisiasi file .json yang berisi daftar klub liga inggris
const clubData = require('./ClubList.json')
//karena file clubList.json isinya adalah object , didalam clubs berisi array , maka diinisiasi dahulu.
const clubArray = clubData.clubs

//HomeScreen.js berfungsi hanya sebagai penghubung Stack Navigator
const Stack = createStackNavigator();
export default function HomeScreen() {
    return ( 
        //Ketika Tombol Home di klik Default nya akan menampilkan Halaman List karena HomeScreen.js tidak punya tampilan , jadi merender ClubListScreen.js
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name ="Detail" component={DetailScreen}
          options={({ route }) => ({ 
            title: clubArray[route.params.id-1].name,headerTitleAlign:'center',
            headerStyle: {
              backgroundColor:clubArray[route.params.id-1].club_color,
            },
            headerTintColor:clubArray[route.params.id-1].font_color,
            })}/>
          <Stack.Screen name ="List" component={ClubListScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}