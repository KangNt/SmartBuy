import React, { Component } from 'react'

import { Text, View, SafeAreaView } from 'react-native'
import { CustomHeader } from '../index'
export class AllProductsBuys extends Component {
    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>
                <CustomHeader title="Danh sách sản phẩm" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>  AllProductsBuys Screen</Text>
                </View>
            </SafeAreaView>
        )
    }
}