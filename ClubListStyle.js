import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    width,
    backgroundColor: '#f5f5f5',
    fontFamily: 'roboto',
  },
  scrollView: {
    width,
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 8,
  },
  cardView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    margin: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2.5,
    flex: 1
  },
  cardView1: {
    justifyContent: 'center',
  },
  cardView2: {
    display: 'flex',
    paddingLeft: 15,
    justifyContent: 'center',
    flexShrink: 1
  },
  image: {
    width: 130,
    height: 130,
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    flex: 1,
    flexShrink: 1
  },
  text2: {
    fontSize: 16,
    letterSpacing: 0.3,
    paddingTop: 3,
    fontStyle: 'italic'
  },
  titleContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#38003c',
  },
  title: {
    fontSize: 25,
    color: '#FFF',
  },
});

export default main;