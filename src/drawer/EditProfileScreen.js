
import React, { Component } from 'react'

import { Text, View, SafeAreaView,Image } from 'react-native'
import { CustomHeader } from '../index'
// import { colors } from "../../utils";
export class EditProfileScreen extends Component {

    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>
                <CustomHeader title="EditProfile" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>EditProfileScreen </Text>
                </View>
            </SafeAreaView>
        )
    }
}



