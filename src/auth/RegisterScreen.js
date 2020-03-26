
import React, { Component } from 'react'

import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'

import { CustomHeader } from '../index'

import InputTextField from "../../components/InputTextField"

export class RegisterScreen extends Component {
    render() {
        return (

            <ScrollView style={styles.container}>

                <View>
                    <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center" }}>

                        <Image source={require("../images/logo-Sb.png")} style={{width:70,height:70}}   ></Image>
                        <Text style={[styles.text, { marginTop: 10, fontSize: 22, fontWeight: "500" }]}>  Sign Up</Text>

                    </View>

                    <InputTextField title="Username" style={{ marginTop: 20, marginBottom: 10 }}></InputTextField>
                    <InputTextField title="Email Address" style={{ marginTop: 15, marginBottom: 10 }}></InputTextField>
                    <InputTextField
                        style={{ marginTop: 15, marginBottom: 10 }}
                        title="Password" isSecure={true}>
                    </InputTextField>
                    <InputTextField
                        style={{ marginTop: 15, marginBottom: 10 }}
                        title="Confirm Password" isSecure={true}>
                    </InputTextField>
                    <InputTextField title="Full Name" style={{ marginTop: 15, marginBottom: 10 }}></InputTextField>
                    <TouchableOpacity style={styles.submitContainer} onPress={() => this.props.navigation.navigate('HomeApp')}>
                        <Text style={[styles.text, { color: "#ffff", ontWeight: "600", fontSize: 16 }]}>Submit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={[styles.text, { fontSize: 14, color: "#ABB4BD", textAlign: "center", marginTop: 24 }]}>
                             
                        I already have an account! <Text style={[styles.text, styles.link]}>Login?</Text>
                        </Text>
                    </TouchableOpacity>







                </View>
            </ScrollView>

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
        backgroundColor: "#80dcf0",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "rgba(0,255,255,0.3)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 8

    }
})





// import React, { Component } from 'react'

// import { Text, View, SafeAreaView } from 'react-native'
// import { CustomHeader } from '../index'
// export class RegisterScreen extends Component {
//     render() {
//         return (
//             <SafeAreaView style={{ flex: 1, }}>
//                 <CustomHeader title="Register" navigation={this.props.navigation} />
//                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                     <Text>Register Screen</Text>
//                 </View>
//             </SafeAreaView>
//         )
//     }
// } 