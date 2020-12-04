import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width,
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
    paddingRight: 10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  view1: {
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
  },
  view2: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    width: 150,
    height: 150,
  },
  imagekits: {
    marginTop: 10,
    marginBottom: 10,
    width: 120,
    height: 120,
    marginHorizontal: 0,
  },
  text: {
    fontSize: 15,
  },
  titleContainer: {
    marginTop: 10,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: "#38003c",
  },
  nameView: {
    marginTop: 8,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    letterSpacing: 0.3,
    marginBottom: 3,
  },
  emailText: {
    letterSpacing: 0.3,
    fontSize: 15,
  },
  list: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#a5a5a5',
  },
});

export default main;
