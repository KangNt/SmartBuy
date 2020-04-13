
import React, { Component } from 'react'

import { Text, View, SafeAreaView, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { CustomHeader } from '../index'

// import t from 'tcomb-form-native' // 0.6.9
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import TextInput from 'react-native-textinput-with-icons'

import { ScrollView } from 'react-native-gesture-handler';

// const Form = t.form.Form;

// const User = t.struct({
//     Name: t.String,
//     Email: t.String,
//     Address: t.String,
//     Phone: t.String,
//     terms: t.Boolean
// });




// const options = {
//     fields: {
//         Name: {
//         error: 'Không được để trống?'
//       },
//       Email: {
//         error: 'Null hoặc sai cú pháp?'
//       },
//       Address: {
//         error: 'không được để trống?'
//       },
//       Phone: {
//         error: 'Sai định dạng '
//       },
//       terms: {
//         label: 'Agree to Terms',
//       },
//     },
//   };

export class EditProfileScreen extends Component {

    // handleSubmit = () => {
    //     const value = this._form.getValue(); // use that ref to get the form value
    //     console.log('value: ', value);
    // }

    state = {
        name: '',
        email: '',
        address: '',
        phone: '',

    }
    render() {
        let { name, email, address, phone } = this.state
        return (

            <SafeAreaView style={{ flex: 1, }}   >
                <CustomHeader title="Edit Profile" navigation={this.props.navigation} />

                <View style={styles.container}>
                    <ScrollView>
                        <TouchableOpacity style={{ marginTop: 10 }}>
                            <View style={styles.profileImage}>
                                <Image source={require("../images/Linh.jpg")} style={styles.image} resizeMode="center"></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.add}  >
                                <Ionicons name="ios-add" size={40} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                            </View>
                        </TouchableOpacity>
                        {/* <Form
                        ref={c => this._form = c}
                        type={User}
                        options={options} // pass the options via props
                        style={{marginTop:-70}}
                    /> */}
            <View style={styles.textInput}>
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
                            label="Email "
                            leftIcon="mail"
                            leftIconType="oct"
                            rippleColor="blue"
                            rightIcon="react"
                            rightIconType="material"
                            value={email}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={email => this.setState({ email })}
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
                            label="Phone Number"
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



                        <View style={styles.styleButton}>
                        
                         <TouchableOpacity style={styles.submitContainer} onPress={this.handleSubmit} >
                            <Text style={[styles.text, { color: "#ffff", fontSize: 16, }]}>Save Update</Text>
                        </TouchableOpacity>

                        <View style={{marginTop: 20}}>
                        <Button     
                            title="Cancel"
                        />
                        </View>
                      


                        </View>


                        </View> 

                    </ScrollView>
                </View>


            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: -10,
        padding: 30,
        backgroundColor: '#ffffff',
        height: '100%',

    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 0,
        overflow: "hidden"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -120,
        
    },
    textInput:{
        marginTop:40
    },
    styleButton:{
        marginTop:20
    },
    submitContainer: {
        backgroundColor: "#314A86",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 15,
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
});



