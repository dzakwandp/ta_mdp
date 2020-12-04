import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Text,
} from 'react-native';
import Styles from './ClubListStyle';
const clubData = require('./ClubList.json')
const clubArray = clubData.clubs

export default function ClubListScreen({navigation}) {
    const onPressCardView = (id) => {
        ToastAndroid.showWithGravity(
          "Success",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        navigation.navigate('Detail',{
            id: id,
        });
      };
    
      return (
        <SafeAreaView style={Styles.container}>
          <ScrollView>
            <View style={Styles.titleContainer}>
              <Text style={Styles.title}>{clubData.name}</Text>
            </View>
            <View style={Styles.scrollView}>
              {clubArray.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={Styles.cardView}
                  onPress={() => onPressCardView(item.id)}>
                  <View style={Styles.cardView1}>
                    <Image source={{uri: item.picture}} style={Styles.image} />
                  </View>
                  <View style={Styles.cardView2}>
                    <Text style={Styles.text1}>{`${item.name}`}</Text>
                    <Text style={Styles.text2}>{`${item.nick}`}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
