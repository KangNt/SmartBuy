import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    RefreshControl,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    AsyncStorage,
    Alert
} from 'react-native'
import { IMAGE } from './constants/Image'
import { FontAwesome5 } from '@expo/vector-icons';
export class CustomDrawerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            id_user: null,
            name: '',
            email: '',
            password: '',
            avatar: ""

        }
        try {
            const val = AsyncStorage.multiGet(["id_user", "email", "name", 'avatar']).then(result => {
                // alert(result[0][1])
                // alert(result[1][1])
                // alert(result[2][1])
                // alert(result[3][1])

                this.setState({
                    id_user: result[0][1],
                    email: result[1][1],
                    name: result[2][1],
                    avatar: result[3][1],

                })

            })
        } catch (error) {

        }


    }


    getInfo() {
        const val = AsyncStorage.multiGet(["id_user", "email", "name", 'avatar']).then(result => {
            // alert(result[0][1])


            this.setState({
                id_user: result[0][1],
                email: result[1][1],
                name: result[2][1],
                avatar: result[3][1],

            })

        })

    }

    _AlertLogout = () => {
        Alert.alert("Thông báo!", "Bạn có chắc chắn muốn Logout không?",
            [
                { text: 'Cancel' },
                {
                    text: 'OK', onPress: this._Logout

                }
            ],
            { cancelable: false })

    }


    _Logout = () => {
        AsyncStorage.clear();
        this.setState({
            id_user: null,
            email: null,
            name: null,
            avatar: null,

        })





    }
    Register() {
        this.props.navigation.navigate('Register')
    }
    PulltoRefresh = () => {
        this.setState({
            loading: true
        })
        this.getInfo()
        this.setState({

            loading: false
        })




    }
    render() {

        return (


            <SafeAreaView style={styles.container}>
                
                
                <View style={{ height: 160, alignItems: 'center', justifyContent: 'center',marginTop:-20,backgroundColor:"#CCFFFF"}}>
                {/* <Image  source={require('./images/background.png')} style={{width:"100%",height:200}} /> */}
                    <TouchableOpacity onPress={() => this.getInfo()}
                    >
                        <Image source={this.state.avatar == null || this.state.avatar == ''
                            ? require('./images/user.png')
                            : { uri: this.state.avatar }}
                            style={{ height: 70, width: 70, borderRadius: 60, marginRight: 180, marginTop: 5 }}
                            showEditButton
                        />
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Text style={{ marginTop: 5, marginLeft: -120, fontSize: 18, fontWeight: "bold" }}
                            onPress={() => this.props.navigation.navigate('Profile')}>{this.state.name} </Text>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Text style={{ marginTop: 5, marginLeft: -120, color: "#ABB4BD" }}
                            onPress={() => this.props.navigation.navigate('Profile')}>{this.state.email}</Text>
                    </TouchableOpacity>

                </View>
           
                <ScrollView refreshControl={
                    <RefreshControl
                        onRefresh={this.PulltoRefresh}
                        refreshing={this.state.loading}
                    />
                } style={{ marginLeft: 5 }}>
                    <TouchableOpacity
                        style={{ marginTop: 20,}}
                        onPress={() => this.props.navigation.navigate('MenuTab')}
                    >
                        <View style={{ flexDirection: "row", width:"100%" }}>
                            <Text style={styles.icon}><FontAwesome5 name="home" size={24} color={"#339AF0"} /></Text>
                            <Text style={styles.texts}>Trang Chủ</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{ marginTop: 25 }}
                        onPress={() => this.props.navigation.navigate('Contact')}
                    >
                        <View style={{ flexDirection: "row",  width:"100%" }}>
                            <Text style={styles.icon}><FontAwesome5 name="list-alt" size={24} color={"#34A853"} /></Text>
                            <Text style={styles.texts}>Liên Hệ</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 25,   flex: 1, }}
                        onPress={() => this.props.navigation.navigate('IntroduceDrawer')}
                    >
                        <View style={{ flexDirection: "row",width:"100%" }}>
                            <Text style={styles.icon}><FontAwesome5 name="exchange-alt" size={24} color={"#FBBC05"} /></Text>
                            <Text style={styles.texts}>Giới Thiệu</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 25 }}
                        onPress={() => this.props.navigation.navigate('IntroduceStart')}
                    >
                        <View style={{ flexDirection: "row",width:"100%" }}>
                            <Text style={styles.icon}><FontAwesome5 name="grin-stars" size={24} color={"#EA4335"} /> </Text>
                            <Text style={styles.texts}>Hướng Dẫn</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 25 }}
                        onPress={() => this.props.navigation.navigate('Policy')}
                    >
                        <View style={{ flexDirection: "row",width:"100%" }}>
                            <Text style={styles.icon}><FontAwesome5 name="balance-scale" size={24} color={"#AD3BF7"} /></Text>
                            <Text style={styles.texts}>Chính sách</Text>
                        </View>

                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        style={{ marginTop: 25 }}
                        onPress={() => this.props.navigation.navigate('TutorialPayment')}
                    >
                        <Text style={styles.text}><FontAwesome5 name="credit-card" size={24} color={"#222222"} />   <Text style={styles.texts}>Hướng dẫn thanh toán</Text></Text>
                    </TouchableOpacity> */}
                    {this.state.email == null ?
                        <TouchableOpacity
                            style={{ marginTop: 25 }}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <View style={{ flexDirection: "row",width:"100%" }}>
                                <Text style={styles.icon}><FontAwesome5 name="sign-in-alt" size={24} color={"#395897"} style={styles.text} /></Text>
                                <Text style={styles.texts}>Đăng Nhập</Text>
                            </View>

                        </TouchableOpacity>
                        :
                        null
                    }
                    {this.state.email == null ?
                        null
                        :
                        <TouchableOpacity
                            style={{ marginTop: 25 }}
                            onPress={() => this._AlertLogout()}
                        >
                            <View style={{ flexDirection: "row",width:"100%" }}>
                                <Text style={styles.icon}><FontAwesome5 name="sign-in-alt" size={24} color={"#733BF7"} /></Text>
                                <Text style={styles.texts}>Đăng Xuất</Text>
                            </View>

                        </TouchableOpacity>
                    }
                    {this.state.email == null ?
                        <TouchableOpacity
                            style={{ marginTop: 25 }}
                            onPress={() => this.Register()}
                        >
                            <View style={{ flexDirection: "row",width:"100%" }}>
                                <Text style={styles.icon}><FontAwesome5 name="registered" size={24} color={"#F31C83"} /></Text>
                                <Text style={styles.texts}>Đăng Kí</Text>
                            </View>
                        </TouchableOpacity>
                        :
                        null
                    }
                    {this.state.email == null ?
                        <TouchableOpacity
                            style={{ marginTop: 25 }}
                            onPress={() => this.props.navigation.navigate('ForgotPassword')}
                        >
                            <View style={{ flexDirection: "row",width:"100%" }}>
                                <Text style={styles.icon}><FontAwesome5 name="lock-open" size={24} color={"#AD1F1E"} /></Text>
                                <Text style={styles.texts}>Quên Mật Khẩu</Text>
                            </View>

                        </TouchableOpacity>
                        :
                        null
                    }

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        // backgroundColor:""
    },
    icon: {
        marginLeft: 15,
        width:"13%"


    },
    texts: {
        fontSize: 18,
        marginLeft: "5%",
        width:"87%"
    

    }

})