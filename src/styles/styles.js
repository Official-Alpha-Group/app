import { StyleSheet, Dimensions } from 'react-native';
import * as Color from './color'
export const  Styles = StyleSheet.create({
    cardView: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    card: {
        backgroundColor:Color.PRIMARY,
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
    header: {
        color:'white',
        fontFamily:'MiriamLibre-Bold',
        fontSize: 13,
        marginBottom: 20
    },
    appName: {
        fontSize: 30,
        marginBottom: 100,
        fontFamily: 'KaushanScript-Regular'
    },
    marginBot: {
        marginBottom: 30
    }
});
 
 
function toPxlWidth(percent) {
    return ((Dimensions.get('window').width) * percent) / 100;
}
function toPxlHeight(percent) {
    return ((Dimensions.get('window').height) * percent) / 100;
}
