// import React from 'react'
// import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image,ScrollView } from 'react-native'
// import { CustomHeader } from '../index'


// export  default class Card extends React.Component {

//     render() {
//         return (
//             <SafeAreaView style={{ flex: 1, }} >
                
//                     <ScrollView>
//                     <TouchableOpacity style={StyleSheet.card}>

//                         <Image style={styles.cardImage}
//                             source={{ url: 'https://i1.sndcdn.com/avatars-000703955956-xs2oh0-t500x500.jpg' }} />
//                         <Text style={styles.cardText}>CardText</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={StyleSheet.card}>

//                         <Image style={styles.cardImage}
//                             source={{ url: 'https://i1.sndcdn.com/avatars-000703955956-xs2oh0-t500x500.jpg' }} />
//                         <Text style={styles.cardText}>CardText</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={StyleSheet.card}>

//                         <Image style={styles.cardImage}
//                             source={{ url: 'https://i1.sndcdn.com/avatars-000703955956-xs2oh0-t500x500.jpg' }} />
//                         <Text style={styles.cardText}>CardText</Text>
//                     </TouchableOpacity>
//                     </ScrollView>

                

//             </SafeAreaView>





//             // <SafeAreaView style={{ flex: 1, }} >
//             //     <CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
//             //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

//             //         <RVText content="Home!" />
//             //         <TouchableOpacity
//             //             style={{ marginTop: 20 }}
//             //             onPress={() => this.props.navigation.navigate('HomeDetail')}
//             //         >
//             //         <RVText content=" Do Home Detail" />
//             //         </TouchableOpacity>
//             //     </View>
//             // </SafeAreaView>
//         )
//     }
// }


// const styles = StyleSheet.create({

//     card: {
//         backgroundColor: "#fff",
//         marginBottom: 10,
//         marginLeft: '2%',
//         width: '96%',
//         shadowColor: '#000',
//         shadowOpacity: 0.2,
//         shadowOffset: 1,
//         shadowOffset: {
//             width: 3,
//             height: 3
//         }

//     },
//     cardImage: {
//         width: '100%',
//         height: 200,
//         resizeMode: 'cover',
//     },
//     cardText: {
//         padding: 10,
//         fontSize: 16
//     }
// })