import React, { Component } from 'react'

import { Text, View, SafeAreaView } from 'react-native'
import {CustomHeader} from '../index'
import { NavigationEvents } from 'react-navigation';
export class HomeScreenDetail extends Component {
  constructor(props){
    super(props);
 
      
      
    }
    render() {
      const {product} = this.props.route.params
        return (
            <SafeAreaView style={{ flex: 1, }}>
            <CustomHeader title="Product Detail" navigation={this.props.navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{product.name}</Text>
            <Text>{product.id}</Text>
            <Text>{product.price}</Text>
            </View>
          </SafeAreaView>
        )
    }
}

