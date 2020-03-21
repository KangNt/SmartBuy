import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image,TouchableOpacity,ScrollView,StyleSheet} from 'react-native'
import { IMAGE } from './constants/Image'
import { FontAwesome5 } from '@expo/vector-icons';
export class CustomDrawerContent extends Component {
   
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity>
                    <Image source={IMAGE.ICON_PROFILE}
                        style={{ height: 70, width: 70, borderRadius: 60, marginRight: 180, marginTop: 5 }}
                        showEditButton
                    />
                    {/* <Avatar
                        source={{
                            uri:
                                'https://i1.sndcdn.com/avatars-000703955956-xs2oh0-t500x500.jpg',
                        }}
                        showEditButton
                        style={{ height: 70, width: 70, borderRadius: 60, marginRight: 180, marginTop: -20 }}
                    /> */}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ marginTop: 5, marginLeft: -120, fontSize: 18, fontWeight: "bold" }}>KidPlaza </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ marginTop: 5, marginLeft: -120, color: "#ABB4BD" }}>@kiennguyen07</Text>

                </TouchableOpacity>


            </View>
            <ScrollView style={{ marginLeft: 5 }}>
                <TouchableOpacity
                    style={{ marginTop: 10,flexDirection:"row"}}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >
                    <Text style={styles.text}>
                        <FontAwesome5 name="home" size={24} color={"#CDCCCE"} />   Home</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >
                    <Text style={styles.text} ><FontAwesome5 name="user" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Hồ sơ</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >
                    <Text style={styles.text}><FontAwesome5 name="list-alt" size={24} color={"#CDCCCE"} />   <Text style={styles.texts}>Danh sách</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >

                    <Text style={styles.text}><FontAwesome5 name="comment-dots" size={24} color={"#CDCCCE"} />   <Text style={styles.texts}>Chủ đề</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >
                    <Text style={styles.text}><FontAwesome5 name="bookmark" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Dấu trang</Text> </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >

                    <Text style={styles.text} ><FontAwesome5 name="bolt" size={24} color={"#CDCCCE"} />     <Text style={styles.texts}>Khoảnh khắc</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >

                    <Text style={styles.text}><FontAwesome5 name="bell" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Notifications</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 35, marginLeft: 5 }}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={{ marginLeft: 15, marginTop: 65 }}>Đăng xuất</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 10,
        flexDirection: "row",
        marginLeft: 10,
        fontSize:18
         
    },
    
})
