import { StyleSheet, Dimensions } from 'react-native';
import * as Color from './color'
export const  Styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    },
    input:{
        paddingTop:20,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:5,
        borderBottomWidth:1,
        borderBottomColor:Color.PRIMARY,
        width:toPxlWidth(80)
    },
    card: {
        backgroundColor:Color.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
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
        textAlign: 'center',
        color:'white',
        fontFamily:'MiriamLibre-Regular',
        fontSize: 14
    },
    textBold: {
        textAlign: 'center',
        color:'white',
        fontFamily:'MiriamLibre-Bold',
        fontSize: 14
    },
    header: {
        textAlign: 'center',
        color:'white',
        fontFamily:'MiriamLibre-Bold',
        fontSize: 16,
    },
    headerBlack: {
        textAlign: 'center',
        color:Color.BLACK,
        fontFamily:'MiriamLibre-Bold',
        fontSize: 16,
    },
    appName: {
        textAlign: 'center',
        fontSize: 35,
        marginBottom: 80,
        fontFamily: 'KaushanScript-Regular'
    },
    logo:{
        width: 44, height: 30 
    },
    colorPrimary:{ color:Color.PRIMARY },
    marginBot: { marginBottom:30 },
    marginTop:{ marginTop:30 },
    marginBot15:{marginBottom:15},
    opactiy:{ opacity:0.5 },
    colorRed:{color:'red'},
    colorBlack:{color : Color.BLACK},
    
});
 
 
export function toPxlWidth(percent) {
    return ((Dimensions.get('window').width) * percent) / 100;
}
export function toPxlHeight(percent) {
    return ((Dimensions.get('window').height) * percent) / 100;
}
