import React, { Component } from 'react'

import { Text, View, SafeAreaView } from 'react-native'
import {CustomHeader} from './index'
export class Cart extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
            <CustomHeader title="Cart" isHome={false} navigation={this.props.navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Cart Detail</Text>
            </View>
          </SafeAreaView>
        )
    }
}

