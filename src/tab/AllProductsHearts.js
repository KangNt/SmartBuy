import React, { Component } from 'react'

import { Text, View, SafeAreaView } from 'react-native'
import { CustomHeader } from '../index'
export class AllProductsHearts extends Component {
    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>
                <CustomHeader title="Danh sách sản phẩm" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>  AllProductsHearts Screen</Text>
                </View>
            </SafeAreaView>
        )
    }
}