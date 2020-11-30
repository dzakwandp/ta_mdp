import React from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';

import Styles from './DetailStyle.js';

export default function Detail({navigation}) {
  const anggota = [
    {
      id: 1,
      nama: 'Anggota 1',
    },
    {
      id: 2,
      nama: 'Anggota 2',
    },
    {
      id: 3,
      nama: 'Anggota 3',
    },
    {
      id: 4,
      nama: 'Anggota 4',
    },
  ];

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.view}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>KELOMPOK XYY</Text>
          </View>
          <View style={Styles.view2}>
            <View style={{marginBottom: 10}}>
              <Text style={Styles.text}>Anggota Kelompok</Text>
            </View>
            {anggota.map(item => (
              <View key={item.id} style={Styles.list}>
                <Text style={Styles.text}>{item.nama}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}