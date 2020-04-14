
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    Image,
    TextInput
} from 'react-native';

import styles from '../../components/styles';
import Images from '../../components/Images';

import ForgotPasswordController from '../../components/ForgotPasswordController';
import { Button } from 'native-base';

import InputTextField from '../../components/InputTextField';
import { CustomHeader } from '../index';

export class ForgotPasswordScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forgotPasswordModalVisible: false,
            otherParamsToSend: 1,
        };
    }

    btnForgotPassword() {
        this.setState({ forgotPasswordModalVisible: true });
    };

    callbackAfterForgotPassword(success, otherValue) {
        this.setState({ forgotPasswordModalVisible: false });
        console.log("success >> " + success + " otherValue >> " + otherValue);
    }

    render() {
        var otherParamsToSend;
        var forgotPasswordModel = <Modal transparent={true} visible={this.state.forgotPasswordModalVisible} onRequestClose={() => {
            this.setState({ forgotPasswordModalVisible: false });
        }}>
            <ForgotPasswordController callbackAfterForgotPassword={this.callbackAfterForgotPassword.bind(this)} otherParamsToSend={this.state.otherParamsToSend} />
        </Modal>



        return (

            <View style={{ margin: 10, marginTop:10}}>
                <CustomHeader title="New Password" navigation={this.props.navigation} />
                <InputTextField
                    style={{ marginTop: 100, marginBottom: 5 }}
                    title="New Password" isSecure={true} valueText={(value) => this.setState({ password: value })}>
                </InputTextField>

                <TouchableOpacity onPress={this.btnForgotPassword.bind(this)}>
                    <Text style={{ fontSize: 14, backgroundColor: 'white', color: 'black', marginTop: 0, padding: 30 }}>
                        ConFirm
                        </Text>
                </TouchableOpacity>
                {forgotPasswordModel}
            </View>
        );

    }

}


