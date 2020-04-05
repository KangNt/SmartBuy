import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Alert,
    SafeAreaView
  } from 'react-native';
// import { CustomHeader } from '../index'
import { IMAGE } from '../constants/Image'

import { Icon, ListItem } from 'react-native-elements'

import { ScrollView } from 'react-native-gesture-handler'

export class FavouriteScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
            data: [
                { id: 1, name: "Headphone", image: "https://salt.tikicdn.com/cache/w1200/ts/product/42/b3/30/9899385a6d821a948167cd1dd0eed190.jpg", count: "$124.711" },
                { id: 2, name: "Headphone", image: "https://salt.tikicdn.com/cache/w1200/ts/product/42/b3/30/9899385a6d821a948167cd1dd0eed190.jpg", count: "$234.722"},
                { id: 3, name: "Headphone", image: "https://salt.tikicdn.com/cache/w1200/ts/product/42/b3/30/9899385a6d821a948167cd1dd0eed190.jpg", count: "$324.723" },
                { id: 4, name: "Personal", image: "https://salt.tikicdn.com/cache/w1200/ts/product/42/b3/30/9899385a6d821a948167cd1dd0eed190.jpg", count: "$154.573" },
                { id: 5, name: "For sale", image: "https://salt.tikicdn.com/cache/w1200/ts/product/42/b3/30/9899385a6d821a948167cd1dd0eed190.jpg", count: "$124.678" },
            ]
        };
    }

    clickEventListener = (item) => {
        Alert.alert('Message', 'Item clicked. ' + item.name);
    }

    render() {
        let { navigation, isHome, title } = this.props
        return (

            <SafeAreaView style={{ flex: 1, }}>
                {/* <CustomHeader title="Favourite" navigation={this.props.navigation} /> */}

                <View style={{ flexDirection: 'row', height: 50 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        {
                            isHome ?
                                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                    <Image style={{ width: 30, height: 30, marginLeft: 5 }}
                                        source={IMAGE.ICON_MENU}
                                        resizeMode='contain' />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                                    onPress={() => this.props.navigation.goBack()}
                                >
                                    <Image style={{ width: 25, height: 25, marginLeft: 5 }}
                                        source={IMAGE.ICON_BACK}
                                        resizeMode="contain"
                                    />
                                    {/* <Text>Back</Text> */}
                                </TouchableOpacity>
                        }
                    </View>


                    <View style={{ flex: 1.5, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontWeight: "bold", marginRight: 50 }}>Favourite</Text>

                    </View>
                    <View style={{ flex: 0.1, marginTop: 3, marginRight: -60 }}>
                        <TouchableOpacity>
                            <Icon
                                raised
                                reverse
                                name='history'
                                type='font-awesome'
                                size='13'
                                color='#2196F3'
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1 }}></View>

                </View>


                <View style={styles.container}>
                    <FlatList
                        style={styles.contentList}
                        columnWrapperStyle={styles.listContainer}
                        data={this.state.data}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.card} onPress={() => { this.clickEventListener(item) }}>
                                    <Image style={styles.image} source={{ uri: item.image }} />
                                    <View style={styles.cardContent}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.count}>{item.count}</Text>
                                        <TouchableOpacity style={styles.followButton} onPress={() => this.clickEventListener(item)}>
                                            <Text style={styles.followButtonText}>Add to cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                </View>

            </SafeAreaView>



        )

    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
      backgroundColor:"#ebf0f7",
      
    },
    contentList:{
      flex:1,
    },
    cardContent: {
      marginLeft:20,
      marginTop:10
    },
    image:{
      width:90,
      height:90,
      borderRadius:45,
      borderWidth:2,
      borderColor:"#ebf0f7"
    },
  
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      marginLeft: 20,
      marginRight: 20,
      marginTop:20,
      backgroundColor:"white",
      padding: 10,
      flexDirection:'row',
      borderRadius:30,
    },
  
    name:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#3399ff",
      fontWeight:'bold'
    },
    count:{
      fontSize:14,
      flex:1,
      alignSelf:'center',
      color:"#6666ff"
    },
    followButton: {
      marginTop:10,
      height:35,
      width:100,
      padding:10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "white",
      borderWidth:1,
      borderColor:"#dcdcdc",
    },
    followButtonText:{
      color: "#FF5757",
      fontSize:12,
    },
  });  












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
