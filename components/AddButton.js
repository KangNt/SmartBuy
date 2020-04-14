import React, { Component } from 'react';
// import { FontAwesome5 } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity,TouchableHighlight, Alert } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { CustomHeader} from '../src/index'

import Scanner from '../src'

import {BarcodeScannerExample}  from '../src'




export class AddButton extends Component {
        // _onPressButton = () =>{
        //    this.props.navigation.navigate('ScanQrCode')
        // }
    
    render() {

        return (

            <View style={StyleSheet.container}>
                 <TouchableOpacity style={styles.button}
                 onPress={ () =>this.props.navigate('ScanQrCode')}
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

