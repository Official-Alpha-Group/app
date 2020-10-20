import React, { Component } from 'react';
import { Text, View, TextInput, ImageBackground } from 'react-native';
import * as Styles from '@res/styles';
import { REGISTER } from '@res/string';
import { Button } from '@utils/CustomView';
import { isNaturalNumber } from '@utils/isNatural'

export class RegisterActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errortext: '',
            animating: false,
        };
    }
    setNumber = (number) => {
        this.setState({
            errortext: ''
        });
        this.number = number;
    }
    sendOTP = () => {
        this.setState(
            { animating: true });
        if (this.number != undefined) {
            if (isNaturalNumber(parseInt(this.number)) && this.number.length == 10) {
                fetch('http://192.168.29.237/Nacl-Dev-Program/main/test/' + this.number)
                    .then((response) => response.json())
                    .then((json) => {
                        this.setState(
                            { animating: false });
                        json.otp;
                    })
                    .catch((error) => {
                        this.setState({
                            errortext: error
                        })
                    })
            } else
                this.setState({
                    animating: false,
                    errortext: 'Invalid mobile number'
                }
                );
        } else
            this.setState({
                animating: false,
                errortext: 'Enter your mobile number to continue'
            }
            );

    }
    render() {
        return (
            <ImageBackground
                source={require('assets/img/vector.png')}
                style={{ width: Styles.toPxlWidth(100), height: Styles.toPxlHeight(100) }}>
                <View style={Styles.center(1)}>
                    <Text style={[
                        Styles.headerBlack,
                        Styles.setMargin(0, 0, 0, 30)]}>
                        {REGISTER}
                    </Text>

                    <Text style={[
                        Styles.setMargin(0, 0, 0, 30),
                        Styles.setTextDesign()]}>
                        To Login/Create enter your {'\n'} 10 digit mobile number.
                    </Text>

                    <TextInput
                        style={[Styles.setMargin(0, 0, 0, 15)]}
                        keyboardType='numeric'
                        maxLength={10}
                        onChangeText={number => this.setNumber(number)}
                        underlineColorAndroid="transparent"
                        placeholder="Mobile Number"
                        autoCapitalize="none" />
                    <Button
                        margin={30}
                        width={80}
                        header='Send OTP'
                        onClick={this.sendOTP}
                        animating={this.state.animating}
                    />
                    <Text style={[
                        Styles.setTextDesign('red'),
                        Styles.setMargin(0, 0, 0, 15)]}>
                        {this.state.errortext}
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}