import React, { Component } from 'react'

import { Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
  import { IMAGE } from './constants/Image'
import { TextInput } from 'react-native-paper';


export class CustomHeader extends Component {
  render() {
    let { navigation, isHome, title,cart } = this.props
    return (
      <View style={{ flexDirection: 'row', height: 70,marginTop:-20, backgroundColor:"#1DFFFF" }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {
            isHome ?
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={{ width: 30, height: 30, marginLeft: 5,marginTop:10 }}
                  source={IMAGE.ICON_MENU}
                  resizeMode='contain' />
                  
              </TouchableOpacity>
              :
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Image style={{ width: 25, height: 25, marginLeft:5,marginTop:5 }}
                  source={IMAGE.ICON_BACK}
                  resizeMode="contain"
                />
                {/* <Text>Back</Text> */}
              </TouchableOpacity>
          }
         
        </View>

        <View style={{ flex: 4, justifyContent: 'center'}}>
          <Text style={{ textAlign: 'center',fontSize:19, marginTop:7 }}>{title}</Text>
          {cart 
          ?
          <TouchableOpacity onPress={()=> navigation.navigate('cart')} style={{position:'absolute',right:0,}}>
            <FontAwesome5 name="cart-plus" size={20} ></FontAwesome5>
            <View style={{borderRadius:15,shadowOpacity:0.5,width:20,height:20,backgroundColor:'red',justifyContent:"center",alignItems:"center",position:"absolute",top:-5,left:15, }}>
              <Text style={{color:'white',fontSize:11}}>0</Text>
            </View>
          </TouchableOpacity>
          : null
          }
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    )
  }
}