import React, { Component } from 'react'

import { Text, View, SafeAreaView } from 'react-native'
import { CustomHeader } from '../index'
export class NotificationsScreen extends Component {
    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>
                <CustomHeader title="Thông Báo" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Notifications Screen</Text>
                </View>
            </SafeAreaView>
        )
    }
}