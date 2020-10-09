import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import { Styles } from 'src/styles/styles';
import * as Const from 'src/const';
import { LinearGradient } from 'expo-linear-gradient';

// This is used to create Cards for StartActivity only
function Card(props) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <LinearGradient
        colors={['#1257d5', '#648fde']}
        style={Styles.card}  >
        <Text style={Styles.header}>
          {props.header}
        </Text>
        <Text style={Styles.text}>
          {props.text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export class StartActivity extends Component {
  openSubscription = () => {
    this.props.navigation.navigate('SubscriptionActivity');
  }
  openOneTime = () =>{
    this.props.navigation.navigate('OneTimeActivity');
  }
  openRegisterNow = () =>{
    this.props.navigation.navigate('RegisterActivity');
  }
  render() {
    return (
      <View style={Styles.startFragment}>
        <Image
          source={require('assets/img/logo.png')}
          style={[Styles.logo, Styles.marginBot]} />
        <Text style={Styles.appName}>
          {Const.APP_NAME_LOWER}
        </Text>
        <Card
          header={Const.CARD_ONE_HEADER}
          text='A monthly subscription plan for your day to day products.'
          onClick = {this.openSubscription}
        />
        <Card
          header='One Time Purchase'
          text='Buy excellent products like dry fruits and day to day product on the go.' />
        <Text style={Styles.textBlack, Styles.marginTop, Styles.opactiy}>
          OR
        </Text>
        <Text 
        style={[Styles.header, Styles.colorPrimary, Styles.marginTop]}
        onPress={this.openRegisterNow}>
          {Const.REGISTER}
        </Text>
      </View>
    );

  }
}