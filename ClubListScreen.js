import React from 'react';
import {Text,View,Button } from 'react-native';

export default function ClubListScreen({navigation}) {
    return (
    <View>
        <Text>Club list screen</Text>
            <Button
                title="Go to Detail"
                onPress={() => navigation.navigate('Detail')}
            />
    </View>
    )
}
