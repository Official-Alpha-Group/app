import React, { Component } from 'react';
import { Text, View, Image, TextInput, ImageBackground, KeyboardAvoidingView,FlatList } from 'react-native';
import * as Styles from '@res/styles';
import { REGISTER } from '@res/string';
import { Button } from '@utils/CustomView';
import { isNaturalNumber } from '@utils/isNatural'
import { COLOR_BLACK, COLOR_PRIMARY } from '@res/color';

export class RegisterActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errortext: '',
            buttontext: 'Send OTP',
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
        try {
            this.setState(
                { animating: true });
            if (this.number != undefined) {
                if (isNaturalNumber(parseInt(this.number)) && this.number.length == 10) {
                    return fetch('http://192.168.29.107/xyz.php')
                        .then((response) => response.json())
                        .then((json) => {
                            this.setState(
                                {
                                    animating: false,
                                    buttontext: 'Verify OTP'
                                });
                            return json.ping;
                        })
                        .catch((error) => {
                            console.error(error);
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
                    <View style={{ flexDirection: 'row',margin:20}}>
                    <Image
                        style={{
                            width: Styles.toPxlWidth(35),
                            height: Styles.toPxlHeight(5),
                            resizeMode: 'contain'
                        }}
                        source={{
                            uri:
                                'data:image/jpeg;base64,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'
                        }}
                    />
                    <TextInput
                        style={{marginLeft:25,borderBottomColor:COLOR_PRIMARY,borderBottomWidth:2}}
                        maxLength={5}
                        underlineColorAndroid="transparent"
                        placeholder="Captcha"
                        autoCapitalize="none" />
                    </View>
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
}