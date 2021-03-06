import { Text, View, Image, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native';
import React, { Component } from 'react';
import * as Styles from '@res/styles';
import { Button } from '@utils/CustomView';
import { isNaturalNumber } from '@utils/isNatural'
import { COLOR_BLACK} from '@res/color';
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
    setOTP = (otp) => {
        this.setState({ errortext: '' });
        this.otp = otp;
    }
    verifyOTP = () => {
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
                        errortext: 'Invalid OTP'
                    });
            } else
                this.setState({
                    animating: false,
                    errortext: 'Enter your OTP to continue'
                }
                );

        } catch (error) {
            console.log(error);
        }

    }
    render() {
        return (
            <View style={Styles.center(1)}>
                <KeyboardAvoidingView behavior="padding" style={Styles.center()}>
                    <Text style={[
                        Styles.setTextDesign(COLOR_BLACK, 'PrimaryBold'),
                        {fontSize:28},
                        Styles.setMargin(0, 0, 0, 30)]}>
                        {'Enter OTP'}
                    </Text>
                    <Text style={[
                        Styles.setMargin(0, 0, 0, 30),
                        Styles.setTextDesign()]}>
                        Enter your 8 digit OTP sent to you.
                    </Text>

                    <TextInput
                        style={[Styles.setInputDesign()]}
                        keyboardType='numeric'
                        maxLength={8}
                        onChangeText={otp => this.setOTP(otp)}
                        underlineColorAndroid="transparent"
                        placeholder="OTP"
                        autoCapitalize="none" />
                    <Button
                        margin={30}
                        width={80}
                        header={this.state.buttontext}
                        onClick={this.verifyOTP}
                        animating={this.state.animating}
                    />
                    <Text style={[
                        Styles.setTextDesign('red'),
                        Styles.setMargin(0, 0, 0, 15)]}>
                        {this.state.errortext}
                    </Text>
                </KeyboardAvoidingView>
                </View>

        );
    }
}