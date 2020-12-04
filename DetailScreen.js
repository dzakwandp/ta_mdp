import React from 'react';
import {Text,View,Button,SafeAreaView,ScrollView,Image,StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import Styles from './DetailStyle';

//inisiasi file .json yang berisi daftar klub liga inggris
const clubData = require('./ClubList.json')

//karena file clubList.json isinya adalah object , didalam clubs berisi array , maka diinisiasi dahulu.
const clubArray = clubData.clubs

export default function DetailScreen({route,navigation}) {
    const {id} = route.params;
    const clubId= id-1;
    const ViewStyles = StyleSheet.create({
        Card:{
            backgroundColor:clubArray[clubId].club_color,
        },
        Text:{
            color:clubArray[clubId].font_color,
        }
    })

    return (
        <SafeAreaView style={Styles.container}>
        <ScrollView style={Styles.scrollView}>
          <View style={Styles.view}>
            <Image source={{uri: clubArray[clubId].picture}} style={Styles.image} />
            <View style={[Styles.view2,ViewStyles.Card]}>
              <View style={{marginBottom: 10}}>
                <Text style={[Styles.text,ViewStyles.Text]}>Name:{"\n"}{clubArray[clubId].name}{"\n"}</Text>
                <Text style={[Styles.text,ViewStyles.Text]}>Code:{"\n"}{clubArray[clubId].code}{"\n"}</Text>
                <Text style={[Styles.text,ViewStyles.Text]}>Country:{"\n"}{clubArray[clubId].country}{"\n"}</Text>
                <Text style={[Styles.text,ViewStyles.Text]}>Manager:{"\n"}{clubArray[clubId].manager}</Text>
              </View>
            </View>
            <Text style={Styles.title}>Kits</Text>
            <View style={{flex: 1, flexDirection: 'row', flexShrink: 1}}>
            <Image source={{uri: clubArray[clubId].jersey}} style={Styles.imagekits} />
            <Image source={{uri: clubArray[clubId].jersey2}} style={Styles.imagekits} />
            <Image source={{uri: clubArray[clubId].jersey3}} style={Styles.imagekits} />
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>  
    )
}