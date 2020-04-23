import React, { Component } from 'react'

import { View, Text, SafeAreaView } from "react-native"
import { CustomHeader } from './index'
export default class Checkout extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <CustomHeader title="Checkouts" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Checkout Screen</Text>
                </View>
            </SafeAreaView>
        )
    }
}

