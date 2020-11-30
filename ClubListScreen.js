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

export default function ClubListScreen({navigation}) {
    const onPressCardView = () => {
        ToastAndroid.showWithGravity(
          item.first_name,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        navigation.navigate('Detail Page');
      };
    
      return (
        <SafeAreaView style={Styles.container}>
          <ScrollView>
            <View style={Styles.titleContainer}>
              <Text style={Styles.title}>CLUB LIST</Text>
            </View>
            <View style={Styles.scrollView}>
              {/* {userData.map(item => ( */}
                <TouchableOpacity
                //   key={item.id}
                  style={Styles.cardView}
                  onPress={() => onPressCardView()}>
                  <View style={Styles.cardView1}>
                    {/* <Image source={{uri: item.avatar}} style={Styles.image} /> */}
                  </View>
                  <View style={Styles.cardView2}>
                      <Text>Ini Card View</Text>
                    {/* <Text style={Styles.text1}>{`${item.first_name}`}</Text>
                    <Text style={Styles.text2}>{`${item.last_name}`}</Text> */}
                  </View>
                </TouchableOpacity>
              {/* ))} */}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
