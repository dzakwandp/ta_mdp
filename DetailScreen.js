import React from 'react';
import {Text,View,Button} from 'react-native';

export default function DetailScreen({navigation}) {
    return (
    <View>
        <Text>Detail Screen</Text>
        <Button
            title="Go to List"
            onPress={() => navigation.navigate('List')}
        />
    </View>
    )
}
