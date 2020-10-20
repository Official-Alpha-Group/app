import React from 'react';
import { View, Text, Image, ActivityIndicator,TouchableOpacity } from 'react-native';
import * as Styles from '@res/styles';
import {COLOR_WHITE} from '@res/color';

export function Button(props) {
    if (props.animating) {
        return (
            <TouchableOpacity
                style={Styles.setButtonDesign(props.width)}>
                <ActivityIndicator
                    color='#fff'
                    size="medium" />
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={props.onClick}
                style={[Styles.setButtonDesign(props.width),Styles.setMarginAll(props.margin)]}>
                <Text style={Styles.setTextDesign(COLOR_WHITE)}>
                    {props.header}
                </Text>
            </TouchableOpacity>
        );
    }
}


export function CardView(props) {
    return (
        <TouchableOpacity onPress={props.onClick} style={Styles.center()}>
            <Image source={props.source}
                style={[{ resizeMode: "center", width: Styles.toPxlWidth(10), height: Styles.toPxlHeight(7)},Styles.setMargin(35,10,30,5)]} />
            <Text style={[
                Styles.center(),Styles.setTextDesign(),Styles.setMargin(5)]}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}