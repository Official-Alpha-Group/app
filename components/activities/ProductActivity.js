import React, { Component } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import * as Styles from '@res/styles';

import { COLOR_BLACK } from '@res/color';
import { ProductFragment } from '../fragment/ProductFragment';
export class ProductActivity extends Component {
    render() {
        return (
            <ImageBackground
                source={require('assets/img/vector.png')}
                style={{ width: Styles.toPxlWidth(100), height: Styles.toPxlHeight(100), marginTop: 15 }}>
                <View style={Styles.center()}>
                    <Image source={require('assets/img/sub_card.png')}
                        style={{ resizeMode: "stretch", width: Styles.toPxlWidth(95), height: Styles.toPxlHeight(22) }} />
                </View>
                <View style={{ padding: 25 }}>
                    <Text style={[Styles.setTextDesign(COLOR_BLACK, 'PrimaryBold'), Styles.center()]}>
                        Choose products
                    </Text>
                    <ProductFragment
                        id={this.props.route.params.id}
                    />
                </View>
            </ImageBackground>
        );
    }
}


//<a href="https://www.vecteezy.com/free-vector/online-shopping">Online Shopping Vectors by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-vector/food-delivery">Food Delivery Vectors by Vecteezy</a>
// Lia Aramburu 
//Amonrat <a href="https://www.vecteezy.com/free-vector/icons">Icons Vectors by Vecteezy</a>
// happymeluv <a href="https://www.vecteezy.com/free-vector/chocolate">Chocolate Vectors by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-vector/coming-soon">Coming Soon Vectors by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-vector/argan">Argan Vectors by Vecteezy</a>