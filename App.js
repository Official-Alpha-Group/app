import { createStackNavigator } from '@react-navigation/stack';
import { StartActivity } from './src/activities/StartActivity';
import { SubscriptionActivity } from './src/activities/SubscriptionActivity';
import { RegisterActivity} from './src/activities/RegisterActivity';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import * as Const from './src/model/const';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';


const Stack = createStackNavigator();
export default Init = () => {
  let [_FontsLoaded] = useFonts({
    'KaushanScript-Regular': require('assets/fonts/KaushanScript-Regular.ttf'),
    'MiriamLibre-Regular': require('assets/fonts/MiriamLibre-Regular.ttf'),
    'MiriamLibre-Bold': require('assets/fonts/MiriamLibre-Bold.ttf'),
  });
  if (_FontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="StartActivity" component={StartActivity} options={{ title:'Home' }} />
          <Stack.Screen name="SubscriptionActivity" component={SubscriptionActivity} options={{ title: Const.CARD_ONE_HEADER }} />
          <Stack.Screen name="RegisterActivity" component={RegisterActivity} options={{ title:''}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else
    return <AppLoading />
}

