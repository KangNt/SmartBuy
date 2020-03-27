import React, { Component } from 'react'

import { Text, View, SafeAreaView ,TouchableOpacity } from 'react-native'
import {CustomHeader} from '../index'
export class SettingsScreenDetail extends Component {
    render() {
      // const {email} = this.props.route.params
        return (
            <SafeAreaView style={{ flex: 1, }}>
            <CustomHeader title="Settings Detail" navigation={this.props.navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Settings Detai123l</Text>
              {/* <Text>{email}</Text> */}
              <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('Setting')}
            
          >
            <Text>GOGOGo</Text>
          </TouchableOpacity>
            </View>
          </SafeAreaView>
        )
    }
}