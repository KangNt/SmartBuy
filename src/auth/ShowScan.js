import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image,ScrollView,ImageBackground,AsyncStorage, Dimensions, Button} from 'react-native'
import { CustomHeader } from '../index'
// import { RVText } from '../core/RVText'

// import Swiper from 'react-native-swiper'
import { FlatList } from 'react-native-gesture-handler';
var {width,height} = Dimensions.get('window');
export class ShowScan extends Component {
   
    render() {
         const {info} = this.props.route.params 
        return (
            <SafeAreaView style={{ flex: 1,flexDirection:"column" }} >
                <CustomHeader title="Detail Scan" navigation={this.props.navigation} />
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={{flex:1}}>
                    <View style={{height:150}}>
                    <Text>{info}</Text>
                    {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text>Back</Text>
                    </TouchableOpacity> */}
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({

      imageProduct:{
        width:((width/2)-20)-20,
        height:((width/2)-20)-40,
        backgroundColor:'transparent',
        position:'absolute',
        top:-25
      },
      divListProduct:{
        width:(width/2)-25,
        padding:10,
        borderRadius:10,
        marginTop:25,
        marginBottom:5,
        marginLeft:15,
        alignItems:'center',
        elevation:8,
        shadowOpacity:0.3,
        shadowRadius:50,
        backgroundColor:'white',
      },
    container: {
        marginTop: 10,
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#F5FCFF"

    },
    divtheme:{
        height:42,
        borderBottomWidth:3,
        padding:10,
        borderColor:'#c2191c',
        backgroundColor:'#D3DCE3'
      },
      divtheme2:{
        height:41,
        // borderBottomWidth:2,
        borderColor:'#c2191c',
        padding:10,
        backgroundColor:'white'
      },
    categories:{
        backgroundColor:'rgb(176, 224, 230)',
        padding:10,
        borderColor:"red",
        borderTopWidth:3

    },
    card: {
        backgroundColor: "#fff",
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: 1,
        shadowOffset: {
            width: 30,
            height: 30
        }

    },
    cardImage: {
        width: 100,
        height: 50,
        
    },
    cardText: {
        padding: 10,
        fontSize: 16
    }
})