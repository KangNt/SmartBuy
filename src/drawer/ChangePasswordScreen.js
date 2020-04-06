
import React, { Component } from 'react'

import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native'
import { CustomHeader } from '../index'

import t from 'tcomb-form-native' // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  oldPassword: t.String,
  newPasswword: t.String,
  confirm: t.String,
  terms: t.Boolean
});

const options = {
  fields: {
    oldPassword: {
      error: 'Mật khẩu cũ null hoặc không chính xác?'
    },
    newPasswword: {
      error: 'New pasord không được để trống'
    },
    confirm: {
      error: 'Mật khẩu không khớp'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
};


export class ChangePasswordScreen extends Component {


  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }


  render() {

    return (
      <SafeAreaView style={{ flex: 1, }}   >
        <CustomHeader title="Change Password" navigation={this.props.navigation} />

        <View style={styles.container}>
          <Form
            ref={c => this._form = c}
            type={User}
            options={options} // pass the options via props
            style={{ marginTop: -70 }}
          />
          <Button
            title="Save Change"
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
    height: '80%',
  },
});

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}