import { createStackNavigator } from '@react-navigation/stack';
import { StartActivity } from './components/activities/StartActivity';
import { ProductActivity } from './components/activities/ProductActivity';
import { RegisterActivity} from './components/activities/RegisterActivity';
import { VerifyActivity} from './components/activities/VerifyActivity';
import { UserActivity} from './components/activities/UserActivity';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import {TouchableOpacity} from 'react-native';


const Stack = createStackNavigator();
export default Init = () => {
  let [_FontsLoaded] = useFonts({
    'Appfont': require('@assets/fonts/youre_gone.ttf'),
    'Primary': require('@assets/fonts/MiriamLibre-Regular.ttf'),
    'PrimaryBold': require('@assets/fonts/MiriamLibre-Bold.ttf'),
  });
  if (_FontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="UserActivity" component={UserActivity} options={{ headerTransparent: false,title:'Settings'}} />
          <Stack.Screen name="StartActivity" component={StartActivity} options={{ 
              //headerLeft: ()=> <Icon name="md-home" size={25}/> ,
            title:'Home' }} />
          <Stack.Screen name="ProductActivity" component={ProductActivity} options={({ navigation, route })=> ({ 
                title:'', headerRight: ()=> 
                <TouchableOpacity onPress={()=>{navigation.navigate('UserActivity')}}> 
                  <Icon name="ios-contact" size={25}  /> 
                </TouchableOpacity>,
                headerRightContainerStyle:{marginRight:15}})} />
          <Stack.Screen name="RegisterActivity" component={RegisterActivity} options={{ headerTransparent: true,title:''}} />
          <Stack.Screen name="VerifyActivity" component={VerifyActivity} options={{ headerTransparent: true,title:''}} />
          
        </Stack.Navigator>
      </NavigationContainer> 
    )
  } else
    return <AppLoading />
}

