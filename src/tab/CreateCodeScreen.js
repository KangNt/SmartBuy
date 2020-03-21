import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { CustomHeader } from '../index'

export class CreateCodeScreen extends Component{

    render(){
        return( 
            <SafeAreaView style={{ flex: 1, }} >
            <CustomHeader title="CreateCode" isHome={true} navigation={this.props.navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        </SafeAreaView>

        )
    }
}

