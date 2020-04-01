import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet,
    Alert,
    Dimensions
} from 'react-native'
// import { CustomHeader } from '../index'

import { IMAGE } from '../constants/Image'
import { RVText } from '../core/RVText'

// import { Icon, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

import { Card, ListItem, Button, Icon, ButtonGroup } from 'react-native-elements'

var { height, width } = Dimensions.get('window');

export class HistoryScreen extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         selectedIndex: 2
    //     }
    //     this.updateIndex = this.updateIndex.bind(this)
    // }
    // updateIndex(selectedIndex) {
    //     this.setState({ selectedIndex })
    // }

    //   const component1 = () => <Text>Hello</Text>
    //   const component2 = () => <Text>World</Text>
    //   const component3 = () => <Text>ButtonGroup</Text>


    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, title: "exp://192.168.0.106:19000", color: "#F2FAFD", image: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" },
                { id: 2, title: "exp://192.168.0.106:19000", color: "#F2FAFD", image: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" },
                { id: 3, title: "exp://192.168.0.106:19000", color: "#F2FAFD", image: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" },
                { id: 4, title: "exp://192.168.0.106:19000", color: "#F2FAFD", image: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" },
                { id: 5, title: "exp://192.168.0.106:19000", color: "#F2FAFD", image: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" },
                { id: 6, title: "exp://192.168.0.106:19000", color: "#F2FAFD", image: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" },
                { id: 7, title: "exp://192.168.0.106:19000", color: "#F2FAFD", image: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" },
                { id: 8, title: "exp://192.168.0.106:19000", color: "#F2FAFD", image: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" },
                { id: 9, title: "exp://192.168.0.106:19000", color: "#F2FAFD", image: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" },
                { id: 10, title: "exp://192.168.0.106:19000", color: "#F2FAFD", image: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" },
            ]
        };
    }

    clickEventListener(item) {
        Alert.alert(item.title)
    }


    render() {
        const buttons = ['Scan', 'Oders',]
        const { selectedIndex } = this.state
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

                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 50, borderRadius: 30 }}
                />

                <View style={styles.container}>
                    <FlatList style={styles.list}
                        contentContainerStyle={styles.listContainer}
                        data={this.state.data}  
                        horizontal={false}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]} onPress={() => { this.clickEventListener(item) }}>
                                    <Image style={styles.cardImage} source={{ uri: item.image }} />
                                    <Text style={styles.title}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }} />
                </View>





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
    },
    container:{
        flex:1,
        marginTop:20,
      },
      list: {
        //paddingHorizontal: 5,
        backgroundColor:"#E6E6E6",
      },
    
      /******** card **************/
      card:{
        width: width,
        height:150,
        flexDirection:'row',
        padding:20,
    
        justifyContent: 'center', 
        alignItems: 'center' 
      },
      cardImage:{
        height: 70,
        width: 70,
      },
      title:{
        fontSize:15,
        flex:1,
        color:"#333",
        fontWeight:'bold',
        marginLeft:40
      },
      subTitle:{
        fontSize:12,
        flex:1,
        color:"#FFFFFF",
      },
      icon:{
        height: 20,
        width: 20, 
      }
})