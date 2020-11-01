import React, { Component } from 'react';
import { Text, View, Image, TextInput, ImageBackground, ScrollView,KeyboardAvoidingView } from 'react-native';
import * as Styles from '@res/styles';
import { REGISTER } from '@res/string';
import { Button } from '@utils/CustomView';
import { isNaturalNumber } from '@utils/isNatural'
import { COLOR_BLACK, COLOR_PRIMARY } from '@res/color';
import configureStore from '@store/store';
import { loadRegisterActivity, sendOtp, updateStore } from '@actions/actions';


const store = configureStore();
export class RegisterActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: 'x',
            errortext: '',
            buttontext: 'Send OTP',
            animating: false,
            captchaText: ''
        };
        this.loadActivity();
    }

    loadActivity() {
        store.dispatch({ type: loadRegisterActivity.type });
        store.getState().promise.then((data) => {
            store.dispatch({
                type: updateStore.type,
                payload: JSON.stringify({ sessionId: data.sessionId })
            });
            this.csrfToken = data.csrfToken;
            this.sessionId = data.sessionId;
            this.setState({
                uri: data.captchaUri,
                errortext: data.error
            });
        });
    }
    setNumber = (number) => {
        this.setState({
            errortext: ''
        });
        this.number = number;
    }
    captchaText = (text) => {
        this.text = text;
    }
    sendOTP = () => {
        this.setState(
            { animating: true });
        if (this.number != undefined) {
            if (isNaturalNumber(parseInt(this.number)) && this.number.length == 10) {
                store.dispatch({
                    type: sendOtp.type,
                    payload: JSON.stringify({
                        number: this.number,
                        csrfToken: this.csrfToken,
                        sessionId: this.sessionId,
                        captchaText: this.text
                    })
                });

                store.getState().promise.then((data) => {
                    if (!data.otpSent) {
                        this.loadActivity();
                        this.setState({
                            animating: false,
                            errortext: data.error
                        });
                    }else{
                        this.props.navigation.navigate('VerifyActivity');
                    }
                })
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



    }
    render() {
        return (
            <ScrollView>
            <ImageBackground
                source={require('assets/img/vector.png')}
                style={{ width: Styles.toPxlWidth(100), height: Styles.toPxlHeight(100) }}>
                <KeyboardAvoidingView behavior="padding" style={Styles.center(1)}>
                    <Text style={[
                        Styles.setTextDesign(COLOR_BLACK, 'PrimaryBold'),
                        Styles.setMargin(0, 0, 0, 30),
                        {fontSize:28}]}>
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
                    <View  style={Styles.setMarginAll(10)}>
                        <Text style={
                            [Styles.setTextDesign(COLOR_BLACK, 'PrimaryBold'),Styles.setMargin(0,10,0,20)]}>
                                Security Check:</Text>
                        <Image style={{
                             width: Styles.toPxlWidth(70),
                             height: Styles.toPxlHeight(7),
                             resizeMode: 'contain'
                        }}
                            source={{
                                uri:
                                    this.state.uri
                            }}
                        />
                        <TextInput
                            style={[Styles.setInputDesign(),Styles.setMargin(0,20,0,0)]}
                            maxLength={5}
                            onChangeText={text => this.captchaText(text)}
                            underlineColorAndroid="transparent"
                            placeholder="Captcha Text"
                            autoCapitalize="none" />
                    </View>
                    <Button
                        margin={40}
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
            </ScrollView>
        );
    }
}