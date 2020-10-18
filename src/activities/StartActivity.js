import React, { Component } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import  {Styles,toPxlHeight,toPxlWidth}  from 'src/styles/styles';
import * as Const from 'src/model/const';
import { Button } from 'src/model/Button';

export class StartActivity extends Component {
  constructor(props) {
    super(props);
  }
  openSubscription = () => {
    this.props.navigation.navigate('SubscriptionActivity');

  }
  openOneTime = () => {
    this.props.navigation.navigate('OneTimeActivity');
  }
  openRegisterNow = () => {
    this.props.navigation.navigate('RegisterActivity');
  }
  render() {
    return (
      <ImageBackground 
      source={require('assets/img/vector.png')}
      style={{width:toPxlWidth(100),height:toPxlHeight(100)}}>
      <View style={Styles.center}>
 
          <Image
            source={require('assets/img/logo.png')}
            style={[Styles.logo, Styles.marginBot]} />
          <Text style={Styles.appName}>
            {Const.APP_NAME_LOWER}
          </Text>
          <Button
            header={Const.CARD_ONE_HEADER}
            onClick={this.openSubscription}
            animating={false}
            width={80}
          />
          <Button
            margin = {30}
            header='One Time Purchase'
            onClick={this.openOneTime}
            animating={false}
            width={80} />
          <Text style={[Styles.textBlack, Styles.marginTop, Styles.opactiy]}>
            OR
        </Text>
          <Text
            style={[Styles.textBold, Styles.colorPrimary, Styles.marginTop]}
            onPress={this.openRegisterNow}>
            {Const.REGISTER}
          </Text>
      </View>
      </ImageBackground>
    );
  }
}