import React, { Component } from 'react'

import { Text, View, SafeAreaView, StyleSheet, Button, TouchableOpacity,AsyncStorage,Alert } from 'react-native'
import { CustomHeader } from '../index'

import TextInput from 'react-native-textinput-with-icons'
import { ScrollView } from 'react-native-gesture-handler'
export class ChangePasswordScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      oldPassword: '',
      newPassword: '',
      conFirm: '',
      email:"",
      err_password:"",
      err_new_password:"",
      err_cfpassword:""
  
    }
  }

  
  Submit_change(){
    AsyncStorage.multiGet(["id_user","email", "name",'avatar']).then(result => {
      this.setState({
        id_user:result[0][1],
        email:result[1][1],
        name:result[2][1],
        avatar:result[3][1],
        
      })
      
    }) 
    fetch('https://smartbuy01.gq/api/users/change-password',{
            method: 'PUT',
            headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
            },
          
            body:JSON.stringify({
            email: this.state.email,
            password:this.state.oldPassword,
            new_password:this.state.newPassword,
            cf_password:this.state.conFirm
            })
        }).then((response) => response.json())
        .then((responseJson) =>{
            
            this.setState({
                
                err_password:responseJson.password,
                err_new_password:responseJson.new_password,
                err_cfpassword:responseJson.cf_password
            })
            if(responseJson.msg =="ok"){

                Alert.alert("Thông báo!","Cập nhật mật khẩu thành công")
                this.setState({
                  oldPassword:"",
                  newPassword:"",
                  conFirm:""
                })
            }
            else if(responseJson.msg =="Mật khẩu cũ ko chính xác"){
              this.setState({
                
                err_password:responseJson.msg,
               
              })
            }
         
        })   
  }
  render() {

    let { oldPassword, newPassword, conFirm } = this.state
    return (
      <SafeAreaView style={{ flex: 1, }}   >
        <CustomHeader title="Đổi mật khẩu" navigation={this.props.navigation} />

        <View style={styles.container}>
        <ScrollView>

          {/* <Form
            ref={c => this._form = c}
            type={User}
            options={options} // pass the options via props
            style={{ marginTop: -70 }}
          /> */}

          <TextInput
            secureTextEntry={true}
            label="Mật khẩu cũ"
            leftIcon="key"
            leftIconType="awesome"
            rippleColor="blue"
            
            rightIconType="material"
            value={oldPassword}
            refrance={(refrance) => {
              this.input = refrance;
            }}
            onChangeText={oldPassword => this.setState({ oldPassword })}

          />
          <Text style={{color:'red'}}>
            {this.state.err_password}
          </Text>
          <TextInput
            secureTextEntry={true}
            label="Mật khẩu mới "
            leftIcon="lock"
            leftIconType="awesome"
            rippleColor="blue"
            
            rightIconType="material"
            value={newPassword}
            refrance={(refrance) => {
              this.input = refrance;
            }}
            onChangeText={newPassword => this.setState({ newPassword })}
          />
           <Text style={{color:'red'}}>
            {this.state.err_new_password}
          </Text>
          <TextInput
            secureTextEntry={true}
            label="Xác nhận lại mật khẩu mới"
            leftIcon="lock"
            leftIconType="awesome"
            rippleColor="blue"
            
            rightIconType="material"
            value={conFirm}
            refrance={(refrance) => {
              this.input = refrance;
            }}
            onChangeText={conFirm => this.setState({ conFirm })}
          />
           <Text style={{color:'red'}}>
            {this.state.err_cfpassword}
          </Text>

          
              <TouchableOpacity onPress={()=>this.Submit_change()} style={styles.submitContainer} >
                            <Text style={[styles.text, { color: "#ffff", fontSize: 16, }]}>Lưu thay đổi</Text>
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