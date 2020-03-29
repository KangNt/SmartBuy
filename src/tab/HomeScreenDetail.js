import React, { Component } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

import { Text, View, SafeAreaView,TouchableOpacity } from 'react-native'
import {CustomHeader} from '../index'
export class HomeScreenDetail extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
            <CustomHeader title="Product Detail" isHome={false} navigation={this.props.navigation} />
            <TouchableOpacity onPress={()=> navigation.navigate('cart')} style={{position:'absolute',left:300,top:35}}>
                <FontAwesome5 name="cart-plus" size={20}></FontAwesome5>
                <View style={{borderRadius:7,width:15,height:15,backgroundColor:'red',justifyContent:"center",alignItems:"center",position:"absolute",top:-5,left:15}}>
                  <Text style={{color:'white',fontSize:11}}>0</Text>
                </View>
              
              </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
              <Text>Home Detail</Text>
            </View>
          </SafeAreaView>
        )
    }
}

