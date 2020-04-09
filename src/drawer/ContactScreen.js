import React, { Component } from 'react'
import TextInput from 'react-native-textinput-with-icons'
import { SafeAreaView, View, StyleSheet, Button,TouchableOpacity,Text } from 'react-native'

import { CustomHeader } from '../index'
import { ScrollView } from 'react-native-gesture-handler'


export class ContactScreen extends Component {
    state = {
        name: '',
        birthday: '',
        address: '',
        country: '',
        phone: '',
        message: ''
    }

    render() {
        let { name, birthday, address, country, phone, message } = this.state

        return (


            <SafeAreaView style={{ flex: 1, backgroundColor: "#EEEAEE" }}>
                <CustomHeader title="Contacts" navigation={this.props.navigation} />
                <ScrollView>
                    <View style={{ flex: 1, alignItems: 'center' }}>

                        <TextInput
                            label="Name"
                            leftIcon="diff-renamed"
                            leftIconType="oct"
                            rippleColor="blue"
                            rightIcon="react"
                            rightIconType="material"
                            value={name}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={name => this.setState({ name })}
                        />

                        <TextInput
                            label="Birthday "
                            leftIcon="calendar"
                            leftIconType="oct"
                            rippleColor="blue"
                            rightIcon="react"
                            rightIconType="material"
                            value={birthday}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={birthday => this.setState({ birthday })}
                        />

                        <TextInput
                            label="Address"
                            leftIcon="location"
                            leftIconType="oct"
                            rippleColor="blue"
                            rightIcon="react"
                            rightIconType="material"
                            value={address}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={address => this.setState({ address })}
                        />
                        <TextInput
                            label="Country"
                            leftIcon="home"
                            leftIconType="oct"
                            rippleColor="blue"
                            rightIcon="react"
                            rightIconType="material"
                            value={country}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={country => this.setState({ country })}
                        />
                        <TextInput
                            label="Phone"
                            leftIcon="device-mobile"
                            leftIconType="oct"
                            rippleColor="blue"
                            rightIcon="react"
                            rightIconType="material"
                            value={phone}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={phone => this.setState({ phone })}
                        />
                        <TextInput
                            label="Message"
                            leftIcon="inbox"
                            leftIconType="oct"
                            rippleColor="blue"
                            rightIcon="react"
                            rightIconType="material"
                            value={message}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={message => this.setState({ message })}
                        />

                               <TouchableOpacity style={styles.submitContainer} >
                            <Text style={[styles.text, { color: "#ffff", fontSize: 16, }]}>Submit</Text>
                        </TouchableOpacity>

                    </View>
                 


                </ScrollView>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green',
        fontSize: 20,
        backgroundColor: "#81E895",
        borderRadius: 5,

    },
    submitContainer: {
        backgroundColor: "#314A86",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "rgb(49, 74, 134)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 5,
        alignSelf: 'stretch',
        marginLeft: 85,
        marginRight: 90
       
        
        
        
    
      },
      text: {
        // fontFamily :"Avennir Next",
        color: "#1D2029"
      },
});