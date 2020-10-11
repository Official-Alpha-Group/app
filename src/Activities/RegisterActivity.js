import React, { Component } from 'react';
import { Text, View, TextInput,ImageBackground } from 'react-native';
import { Styles, toPxlHeight,toPxlWidth} from 'src/styles/styles';
import { REGISTER } from 'src/model/const';
import { Button } from 'src/model/Button';
import { isNaturalNumber } from 'src/model/isNatural'

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
                this.setState(
                    {
                        animating: false,
                        errortext: 'Invalid mobile number'
                    }
                );
        } else
            this.setState(
                {
                    animating: false,
                    errortext: 'Enter your mobile number to continue'
                }
            );

    }
    render() {
        return (
            <ImageBackground
                source={require('assets/img/vector.png')}
                style={{ width: toPxlWidth(100), height: toPxlHeight(100) }}>
                <View style={Styles.center}>
                    <Text style={[
                        Styles.headerBlack,
                        Styles.marginBot]}>
                        {REGISTER}
                    </Text>

                    <Text style={[
                        Styles.marginBot,
                        Styles.text,
                        Styles.colorBlack]}>
                        To Login/Create enter your {'\n'} 10 digit mobile number.
                </Text>

                    <TextInput
                        style={[Styles.marginBot15, Styles.input]}
                        keyboardType='numeric'
                        maxLength={10}
                        onChangeText={number => this.setNumber(number)}
                        underlineColorAndroid="transparent"
                        placeholder="Mobile Number"
                        autoCapitalize="none" />
                    <Button
                        header='Send OTP'
                        onClick={this.sendOTP}
                        animating={this.state.animating}
                    />
                    <Text style={[
                        Styles.text,
                        Styles.colorRed,
                        Styles.marginBot15,]}>
                        {this.state.errortext}
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}