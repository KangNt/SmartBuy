import React, { Component } from 'react'

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { CustomHeader } from '../index'


import { ListItem } from 'react-native-elements'

import { FlatList } from 'react-native-gesture-handler'



function Item({ id, title, selected, onSelect }) {
    return (
        <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
                styles.item,
                { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
            ]}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export class ProfileScreen extends Component {


    keyExtractor = (item, index) => index.toString()

    render() {


      
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <CustomHeader title=" Profile" navigation={this.props.navigation} />
                <SafeAreaView style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ alignSelf: "center" }}>
                            <TouchableOpacity>
                            <View style={styles.profileImage}>
                                <Image source={require("../images/Linh.jpg")} style={styles.image} resizeMode="center"></Image>
                            </View>
                            </TouchableOpacity>
                           

                            <View style={styles.active}></View>
                            <TouchableOpacity>
                                <View style={styles.add}>
                                    <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                                </View>
                            </TouchableOpacity>
                        </View>


                   
                        <TouchableOpacity>
                            <ListItem
                                title={"Full Name"}
                                subtitle={'Nguyễn Thiện Quang'}
                                leftIcon={{ name: 'account-circle' }}
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem
                                title={"Email"}
                                subtitle={'kangnguyen2603@gmail.com'}
                                leftIcon={{ name: 'email' }}
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem
                                title={"Address"}
                                subtitle={'27 Võ Chí Công'}
                                leftIcon={{ name: 'map' }}
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem
                                title={"Phone Number"}
                                subtitle={'0967521045'}
                                leftIcon={{ name: 'phone' }}
                                bottomDivider
                                chevron
                            />
                        </TouchableOpacity>
                    
                        <TouchableOpacity>
                            <ListItem
                                title={"Edit Profile"}
                                subtitle={'Change profile'}
                                leftIcon={{ name: 'edit' }}
                                bottomDivider
                                chevron
                                onPress={() => this.props.navigation.navigate('EditProfile')}
                            />
                        </TouchableOpacity>





                    </ScrollView>
                </SafeAreaView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },

    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});






















// import React, { Component } from 'react';
// import { IMAGE} from '../constants/Image'
// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TouchableOpacity,
//     ScrollView
// } from 'react-native';
// import { CustomHeader } from '../index'

// import {FontAwesome5 }from '@expo/vector-icons'

// export class ProfileScreen extends Component {

//     render() {
//         return (

//             <View style={styles.container}>
//                 <CustomHeader title="Profile" navigation={this.props.navigation}  />
//                 <View style={styles.header}>
//                 </View>

//                 <Image style={styles.avatar} source={IMAGE.ICON_PROFILE} />
//                 <ScrollView>
//                 <View style={styles.body}>
//                     {/* <Text style={{ fontSize: 22,color: "#696969",}}>KidPlaza</Text> */}

//                     <View style={styles.bodyContent}>
//                         {/* <Text style={styles.name}>John Doe</Text>
//                         <Text style={styles.info}>UX Designer / Mobile developer</Text>
//                         <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text> */}

//                         <TouchableOpacity style={styles.buttonContainer}>
//                             <Text><FontAwesome5 name="user" size={20} /> Giới tính </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.buttonContainer}>
//                         <Text><FontAwesome5 name="mobile-alt" size={20} /> Số điện thoại</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.buttonContainer}>
//                         <Text><FontAwesome5 name="birthday-cake" size={20} /> Ngày sinh</Text>
//                         </TouchableOpacity>

//                     </View>
//                     <View style={styles.bodyContent}>
//                         <TouchableOpacity style={styles.buttonContainers}>
//                         <Text><FontAwesome5 name="envelope" size={20} /> Email</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.buttonContainers}>
//                         <Text><FontAwesome5 name="map-marker-alt" size={20} /> Địa chỉ</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.buttonContainers}>
//                         <Text><FontAwesome5 name="calendar-alt" size={20} /> Ngày tham gia</Text>
//                         </TouchableOpacity>
//                     </View>


//                 </View>
//                 <View style={styles.bodyContent}>
//                         <TouchableOpacity style={styles.buttonContainerss}>
//                         <Text><FontAwesome5 name="phone" size={20} />   Danh bạ    </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ScrollView>
//             </View>

//         );
//     }
// }

// const styles = StyleSheet.create({
//     header: {
//         backfaceVisibility:'visible',
//         height: 200,
//         backgroundColor:"#AE87E6"

//     },
//     avatar: {
//         width: 130,
//         height: 130,
//         borderRadius: 63,
//         borderWidth: 4,
//         borderColor: "white",
//         marginBottom: 10,
//         alignSelf: 'center',
//         position: 'absolute',
//         marginTop: 130
//     },
//     name: {
//         fontSize: 22,
//         color: "#FFFFFF",
//         fontWeight: '600',
//     },
//     body: {
//         marginTop: 40,
//         flexDirection:'row'
//     },
//     bodyContent: {
//         flex: 1,
//         alignItems: 'center',
//         padding: 30,

//     },
//     name: {
//         fontSize: 28,
//         color: "#696969",
//         fontWeight: "600"
//     },
//     info: {
//         fontSize: 16,
//         color: "#00BFFF",
//         marginTop: 10
//     },
//     description: {
//         fontSize: 16,
//         color: "#696969",
//         marginTop: 10,
//         textAlign: 'center'
//     },
//     buttonContainer: {
//         marginTop: 10,
//         height: 45,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 20,
//         width: 150,
//         borderRadius: 30,
//         backgroundColor: "#FEF9F3",
//         marginLeft:-10
//     },
//     buttonContainers: {
//         marginTop: 10,
//         height: 45,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 20,
//         width: 150,
//         borderRadius: 30,
//         backgroundColor: "#FEF9F3",

//     },
//     buttonContainerss: {
//         marginTop: -30,
//         height: 45,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 20,
//         width: 250,
//         borderRadius: 30,
//         backgroundColor: "#FEF9F3",

//     },

// });



// // import React, { Component } from 'react'

// // import { Text, View, SafeAreaView } from 'react-native'
// // import { CustomHeader } from '../index'


// // export class ProfileScreen extends Component {
// //     render() {
// //         return (
// //             <SafeAreaView style={{ flex: 1, }}>
// //                 <CustomHeader title="Information" navigation={this.props.navigation} />
// //                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //                     <Text>ProfileScreen</Text>
// //                 </View>
// //             </SafeAreaView>
// //         )
// //     }
// // }