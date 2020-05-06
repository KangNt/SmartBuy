import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    Image,
    Dimensions,
    RefreshControl,
    SafeAreaView
} from 'react-native';
import TextInput from 'react-native-textinput-with-icons'
import styles from '../../components/styles';
import Images from '../../components/Images';

import ForgotPasswordController from '../../components/ForgotPasswordController';
import { Button } from 'native-base';

import InputTextField from '../../components/InputTextField';
import { CustomHeader } from '../index';
import { ScrollView } from 'react-native-gesture-handler';
var { width, height } = Dimensions.get('window');
export class ForgotPasswordScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forgotPasswordModalVisible: false,
            otherParamsToSend: 1,
            email: '',
            Message: '',
            err: "",
            test: '',
            display: 'none',
            hide: "flex",
            showForm: "none",
            number_verify: "",
            password: '',
            passwordcf: '',
            send: "Gửi",
            confirm: "Xác nhận",
            Resend: "Gửi lại mã",
            disabled: false
        };
    }
    SubmitNewPass() {

        if (this.state.password.length < 6) {
            alert("Mật khẩu từ 6 kí tự trở lên")
        } else if (this.state.password != this.state.passwordcf) {
            alert("Mật khẩu xác nhận không đúng")
        }
        else {
            this.setState({
                disabled: true
            })
            fetch('https://smartbuy01.gq/api/users/reset-password', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',

                },
                body: JSON.stringify({
                    email: this.state.email,
                    token: this.state.number_verify,
                    password: this.state.password
                })
            }).then((resp) => resp.json())
                .then((resp => {
                    if (resp.result == 'success') {
                        this.setState({
                            display: 'none',
                            hide: "none",
                            showForm: "flex",
                            password: "",
                            passwordcf: "",
                            disabled: false

                        })
                        alert("Cập nhật mật khẩu thành công")
                        setTimeout(() => {
                            this.props.navigation.navigate("Home")
                        }, 1500);
                    }
                    else {
                        alert(resp.err)
                        // this.setState({
                        //     err:resp.err,
                        //     display:'none'

                        // })
                    }

                })
                )
        }
    }
    SubmitCodeVerify() {

        if (this.state.number_verify == '') {
            alert("Mã xác nhận không được để trống!")
        }
        else {
            this.setState({
                confirm: "Đang xử lí...",
                disabled: true
            })
            fetch('https://smartbuy01.gq/api/users/check-token', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',

                },
                body: JSON.stringify({
                    email: this.state.email,
                    token: this.state.number_verify
                })
            }).then((resp) => resp.json())
                .then((resp => {
                    if (resp.result == 'success') {
                        this.setState({
                            display: 'none',
                            hide: "none",
                            showForm: "flex",
                            disabled: false
                        })
                    }
                    else {
                        alert(resp.err)
                        // this.setState({
                        //     err:resp.err,
                        //     display:'none'

                        // })
                    }
                })
                )
        }
    }
    reSend() {
        this.setState({
            reSend: "Đang gửi lại",
            disabled: true
        })
        fetch('https://smartbuy01.gq/api/users/lost-password', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',

            },
            body: JSON.stringify({
                email: this.state.email
            })
        }).then((resp) => resp.json())
            .then((resp => {
                if (resp.result == 'ok') {
                    this.setState({
                        Message: 'Đã gửi lại mã xác nhận tới email của bạn, vui lòng kiểm tra lại!',
                        display: 'flex',
                        hide: "none"
                        , number_verify: "",
                        disabled: false

                    })
                }
                else {
                    this.setState({
                        err: resp.err,
                        display: 'none'

                    })
                }
            })
            )
    }
    btnForgotPassword() {

        this.setState({ forgotPasswordModalVisible: true });
        if (this.state.email == "") {
            alert('Email không được để trống')
        } else {
            this.setState({
                send: "Đang gửi...",
                disabled: true
            })
            fetch('https://smartbuy01.gq/api/users/lost-password', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',

                },
                body: JSON.stringify({
                    email: this.state.email
                })
            }).then((resp) => resp.json())
                .then((resp => {
                    if (resp.result == 'ok') {
                        this.setState({
                            Message: 'Chúng tôi đã gửi mã xác nhận tới email của bạn, nếu không nhận được email vui lòng ấn gửi lại!',
                            display: 'flex',
                            hide: "none",
                            disabled: false

                        })
                    }
                    else {
                        this.setState({
                            err: resp.err,
                            display: 'none'

                        })
                    }
                })
                )
        }
    }


    render() {

        return (
            <SafeAreaView style={{flex:1}}>

           
            <View style={{ margin: 10, marginTop: 10 }}>
                <CustomHeader title="Quên mật khẩu" navigation={this.props.navigation} />

                <View>
                    <View style={{ display: this.state.hide, alignItems: "center", marginTop: 50 }}>
                        <TextInput
                            label="Nhập email để khôi phục mật khẩu"
                            leftIcon="mail"
                            leftIconType="oct"
                            rippleColor="blue"

                            rightIconType="material"
                            value={this.state.email}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={(value) => this.setState({ email: value })}


                        />


                    </View>
                    <View>
                        <Text style={{ display: this.state.hide, alignContent: "flex-end", color: "red" }}>{this.state.err}</Text>
                    </View>
                    <View style={{ display: this.state.display, marginTop: 50, alignItems: "center" }}>
                        <TextInput
                            label="Nhập mã khôi phục mật khẩu"
                            leftIcon="key"
                            leftIconType="awesome"
                            rippleColor="blue"
                            rightIconType="material"
                            value={this.state.number_verify}

                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={(value) => this.setState({ number_verify: value })}
                        />

                    </View>
                    <View>
                        <Text style={{ display: this.state.display, color: "red", width: width - 50 }}>{this.state.Message}</Text>
                    </View>
                    <View style={{ display: this.state.showForm, marginTop: 50, alignItems: "center" }}>
                        <TextInput
                            label="Nhập mật khẩu mới"
                            leftIcon="lock"
                            leftIconType="oct"
                            rippleColor="blue"
                            rightIconType="material"
                            secureTextEntry={true}
                            value={this.state.password}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={(value) => this.setState({ password: value })}
                        />
                    </View>
                    <View style={{ display: this.state.showForm, marginTop: 20, alignItems: "center" }}>
                        <TextInput
                            label="Xác nhận lại mật khẩu"
                            leftIcon="lock"
                            leftIconType="oct"
                            rippleColor="blue"
                            value={this.state.passwordcf}
                            rightIconType="material"
                            secureTextEntry={true}
                            refrance={(refrance) => {
                                this.input = refrance;
                            }}
                            onChangeText={(value) => this.setState({ passwordcf: value })}
                        />
                    </View>
                    <View style={{ display: this.state.hide, alignItems: "center" }}>
                        <TouchableOpacity disabled={this.state.disabled} style={{ width: width - 200, backgroundColor: "#E67E22", borderRadius: 5, justifyContent: 'center', alignContent: "center" }}
                            onPress={() => this.btnForgotPassword()}>
                            <View style={{ alignItems: "center", height: 40, alignContent: 'center', justifyContent: "center" }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: '#E5E7E9', textAlign: 'center',
                                }}>
                                    {this.state.send}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ display: this.state.display, alignItems: "center", flexDirection: "row", marginTop: 10, width: width - 30 }}>
                        <TouchableOpacity disabled={this.state.disabled} style={{ marginLeft: 50, width: width - 250, backgroundColor: "#E67E22", borderRadius: 5, justifyContent: 'center', alignContent: "center" }}
                            onPress={() => this.SubmitCodeVerify()}>
                            <View style={{ alignItems: "center", height: 40, alignContent: 'center', justifyContent: "center" }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: '#E5E7E9', textAlign: 'center',
                                }}>
                                    {this.state.confirm}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.disabled} style={{ marginLeft: 20, width: width - 250, backgroundColor: "#E67E22", borderRadius: 5, justifyContent: 'center', alignContent: "center" }}
                            onPress={() => this.reSend()}>
                            <View style={{ alignItems: "center", height: 40, alignContent: 'center', justifyContent: "center" }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: '#E5E7E9', textAlign: 'center',
                                }}>
                                    {this.state.Resend}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <TouchableOpacity onPress={()=>this.SubmitNewPass()} style={{display:this.state.showForm}}>
                    <Text style={{display:this.state.showForm, fontSize: 14, backgroundColor: 'white', color: 'black', marginTop: 0, padding: 30 }}>
                        
                    </Text>
                </TouchableOpacity> */}
                </View>

                <View style={{ display: this.state.showForm, alignItems: "center" }}>
                    <TouchableOpacity disabled={this.state.disabled} style={{ width: width - 200, backgroundColor: "#E67E22", borderRadius: 5, justifyContent: 'center', alignContent: "center" }}
                        onPress={() => this.SubmitNewPass()}>
                        <View style={{ alignItems: "center", height: 40, alignContent: 'center', justifyContent: "center" }}>
                            <Text style={{
                                fontSize: 16,
                                color: '#E5E7E9', textAlign: 'center',
                            }}>
                                Cập nhật
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>

        );

    }

}