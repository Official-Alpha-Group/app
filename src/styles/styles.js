import {StyleSheet,Dimensions} from 'react-native';
import * as Color from './color' ;


export const Styles = StyleSheet.create({
    cardView:{
        backgroundColor: 'white',
        justifyContent: 'center', 
        flex:1,
        alignItems: 'center'
    },
    card:{
        backgroundColor :Color.BLACK,
        borderRadius : 5,
        padding:15,
        margin:5,
        width: toPxlWidth(90)
    },
    text :{
        color : 'white',
        fontSize : 12
    },
    header :{
        color : 'white',
        fontWeight:"bold",
        fontSize : 17
    }
});


function toPxlWidth(percent){
    return ((Dimensions.get('window').width)*percent)/100;
}
 function toPxlHeight(percent){
    return ((Dimensions.get('window').height)*percent)/100;
}