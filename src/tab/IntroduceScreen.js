import React, { Fragment, Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { CustomHeader } from '../index'
import Swiper from 'react-native-swiper';
import { ButtonGroup } from 'react-native-elements';

export class IntroduceScreen extends Component {

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons>
        <View style={styles.slide1}>
        <Image source={require('../images/tutorial1.png')} style={{ height: "80%", width: "80%", marginTop:-5 }} />
          <Text style={styles.text}>Wellcome!</Text>
        </View>
        <View style={styles.slide2}>
        <Image source={require('../images/tutorial2.png')} style={{ height: "80%", width: "80%", marginTop:-5 }} />
          <Text style={styles.text}>Add to cart</Text>
        </View>
        <View style={styles.slide3}>
          {/* <Text style={styles.text}>Easy Payments</Text> */}
          <Image source={require('../images/tutorial3.png')} style={{ height: "80%", width: "80%", marginTop:-5 }} />
          <TouchableOpacity style={styles.submitContainer} onPress={() => this.props.navigation.navigate('HomeApp')}>
            <Text style={[styles.text, { color: "#ffff", fontSize: 16, }]}>Start</Text>
          </TouchableOpacity>

        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    // width,
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    
    
  },
  scrollView: {
    // backgroundColor: Colors.lighter,

  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    // color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    // color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  },
  submitContainer: {
    backgroundColor: "#314A86",
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgb(49, 74, 134)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 5,
    alignSelf: 'stretch',
    marginLeft: 85,
    marginRight: 90,
    marginBottom: 20,
    // marginTop: 150
  },


});