// // import React from 'react';
// // import { View, StatusBar } from 'react-native';


// // export default  Screen =()=> {
// //         return(
// //         <View style ={{flex:1,backgroundColor:"#161924"}}>
// //         <StatusBar barStyle="light-content"/>
// //     </View>
// //     );//end-return

// // }//end-export




// import React from 'react';
// import { View, StyleSheet,TouchableOpacity,Text,SafeAreaView } from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons';

// export default class Screen extends React.Component {
    
//     render() {
//         return (
//             <View style={styles.container}>

                
//                 <SafeAreaView style={{ flex: 1 }}>
//                     <TouchableOpacity
//                         style={{ alignItems: "flex-end", margin: 16 }}
//                         onPress={this.props.navigation.openDrawer}
//                     >
//                         <FontAwesome5 name="bars" size={24} color="#161924" />
//                     </TouchableOpacity>

//                     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                         <Text style={styles.text}>{this.props.name} </Text>
//                     </View>
//                 </SafeAreaView>


//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#FFF"
//     },
//     text: {
//         color: "#161924",
//         fontSize: 20,
//         fontWeight: "500"
//     }
// });