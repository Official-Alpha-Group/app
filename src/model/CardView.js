import React from 'react';
import { View, Text, Image } from 'react-native';
import { Styles, toPxlHeight, toPxlWidth } from 'src/styles/styles';
import { Button } from 'src/model/Button';

export function CardView(props) {
    let image_source = require('assets/img/milk.png');
    return (
        <View>
            <Image source={image_source}
                style={{ resizeMode:"stretch",width: toPxlWidth(8), height: toPxlHeight(7),margin:5 }} />
            <Text style={[
                Styles.textSmall]}>
                {props.text}
            </Text>
            
        </View>
    );
}