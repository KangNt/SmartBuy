
import React, { Component } from 'react'

import { Text, View, SafeAreaView,Image , StyleSheet, Button,TouchableOpacity} from 'react-native'
import { CustomHeader } from '../index'

import t from 'tcomb-form-native' // 0.6.9
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Form = t.form.Form;

const User = t.struct({
    Name: t.String,
    Email: t.String,
    Address: t.String,
    Phone: t.String,
    terms: t.Boolean
});




const options = {
    fields: {
        Name: {
        error: 'Không được để trống?'
      },
      Email: {
        error: 'Null hoặc sai cú pháp?'
      },
      Address: {
        error: 'không được để trống?'
      },
      Phone: {
        error: 'Sai định dạng '
      },
      terms: {
        label: 'Agree to Terms',
      },
    },
  };

export class EditProfileScreen extends Component {

    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
    }

    render() {
        return (

            <SafeAreaView style={{ flex:1,}}   >
                <CustomHeader title="Edit Profile" navigation={this.props.navigation} />
               
                <View style={styles.container}>
                <TouchableOpacity style={{marginTop:-40}}>
                            <View style={styles.profileImage}>
                                <Image source={require("../images/Linh.jpg")} style={styles.image} resizeMode="center"></Image>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.add}  >
                                    <Ionicons name="ios-add" size={40} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                                </View>
                            </TouchableOpacity>
                    <Form
                        ref={c => this._form = c}
                        type={User}
                        options={options} // pass the options via props
                        style={{marginTop:-70}}
                    />
                    <Button
                        title="Save Update"
                        onPress={this.handleSubmit}
                    />
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
        height:'100%',
        
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
        marginLeft:-100
    },
});



