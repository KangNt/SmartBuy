import React, { Component } from 'react';
import { IMAGE} from '../constants/Image'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { CustomHeader } from '../index'

import {FontAwesome5 }from '@expo/vector-icons'

export class ProfileScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
          email:"",
          name:""
      
        }
      }
  
    render() {
        return (
            
            <View style={styles.container}>
                <CustomHeader title="Profile" navigation={this.props.navigation}  />
                <View style={styles.header}>
                </View>
                
                <Image style={styles.avatar} source={IMAGE.ICON_PROFILE} />
                <ScrollView>
                <View style={styles.body}>
                    {/* <Text style={{ fontSize: 22,color: "#696969",}}>KidPlaza</Text> */}
                
                    <View style={styles.bodyContent}>
                        {/* <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.info}>UX Designer / Mobile developer</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text> */}
                        
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text><FontAwesome5 name="user" size={20} /> Giới tính </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                        <Text><FontAwesome5 name="mobile-alt" size={20} /> Số điện thoại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                        <Text><FontAwesome5 name="birthday-cake" size={20} /> Ngày sinh</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.bodyContent}>
                        <TouchableOpacity style={styles.buttonContainers}>
                        <Text><FontAwesome5 name="envelope" size={20} /> Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainers}>
                        <Text><FontAwesome5 name="map-marker-alt" size={20} /> Địa chỉ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainers}>
                        <Text><FontAwesome5 name="calendar-alt" size={20} /> Ngày tham gia</Text>
                        </TouchableOpacity>
                    </View>
                        
                    
                </View>
                <View style={styles.bodyContent}>
                        <TouchableOpacity style={styles.buttonContainerss}>
                        <Text><FontAwesome5 name="phone" size={20} />   Danh bạ    </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backfaceVisibility:'visible',
        height: 200,
        backgroundColor:"#AE87E6"
        
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
        flexDirection:'row'
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
       
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 150,
        borderRadius: 30,
        backgroundColor: "#FEF9F3",
        marginLeft:-10
    },
    buttonContainers: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 150,
        borderRadius: 30,
        backgroundColor: "#FEF9F3",
        
    },
    buttonContainerss: {
        marginTop: -30,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#FEF9F3",
        
    },

});



// import React, { Component } from 'react'

// import { Text, View, SafeAreaView } from 'react-native'
// import { CustomHeader } from '../index'


// export class ProfileScreen extends Component {
//     render() {
//         return (
//             <SafeAreaView style={{ flex: 1, }}>
//                 <CustomHeader title="Information" navigation={this.props.navigation} />
//                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                     <Text>ProfileScreen</Text>
//                 </View>
//             </SafeAreaView>
//         )
//     }
// }