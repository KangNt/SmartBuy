
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,TouchableHighlight, Alert } from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons';

import { MaterialCommunityIcons } from 'react-native-vector-icons';



export class AddButton extends Component {
        // _onPressButton = () =>{
        //    this.props.navigation.navigate('ScanQrCode')
        // }

    render() {

        return (

            <View style={StyleSheet.container}>
                 <TouchableOpacity style={styles.button}
                //  onPress={ () =>this.props.navigation.navigate('ScanQrCode')}
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
        height: 100,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: 72,
        height: 72,
        borderRadius: 36,
        top: -50,
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.1,
        borderWidth: 3,
        borderColor: "#FFF",
        left: -35

    }
})