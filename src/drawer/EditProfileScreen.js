import React, { Component } from 'react'

import { Text, View, SafeAreaView, Image, StyleSheet, Button, TouchableOpacity,AsyncStorage,Alert } from 'react-native'
import { CustomHeader } from '../index'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import TextInput from 'react-native-textinput-with-icons'

import { ScrollView } from 'react-native-gesture-handler';

export class EditProfileScreen extends Component {

    // handleSubmit = () => {
    //     const value = this._form.getValue(); // use that ref to get the form value
    //     console.log('value: ', value);
    // }
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            address: '',
            phone: '',
            avatar:"",
            id_user:'',

    
        }
    }
    componentDidMount(){
        try {
            AsyncStorage.multiGet(["id_user","email", "name",'avatar']).then(result => {
                this.setState({
                  id_user:result[0][1], 
                })
                // alert('https://smartbuy01.gq/api/users/detail/'+this.state.id_user)
                fetch('https://smartbuy01.gq/api/users/detail/'+this.state.id_user)
                .then((res)=>res.json())
                .then((Res)=>{
                    this.setState({
                        name:Res.name,
                        email:Res.email,
                        address:Res.address_user,
                        avatar:Res.avatar,
                        phone:Res.phone_number
                    })
                    
                })
                
              }) 
         } catch (error) {
             
         }
           
    }
    
    UpdateInfo(){
        fetch('https://smartbuy01.gq/api/users/editUser/'+this.state.id_user,{
            method: 'POST',
            headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
            },
          
            body:JSON.stringify({
                email: this.state.email,
                name:this.state.name,
                address_user:this.state.address,
                avatar:this.state.avatar,
                phone_number:this.state.phone
            })
        }).then((response) => response.json())
        .then((responseJson) =>{
            // alert(responseJson.info_user.phone)
            // Alert.alert('Thông báo',responseJson.result)
            this.setState({
                
                phone:responseJson.info_user.phone_number,
               
            })
            

            Alert.alert("Thông báo!",responseJson.result)
                
            
            
         
        })
        
        
    }
    
    render() {
        let { name, email, address, phone } = this.state
        return (

            <SafeAreaView style={{ flex: 1, }}   >
                <CustomHeader title="Edit Profile" navigation={this.props.navigation} />

                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity style={{ marginTop: 10 }}>
                            <View style={styles.profileImage}>
                                <Image source={{uri:this.state.avatar}} style={styles.image} resizeMode="center"></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.UpdateInfo()}>
                            <View style={styles.add}  >
                                <Ionicons name="ios-add" size={40} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                            </View>
                            
                        </TouchableOpacity>
                        <View>
                            {/* <Image style={{width:40,height:50}} source={this.state.avatar}/> */}
                        </View>
                        {/* <Form
                        ref={c => this._form = c}
                        type={User}
                        options={options} // pass the options via props
                        style={{marginTop:-70}}
                    /> */}
                    <View style={styles.textInput}>
                        <TextInput
                            label="Name"
                            leftIcon="person"
                            leftIconType="oct"
                            rippleColor="blue"
                            
                            
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
                            
                            
                            value={phone==null ? '': `${phone}`}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={phone => this.setState({ phone })}
                        />
                        
                        <View style={styles.styleButton}>
                            <TouchableOpacity style={styles.submitContainer}  onPress={()=>this.UpdateInfo()}>
                                <Text style={[styles.text, { color: "#ffff", fontSize: 16, }]}>Lưu thay đổi</Text>
                            </TouchableOpacity>
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
        marginBottom:80,
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