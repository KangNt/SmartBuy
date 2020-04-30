
import React, { Component } from 'react'

import { Text, View, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { CustomHeader } from '../index'

export class IntroduceScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
                {/* <CustomHeader title="Introduce" navigation={this.props.navigation} /> */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../images/smartbuy.gif')} style={{ height: "87%", width: "90%" }} />
                    <TouchableOpacity style={styles.submitContainer} onPress={() => this.props.navigation.navigate('MenuTab')} >
                        <Text style={[styles.text, { color: "#ffff", fontSize: 16 }]}>Start</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
  
    text: {
      // fontFamily :"Avennir Next",
      color: "#1D2029"
    },
    socialButton: {
      flexDirection: "row",
      marginHorizontal: 12,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "rgba(171,180,189,0.65)",
      borderRadius: 4,
      backgroundColor: "#fff",
      shadowColor: "rgba(171,180,189,0.35)",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 1,
      shadowRadius: 20,
      elevation: 5
    },
  
  
    submitContainer: {
      backgroundColor: "#314A86",
      fontSize: 16,
      borderRadius: 4,
      paddingVertical: 12,
      marginTop: 5,
      alignItems: "center",
      justifyContent: "center",
    //   shadowColor: "rgb(78, 141, 255)",
      shadowOffset: { width: 0, height: 9 },
    //   shadowOpacity: 1,
      shadowRadius: 10,
      marginLeft: 85,
      marginRight: 90,  
      alignSelf: 'stretch',

    },
    text: {
      // fontFamily :"Avennir Next",
      color: "#1D2029"
    },
  })

