import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
        title="Go to Profile"
        onPress={()=> navigation.navigate('Profile')}
        />
    </View>
    )
}
