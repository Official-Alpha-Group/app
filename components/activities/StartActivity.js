import React, { Component } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import * as Styles from '@res/styles';
import * as Const from '@res/string';
import { Button } from '@utils/CustomView';
import {COLOR_PRIMARY} from '@res/color';

export class StartActivity extends Component {
  openRegisterNow = () => {
    this.props.navigation.navigate('RegisterActivity');
  }
  render() {
    return (
      <ImageBackground
        source={require('assets/img/vector.png')}
        style={{ width: Styles.toPxlWidth(100), height: Styles.toPxlHeight(100) }}>
        <View style={Styles.center(1)}>
          <Image
            source={require('assets/img/logo.png')}
            style={[Styles.setLogo(), Styles.setMargin(0,0,0,30)]} />
          <Text style={Styles.setAppnameDesign()}>
            {Const.APP_NAME_LOWER}
          </Text>
          <Button
            header={Const.CARD_ONE_HEADER}
            onClick={() => {this.props.navigation.navigate('ProductActivity',{id:0})}}
            animating={false}
            width={80}
          />
          <Button
            margin={30}
            header='One Time Purchase'
            onClick={() => {this.props.navigation.navigate('ProductActivity',{id:1})}}
            animating={false}
            width={80} />
          <Text style={
            [Styles.setTextDesign(),
            Styles.setMargin(0,30,0,0),
            Styles.setOpacity(0.5)]}>
            OR
          </Text>
          <Text
            style={
              [Styles.setTextDesign(COLOR_PRIMARY,'PrimaryBold'),
              Styles.setMargin(0,30,0,0)]}
            onPress={this.openRegisterNow}>
                {Const.REGISTER}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}