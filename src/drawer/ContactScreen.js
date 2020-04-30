import React, { Component } from 'react'
import TextInput from 'react-native-textinput-with-icons'
import { SafeAreaView, View, StyleSheet, Button,TouchableOpacity,Text, Dimensions, Alert } from 'react-native'

import { CustomHeader } from '../index'
import { ScrollView, Directions } from 'react-native-gesture-handler'

const {width,height}=Dimensions.get('window')
export class ContactScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            title:'',
            address: '',
            phone: '',
            email:'',
            message: '',
            err_fullname:'',
            err_email:'',
            err_title:'',
            err_address:'',
            err_message:'',
            err_phone:'',
        }
    }
    Submit_contact(){
        fetch('https://smartbuy01.gq/api/contacts/add',{
            method: 'POST',
          headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
          
          },
        
          body:JSON.stringify({
            title:this.state.title,
            email:this.state.email,
            address: this.state.address,
            phone_number: this.state.phone,
            content: this.state.message,
            fullname:this.state.name,

          })
        }).then((res)=>res.json()).then((res)=>{
            this.setState({
                err_fullname:res.fullname,
                err_email:res.email,
                err_phone:res.phone_number,
                err_title:res.title,
                err_address:res.address,
                err_message:res.content
            })
           
            if(res.result=='success'){
                Alert.alert('Thông báo','Cảm ơn bạn đã liên hệ, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!')
                this.setState({
                    name: '',
                    title:'',
                    address: '',
                    phone: '',
                    message: '',
                    email:''
                })
            }
        })
    }

    render() {
        let { name, title, address, phone, message,email } = this.state

        return (


            <SafeAreaView style={{ flex: 1, backgroundColor: "#EEEAEE" }}>
                <CustomHeader title="Liên Hệ" navigation={this.props.navigation} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, alignItems: 'center', }}>
                        <TextInput
                            label="Tiêu Đề"
                            leftIcon="pencil"
                            leftIconType="oct"
                            rippleColor="blue"
                            
                            rightIconType="material"
                            value={title}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={title => this.setState({ title })}
                        />
                        <View style={{alignItems:"flex-start",width:width-65}}>
                            <Text style={{color:"red"}}>{this.state.err_title}</Text>
                        </View>
                        <TextInput
                            label="Họ Tên"
                            leftIcon="person"
                            leftIconType="oct"
                            rippleColor="blue"
                            
                            rightIconType="material"
                            value={name}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={name => this.setState({ name })}
                        />
                        <View style={{alignItems:"flex-start",width:width-65}}>
                            <Text style={{color:"red"}}>{this.state.err_fullname}</Text>
                        </View>
                        <TextInput
                            label="Email"
                            leftIcon="mail"
                            leftIconType="oct"
                            rippleColor="blue"
                            
                            rightIconType="material"
                            value={email}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={email => this.setState({ email })}
                        />
                        <View style={{alignItems:"flex-start",width:width-65}}>
                            <Text style={{color:"red"}}>{this.state.err_email}</Text>
                        </View>
                        <TextInput
                            label="Địa Chỉ"
                            leftIcon="location"
                            leftIconType="oct"
                            rippleColor="blue"
                            
                            rightIconType="material"
                            value={address}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={address => this.setState({ address })}
                        />
                        <View style={{alignItems:"flex-start",width:width-65}}>
                            <Text style={{color:"red"}}>{this.state.err_address}</Text>
                        </View>
                        <TextInput
                            label="Số Điện Thoại"
                            leftIcon="device-mobile"
                            leftIconType="oct"
                            rippleColor="blue"
                            
                            rightIconType="material"
                            value={phone}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={phone => this.setState({ phone })}
                        />
                        <View style={{alignItems:"flex-start",width:width-65}}>
                            <Text style={{color:"red"}}>{this.state.err_phone}</Text>
                        </View>
                        <TextInput
                            label="Nội Dung"
                            leftIcon="note"
                            leftIconType="oct"
                            rippleColor="blue"
                            
                            rightIconType="material"
                            value={message}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={message => this.setState({ message })}
                        />
                        <View style={{alignItems:"flex-start",width:width-65}}>
                            <Text style={{color:"red"}}>{this.state.err_message}</Text>
                        </View>
                        <TouchableOpacity onPress={() =>this.Submit_contact()} style={styles.submitContainer} >
                            <Text style={[styles.text, { color: "#ffff", fontSize: 16, }]}>Gửi</Text>
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
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "rgb(49, 74, 134)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,   
        shadowRadius: 5,
        alignSelf: 'stretch',
        marginLeft: 85,
        marginRight: 90,
        marginBottom:20
       
        
        
        
    
      },
        text: {
            // fontFamily :"Avennir Next",
            color: "#1D2029"
        },
});