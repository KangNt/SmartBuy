
import React, { Component } from 'react'

import { Text, View, SafeAreaView, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { CustomHeader } from '../index'

import TextInput from 'react-native-textinput-with-icons'
import { ScrollView } from 'react-native-gesture-handler'

// import t from 'tcomb-form-native' // 0.6.9

// const Form = t.form.Form;

// const User = t.struct({
//   oldPassword: t.String,
//   newPasswword: t.String,
//   confirm: t.String,
//   terms: t.Boolean
// });

// const options = {
//   fields: {
//     oldPassword: {
//       error: 'Mật khẩu cũ null hoặc không chính xác?'
//     },
//     newPasswword: {
//       error: 'New pasord không được để trống'
//     },
//     confirm: {
//       error: 'Mật khẩu không khớp'
//     },
//     terms: {
//       label: 'Agree to Terms',
//     },
//   },
// };


export class ChangePasswordScreen extends Component {


  // handleSubmit = () => {
  //   const value = this._form.getValue(); // use that ref to get the form value
  //   console.log('value: ', value);
  // }


  state = {
    oldPassword: '',
    newPassword: '',
    conFirm: '',

  }

  render() {

    let { oldPassword, newPassword, conFirm } = this.state
    return (
      <SafeAreaView style={{ flex: 1, }}   >
        <CustomHeader title="Change Password" navigation={this.props.navigation} />

        <View style={styles.container}>
        <ScrollView>

          {/* <Form
            ref={c => this._form = c}
            type={User}
            options={options} // pass the options via props
            style={{ marginTop: -70 }}
          /> */}

          <TextInput
            label="Old Password"
            leftIcon="device-mobile"
            leftIconType="oct"
            rippleColor="blue"
            rightIcon="react"
            rightIconType="material"
            value={oldPassword}
            refrance={(refrance) => {
              this.input = refrance;
            }}
            onChangeText={oldPassword => this.setState({ oldPassword })}

          />

          <TextInput
            label="New Password "
            leftIcon="device-mobile"
            leftIconType="oct"
            rippleColor="blue"
            rightIcon="react"
            rightIconType="material"
            value={newPassword}
            refrance={(refrance) => {
              this.input = refrance;
            }}
            onChangeText={newPassword => this.setState({ newPassword })}
          />

          <TextInput
            label="ConFirm"
            leftIcon="device-mobile"
            leftIconType="oct"
            rippleColor="blue"
            rightIcon="react"
            rightIconType="material"
            value={conFirm}
            refrance={(refrance) => {
              this.input = refrance;
            }}
            onChangeText={conFirm => this.setState({ conFirm })}
          />


          
              <TouchableOpacity style={styles.submitContainer} >
                            <Text style={[styles.text, { color: "#ffff", fontSize: 16, }]}>Save Change</Text>
                        </TouchableOpacity>
          
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
});







// const formStyles = {
//   ...Form.stylesheet,
//   controlLabel: {
//     normal: {
//       color: 'blue',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     },
//     error: {
//       color: 'red',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     }
//   }
// }