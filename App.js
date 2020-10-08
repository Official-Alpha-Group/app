import React from 'react';
import { Text, Button, View } from 'react-native';
import { Styles } from './src/styles/styles';
import * as Const from './src/const';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';


function Card(props) {
  return (
    <View style={Styles.card}>
      <View style={Styles.marginBot}>
        <Text style={Styles.header}>
          {props.header}
        </Text>
        <Text style={Styles.text}>
          {props.text}
        </Text>
      </View>
     
    </View>
  );

}

export default Init = () => {
  let [fontsLoaded] = useFonts({
    'KaushanScript-Regular': require('./assets/fonts/KaushanScript-Regular.ttf'),
    'MiriamLibre-Regular': require('./assets/fonts/MiriamLibre-Regular.ttf'),
    'MiriamLibre-Bold': require('./assets/fonts/MiriamLibre-Bold.ttf'),
  });
  if (fontsLoaded) {
    return (
      <View style={Styles.cardView}>
        <Text style={Styles.appName}>
          {Const.APP_NAME_LOWER}
        </Text>
        <Card
          header='Subscription Plans'
          text='have a nice day sir, thank you for using our product'
        />
        <Card
          header='One Time Purchase'
          text='asdfasdfs' />
      </View>
    );
  } else
    return <AppLoading />
}
