import React, { Component } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Styles, toPxlHeight, toPxlWidth } from 'src/styles/styles';
import { Button } from 'src/model/Button';

import { CardView } from 'src/model/CardView';
export class SubscriptionActivity extends Component {
    render() {
        return (
            <ImageBackground
                source={require('assets/img/vector.png')}
                style={{ width: toPxlWidth(100), height: toPxlHeight(100),marginTop:15 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('assets/img/sub_card.png')}
                        style={{ resizeMode: "stretch", width: toPxlWidth(95), height: toPxlHeight(22) }} />
                </View>
                <View style={{ padding: 25 }}>
                    <Text style={[Styles.textBold, Styles.colorBlack]}>
                        Choose products
                    </Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CardView
                            text='Milk' />
                        <CardView
                            text='Milk' />

                        <CardView
                            text='Milk' />
                    </View>
                </View>
                <Button
            margin = {30}
            header='Order Now'
            onClick={null}
            animating={false}
            width={80} />
            </ImageBackground>
        );
    }
}

//<a href="https://www.vecteezy.com/free-vector/online-shopping">Online Shopping Vectors by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-vector/food-delivery">Food Delivery Vectors by Vecteezy</a>
// Lia Aramburu https://github.com/remoteintech/remote-jobs