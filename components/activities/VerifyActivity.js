/*import { Text, View, Image, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native';
import React, { Component } from 'react';
import * as Styles from '@res/styles';
import { REGISTER } from '@res/string';
import { Button } from '@utils/CustomView';
import { isNaturalNumber } from '@utils/isNatural'
import { COLOR_BLACK, COLOR_PRIMARY } from '@res/color';
import configureStore from '@store/store';
import { verifyOtp } from '@actions/actions';

const store = configureStore();

export class VerifyActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errortext: '',
            buttontext: 'Verify OTP',
            animating: false}
    }
    setNumber = (otp) => {
        this.setState({ errortext: '' });
        this.otp = otp;
    }
    sendOTP = () => {
        try {
            this.setState(
                { animating: true });
            if (this.otp != undefined) {
                if (isNaturalNumber(parseInt(this.otp)) && this.otp.length == 8) {
                    store.dispatch({
                        type: verifyOtp.type,
                        payload: JSON.stringify({
                            otp: this.otp,
                            csrfToken: store.getState().csrfToken,
                            sessionId: store.getState().sessionId,
                        })
                    });
                } else
                    this.setState({
                        animating: false,
                        errortext: 'Invalid mobile number'
                    });
            } else
                this.setState({
                    animating: false,
                    errortext: 'Enter your mobile number to continue'
                }
                );

        } catch (error) {
            console.log(error);
        }

    }
    render() {
        return (
            <ImageBackground
                source={require('assets/img/vector.png')}
                style={{ width: Styles.toPxlWidth(100), height: Styles.toPxlHeight(100) }}>
                <KeyboardAvoidingView behavior="padding" style={Styles.center(1)}>
                    <Text style={[
                        Styles.setTextDesign(COLOR_BLACK, 'PrimaryBold'),
                        Styles.setMargin(0, 0, 0, 30)]}>
                        {REGISTER}
                    </Text>
                    <Text style={[
                        Styles.setMargin(0, 0, 0, 30),
                        Styles.setTextDesign()]}>
                        To Login/Create enter your {'\n'} 10 digit mobile number.
                    </Text>

                    <TextInput
                        style={[Styles.setInputDesign()]}
                        keyboardType='numeric'
                        maxLength={10}
                        onChangeText={number => this.setNumber(number)}
                        underlineColorAndroid="transparent"
                        placeholder="Mobile Number"
                        autoCapitalize="none" />
                    <Button
                        margin={30}
                        width={80}
                        header={this.state.buttontext}
                        onClick={this.sendOTP}
                        animating={this.state.animating}
                    />
                    <Text style={[
                        Styles.setTextDesign('red'),
                        Styles.setMargin(0, 0, 0, 15)]}>
                        {this.state.errortext}
                    </Text>
                </KeyboardAvoidingView>

            </ImageBackground>

        );
    }
}*/