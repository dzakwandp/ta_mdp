import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './DetailPage'

const Stack = createStackNavigator();{
        <Stack.Navigator>
        <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
}


export default function HomeScreen({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
        title="Go to Profile"
        onPress={()=> navigation.navigate('Profile')}
        />
        <Button
        title="Go to Detail"
        onPress={()=> navigation.navigate('Detail')}
        />
    </View>
    )
}
