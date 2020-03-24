import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,TouchableHighlight } from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons';

import { MaterialCommunityIcons } from 'react-native-vector-icons';
// import { CustomHeader } from '../src/tab'



export class AddButton extends Component {

    render() {
        let { navigation} = this.props
        return (

            <View style={StyleSheet.container}>
                 {/* <CustomHeader title="ScanQrcode" isHome={true} navigation={this.props.navigation} /> */}
                 <TouchableOpacity style={styles.button}
                // onPress={() => navigation.navigate('ScanQrCode')}
                >
                    <MaterialCommunityIcons name="qrcode-scan" size={35} color="#FFF" /> 
                </TouchableOpacity>
             


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        backgroundColor: "#378AD9",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: 72,
        height: 72,
        borderRadius: 36,
        top: -60,
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.1,
        borderWidth: 3,
        borderColor: "#FFF",
        left: -35

    }
})




// import React from 'react'
// import { View, StyleSheet, TouchableHighlight, Animated } from 'react-native';
// import { FontAwesome5, Feather } from "@expo/vector-icons";




// export default class AddButton extends React.Component {
//     buttonSize = new Animated.Value(1);
//     mode = new Animated.Value(0);
//     handPress = () => {
//         Animated.sequence([
//             Animated.timing(this.buttonSize, {
//                 toValue: 0.95,
//                 duration: 200
//             }),
//             Animated.timing(this.buttonSize, {
//                 toValue: 1
//             }),
//             Animated.timing(this.mode, {
//                 toValue: this.mode._value === 0 ? 1 : 0
//             })
//         ]).start();

//     }


//     render() {
//         const sizeStyle = {
//             transform: [{ scale: this.buttonSize }]
//         };

//         const rotation = this.mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: ["0deg", "45deg"]
//         });
//         const thermometerX = this.mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-24, -100]
//         });
//         const thermometerY = this.mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-50, -100]
//         });
//         const timeX = this.mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-24, -24]
//         });
//         const timeY = this.mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-50, -150]
//         });

//         return (
//             <View style={{ position: "absolute", alightItems: "center" }}>
//                 {/* <Animated.View style={{position:"absolute", left: thermometerX, top: thermometerY }}>
//                     <View style ={styles.secondaryButton}>
//                         <Feather name="thermometer" size={24} color="#FFF"/>
//                     </View>
//                     </Animated.View> */}
//                 <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
//                     <View style={styles.secondaryButton}>
//                         <Feather name="thermometar" size={24} color="#FFF" />
//                     </View>
//                 </Animated.View>

//                 <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
//                     <View style={styles.secondaryButton}>
//                         <Feather name="clock" size={24} color="#FFF" />
//                     </View>
//                 </Animated.View>

//                 <Animated.View style={styles.button, sizeStyle}>
//                     <TouchableHighlight onPress={this.handPress} underlayColor="#7F58FF">
//                         <Animated.View style={{ transform: [{ rotate: rotation }] }}>
//                             <FontAwesome5 name="plus" size={24} color="#FFF" />
//                         </Animated.View>
//                     </TouchableHighlight>
//                 </Animated.View>
//             </View>
//         );
//     }//end-render

// }//end-export

// ////-----------------------------
// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: "#7F58FF",
//         alignItems: "center",
//         justifyContent: "center",
//         width: 72,
//         height: 72,
//         borderRadius: 36,
//         position: "absolute",
//         top: -60,
//         shadowColor: "#7F58FF",
//         shadowRadius: 5,
//         shadowOffset: { height: 10 },
//         shadowOpacity: 0.3,
//         borderWidth: 3,
//         borderColor: "#FFF",
//     },
//     secondaryButton: {
//         position: "absolute",
//         alignItems: "center",
//         justifyContent: 'center',
//         width: 48,
//         height: 48,
//         borderRadius: 24,
//         backgroundColor: "#7F58FF"
//     }
// });