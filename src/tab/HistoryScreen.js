import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
// import { CustomHeader } from '../index'

import { IMAGE } from '../constants/Image'
import { RVText } from '../core/RVText'

import { Icon, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'



export class HistoryScreen extends Component {

    render() {

        let { navigation, isHome, title } = this.props
        return (

            <SafeAreaView style={{ flex: 1, }} >
                {/* <CustomHeader title="History" isHome={true} navigation={this.props.navigation} /> */}
                <View style={{ flexDirection: 'row', height: 50 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        {
                            isHome ?
                                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                    <Image style={{ width: 30, height: 30, marginLeft: 5 }}
                                        source={IMAGE.ICON_DELETE}
                                        resizeMode='contain' />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                                    onPress={() => this.props.navigation.goBack()}
                                >
                                    <Image style={{ width: 24, height: 24, marginLeft: 5 }}
                                        source={IMAGE.ICON_DELETE}
                                        resizeMode="contain"
                                    />
                                    {/* <Text>Back</Text> */}
                                </TouchableOpacity>
                        }
                    </View>


                    <View style={{ flex: 1.5, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginRight: 70 }}>History</Text>
                    </View>
                    <View style={{ flex: 0.1, marginTop: 3, marginRight: -75 }}>
                        <TouchableOpacity>
                            <Icon
                                raised
                                reverse
                                name='history'
                                type='font-awesome'
                                size={13}
                                color='#2196F3'
                            />
                        </TouchableOpacity>

                    </View>

                    <View style={{ flex: 1 }}></View>

                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <RVText content="History!" />
                </View>




                <ScrollView>
                    <TouchableOpacity>
                        <ListItem
                            title='Limited supply! Its like digital gold!'
                            subtitle={
                                <View style={styles.subtitleView}>
                                    <Image source={require('../images/Linh.jpg')} style={styles.ratingImage} />
                                    <Text style={styles.ratingText}>5 months ago</Text>
                                </View>
                            }
                            leftAvatar={{ source: require('../images/Linh.jpg') }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ListItem
                            title='Limited supply! Its like digital gold!'
                            subtitle={
                                <View style={styles.subtitleView}>
                                    <Image source={require('../images/Linh.jpg')} style={styles.ratingImage} />
                                    <Text style={styles.ratingText}>5 months ago</Text>
                                </View>
                            }
                            leftAvatar={{ source: require('../images/Linh.jpg') }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ListItem
                            title='Limited supply! Its like digital gold!'
                            subtitle={
                                <View style={styles.subtitleView}>
                                    <Image source={require('../images/Linh.jpg')} style={styles.ratingImage} />
                                    <Text style={styles.ratingText}>5 months ago</Text>
                                </View>
                            }
                            leftAvatar={{ source: require('../images/Linh.jpg') }}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ListItem
                            title='Limited supply! Its like digital gold!'
                            subtitle={
                                <View style={styles.subtitleView}>
                                    <Image source={require('../images/Linh.jpg')} style={styles.ratingImage} />
                                    <Text style={styles.ratingText}>5 months ago</Text>
                                </View>
                            }
                            leftAvatar={{ source: require('../images/Linh.jpg') }}
                        />

                    </TouchableOpacity>
                </ScrollView>


            </SafeAreaView>


        )
    }
}

styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 100,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    }
})