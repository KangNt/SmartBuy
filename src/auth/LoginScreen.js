import React, { Component } from 'react'

import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'

import { CustomHeader } from '../index'

import InputTextField from "../../components/InputTextField"

export class LoginScreen extends Component {
  render() {
    return (

      <ScrollView style={styles.container}>
        {/* <CustomHeader title="Login" navigation={this.props.navigation} /> */}
        <View>
          <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center" }}>

            <Image source={require("../images/qr-code.png")}></Image>
            <Text style={[styles.text, { marginTop: 10, fontSize: 22, fontWeight: "500" }]}>  SmartBuy</Text>

          </View>
          <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity>
              <View style={styles.socialButton}>
                <Image source={require("../images/facebook.png")} style={styles.socialLogo} ></Image>
                <Text style={styles.text}>Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.socialButton}>
                <Image source={require("../images/google.png")} style={styles.socialLogo}></Image>
                <Text style={styles.text}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>


          <Text style={[styles.text, { color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }]}>or</Text>

          <InputTextField title="Email"></InputTextField>
          <InputTextField
            style={{ marginTop: 32, marginBottom: 8 }}
            title="Password" isSecure={true}>
          </InputTextField>

          <TouchableOpacity >
          <Text style={[styles.text, styles.link, { textAlign: "right" }]}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitContainer} onPress={() => this.props.navigation.navigate('HomeApp')}>
            <Text style={[styles.text, { color: "#ffff", ontWeight: "600", fontSize: 16 }]}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity   onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={[styles.text, { fontSize: 14, color: "#ABB4BD", textAlign: "center", marginTop: 24 }]}>
            Don't have an account? <Text style={[styles.text, styles.link]}>Register now</Text>
          </Text>

          </TouchableOpacity>
        </View>
      </ScrollView>









      //   <SafeAreaView style={{ flex: 1, }}>
      //      <CustomHeader title="Login" navigation={this.props.navigation} />
      //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //     <Text>Login Screen!</Text>
      //     <TouchableOpacity
      //       style={{ marginTop: 20 }}
      //       onPress={() => this.props.navigation.navigate('HomeApp')}>
      //       <Text>Login </Text>
      //     </TouchableOpacity>

      //     <TouchableOpacity
      //       style={{ marginTop: 20 }}
      //       onPress={() => this.props.navigation.navigate('Register')}>
      //       <Text>Register </Text>
      //     </TouchableOpacity>
      //   </View>
      // </SafeAreaView>
    );
  }
} //end-export





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30
  },
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
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8
  },
  link: {
    color: "#FF1654",
    fontSize: 14,
    fontWeight: "500"
  },
  submitContainer: {
    backgroundColor: "#FF1654",
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(255,22,84,0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20

  }
})