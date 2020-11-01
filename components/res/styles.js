import { StyleSheet, Dimensions } from 'react-native';
import * as Color from './color'

export function setMargin(LeftDp=0,TopDp=0,RightDp=0,BottomDp=0){
    const style = StyleSheet.create({
        margin: {
             marginLeft: LeftDp,
             marginBottom:BottomDp,
             marginTop:TopDp,
             marginRight:RightDp
    }});
    return style.margin;
}
export function setToBottom(){
    const style = StyleSheet.create({
        bottom: {
            position: 'absolute',                                          
            top: toPxlHeight(50),                                                    
    }});
    return style.bottom;
}
export function setInputDesign(){
    const style = StyleSheet.create({
        design: {
           color:Color.COLOR_BLACK,
           borderBottomWidth:1,
           borderBottomColor:Color.COLOR_SECONDARY,
           width:toPxlWidth(70),
           padding:5,
           paddingLeft:10,
           paddingRight:10

    }});
    return style.design;
}
export function setColor(color){
    const style = StyleSheet.create({
        color: {
           color:color
    }});
    return style.color;
}
export function setOpacity(opacity){
    const style = StyleSheet.create({
        opacity: {
            opacity:opacity
    }});
    return style.opacity;
}
export function setMarginAll(dp){
    const style = StyleSheet.create({
        margin: {
           margin:dp
    }});
    return style.margin;
}
export function setLogo(){
    const style = StyleSheet.create({
        logo: {  width: 44, height: 30
    }});
    return style.logo;
}
export function setAppnameDesign() {
    const style = StyleSheet.create({
    appName: {
        textAlign: 'center',
        fontSize: 30,
        color:Color.COLOR_SECONDARY,
        marginBottom: 80,
        fontFamily: 'Appfont'
    }});
    return style.appName;
}

export function setTextDesign(color = Color.COLOR_BLACK, font = 'Primary') {
    const style = StyleSheet.create({
        text:{
            color: color,
            fontFamily: font,
            fontSize: 14
    }});
    return style.text;
}
export function center(flex = null) {
    if (flex == null){
        const style = StyleSheet.create({
            text:{
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
        }});
    }
    const style = StyleSheet.create({
        text:{
            justifyContent: 'center',
            flex: flex,
            alignItems: 'center',
            textAlign: 'center',
    }});
    return style.text;
}

export function setButtonDesign(widthPercent) {
    const style = StyleSheet.create({
        button:{
            backgroundColor: Color.COLOR_PRIMARY,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: Color.COLOR_PRIMARY,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 1,
            elevation: 1,
            borderRadius: 10,
            padding: 15,
            width: toPxlWidth(widthPercent)
    }});
    return style.button;
}
export function toPxlWidth(percent) {
    return ((Dimensions.get('window').width) * percent) / 100;
}
export function toPxlHeight(percent) {
    return ((Dimensions.get('window').height) * percent) / 100;
}