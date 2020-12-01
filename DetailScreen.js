import React from 'react';
import {Text,View,Button} from 'react-native';

//inisiasi file .json yang berisi daftar klub liga inggris
const clubData = require('./clubList.json')

//karena file clubList.json isinya adalah object , didalam clubs berisi array , maka diinisiasi dahulu.
const clubArray = clubData.clubs

export default function DetailScreen({route,navigation}) {
    const {id} = route.params;
    const clubId= id-1;
    return (
    <View>
        <Text>{clubArray[clubId].name}</Text>
        <Text>{clubArray[clubId].code}</Text>
        <Text>{clubArray[clubId].country}</Text>
        <Button
            title="Go to List"
            onPress={() => navigation.navigate('List')}
        />
    </View>
    )
}
