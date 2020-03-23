
import React, { Component } from 'react'

import { Text, View, SafeAreaView } from 'react-native'
import { CustomHeader } from '../index'
export class FavouriteScreen extends Component {
    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>
                <CustomHeader title="Favourite" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>FavouriteScreen</Text>
                </View>
            </SafeAreaView>
        )
    }


// import React, { Component } from 'react'
// import { View, Text } from 'react-native'

// import CustomHeader from '../CustomHeader';


// export class FavouriteScreen extends Component {
//     render() {
//         return (

//             <View>
//                 <CustomHeader title="Favourite" isHome={true} navigation={this.props.navigation} />
//                 <Text>
//                     FavouriteScreen!
//                 </Text>
//             </View>
//         );
//     }


}

