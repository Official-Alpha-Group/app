import { StyleSheet } from 'react-native';
import * as Color from '@res/color';
export function blocks(){
    const style = StyleSheet.create({
        margin: {
             padding:8,
             margin:5,
    }});
    return style.margin;
}
export function bottomBorder(){
    const style = StyleSheet.create({
        margin: {
            borderBottomWidth:1,
            borderBottomColor:Color.COLOR_BLACK,
            borderBottomColor:'white'    }});
    return style.margin;
}
