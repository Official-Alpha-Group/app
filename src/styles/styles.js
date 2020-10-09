import { StyleSheet, Dimensions } from 'react-native';
import * as Color from './color'
export const  Styles = StyleSheet.create({
    startFragment: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 1,
        borderRadius: 5,
        padding: 15,
        margin: 5,
        marginBottom: 20,
        width: toPxlWidth(80)
    },
    text: {
        color:'white',
        fontFamily:'MiriamLibre-Regular',
        fontSize: 12
    },
    textBlack: {
        color:Color.BLACK,
        fontFamily:'MiriamLibre-Regular',
        fontSize: 12
    },
    header: {
        color:'white',
        fontFamily:'MiriamLibre-Bold',
        fontSize: 13,
        marginBottom: 20
    },
    headerBlack: {
        color:Color.BLACK,
        fontFamily:'MiriamLibre-Bold',
        fontSize: 13,
        marginBottom: 20
    },
    appName: {
        fontSize: 30,
        marginBottom: 80,
        fontFamily: 'KaushanScript-Regular'
    },
    marginBot: {
        marginBottom:28
    },
    marginTop:{
        marginTop:28
    },
    opactiy:{
        opacity:0.5
    },
    logo:{
         width: 44, height: 30 
    },
    colorPrimary:{
        color:Color.PRIMARY
    }
});
 
 
function toPxlWidth(percent) {
    return ((Dimensions.get('window').width) * percent) / 100;
}
function toPxlHeight(percent) {
    return ((Dimensions.get('window').height) * percent) / 100;
}
