import React, { Component } from 'react'
import {
    View,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    LayoutAnimation,
    UIManager,
    Platform,
    ScrollView
} from 'react-native'
import { CustomHeader } from '../index'



export class IntroduceDrawer extends Component {

    constructor() {
        super();

        // if (Platform.OS === 'android') {

        //     UIManager.setLayoutAnimationEnabledExperimental(true);

        // }

        this.state = {

            textLayoutHeight: 0,
            updatedHeight: 0,
            expand: false,
            buttonText: 'Giới thiệu về SmartBuy',
           
            

        }
    }


    expand_collapse_Function = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        if (this.state.expand == false) {
            this.setState({
                updatedHeight: this.state.textLayoutHeight,
                expand: true,
                buttonText: 'SmartBuy with love'
            });
        }
        // else {
        //     this.setState({
        //         updatedHeight: 0,
        //         expand: false,
        //         buttonText: 'Điều khoản chính sách sử dụng(+)'
        //     });
        // }
    }



    getHeight(height) {
        this.setState({ textLayoutHeight: height * 10});
    }


    render() {
        return (

            <SafeAreaView style={{ flex: 1, width:"100%"}}>
                <CustomHeader title="Giới thiệu" navigation={this.props.navigation} />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.logo_arrow}>
                        <View style={{ margin: 10, marginLeft: 10, marginTop: 20 }}>
                            <Image source={require('../images/Smartbuy-logo.png')} />
                        </View>

                        <TouchableOpacity style={{ marginLeft: "35%", marginTop: 30 }}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Image source={require('../images/enter.png')}  />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.text}>
                        <Text style={styles.slogan}>SmartBuy</Text>
                        <Text style={styles.slogan2}>              mua sắm thông minh</Text>
                    </View>

                     <Image source={require('../images/banner-policy.png')} style={{width:-100,height:200}} />

                    <View style={styles.MainContainer}>
                        <View style={styles.ChildView}>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={this.expand_collapse_Function}
                                style={styles.TouchableOpacityStyle}>


                                <Text style={styles.TouchableOpacityTitleText}>{this.state.buttonText}</Text>
                           


                            </TouchableOpacity>


                            <View style={{ height: this.state.updatedHeight, overflow: 'hidden' }}>

                                <Text style={styles.ExpandViewInsideText}
                                    onLayout={(value) => this.getHeight(value.nativeEvent.layout.height)}>

                                 SmartBuy.com cung cấp cho người dùng các dịch vụ sau:
                                   <Text> Dịch vụ thông tin thương phẩm</Text> 
                                    Giải pháp tem xác thực điện tử
                                    Dịch vụ quảng cáo SmartBuy
                                    Đăng ký Affiliate shop
                                    Giải pháp QR code truy xuất thông tin
                                    Dịch vụ đăng ký Mã số mã vạch
                                    Dịch vụ tư vấn giấy phép doanh nghiệp
                                    Dịch vụ quản trị sản phẩm
                                    Dịch vụ hỗ trợ in ấn tem
                                Để sử dụng dịch vụ, người dùng có thể lựa chọn không đăng ký để sử dụng hoặc đăng ký để sử dụng dịch vụ.
                                Để đăng ký một tài khoản trên App, người dùng cung cấp thông tin bao gồm số điện thoại, địa chỉ email, họ tên, ngày sinh, địa chỉ và mật khẩu. 

                                  </Text>
                            </View>
                        </View>
                    </View>


                    



                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    logo_arrow: {
        flexDirection: "row"
    },
    text: {
        marginLeft: "15%",
        marginTop: 10,
        margin:10
    },
    slogan: {
        fontSize: 18,
        fontWeight: "bold",
    },
    slogan2:{
        fontSize: 16,   
    },
    MainContainer:
    {
        flex: 1,
        width:"100%",
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    ChildView:
    {
        borderWidth: 1,
        borderColor: '#999D9E',
        margin: 10,
    },
    TouchableOpacityStyle:
    {
        padding: 10,
        backgroundColor: '#999D9E',
        
    },

    TouchableOpacityTitleText:
    {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        
    },

    ExpandViewInsideText:
    {
        fontSize: 16,
        color: '#000',
        padding: 10
    }
})



