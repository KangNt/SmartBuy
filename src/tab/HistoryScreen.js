import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import { CustomHeader } from '../index'

import { RVText } from '../core/RVText'

export class HistoryScreen extends Component {

    render() {
        return (

            <SafeAreaView style={{ flex: 1, }} >
            <CustomHeader title="History" isHome={true} navigation={this.props.navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <RVText content="History!" />
                {/* <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={() => this.props.navigation.navigate('HomeDetail')}
                >
                    <RVText content=" Do Home Detail" />
                </TouchableOpacity> */}
            </View>

        </SafeAreaView>
        )
    }
}


