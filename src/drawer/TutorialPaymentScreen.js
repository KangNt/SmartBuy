import React, { Component } from 'react'

import { Text, View, SafeAreaView } from 'react-native'
import { CustomHeader } from '../index'
export class TutorialPaymentScreen extends Component {
    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>
                <CustomHeader title="Hướng dẫn thanh toán" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>TutorialPayment Screen</Text>
                </View>
            </SafeAreaView>
        )
    }
}