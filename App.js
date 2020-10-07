import React from 'react';
import { Text,Button, View } from 'react-native';
import {Styles} from './src/styles/styles';
import * as Const from './src/const';
import * as Color from './src/styles/color'; 

function Card(props) {
  return(
  <View style={Styles.card}>
    <Text style={Styles.header}>{props.text}</Text>
    <Text style={Styles.text}>
      

    </Text>
    <Button 
      title={Const.KNOW_MORE}
      color={Color.PRIMARY}
      accessibilityLabel={Const.KNOW_MORE}></Button>
  </View>
  );
}
const Init = () => {
  return (
    <View style={Styles.cardView}>
      <Card text= {Const.SUBSCRIBE} />
      <Card />
    </View>
  );
}

export default Init;