import { CardView } from '@utils/CustomView';
import React, { Component } from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import { Button } from '@utils/CustomView';
import * as Styles from '@res/styles';
import { COLOR_PRIMARY } from '../res/color';

import Icon from 'react-native-vector-icons/Ionicons';

export class ProductFragment extends Component {
    
    constructor(props) {
        super(props);
        this.state = { id: this.props.id };
    }
    onPress(id,returnBack) {
        this.setState({
            id: id,
            returnBack:returnBack
        });
    };
    render() {
/*
                Subscribe Fragment
                =============================
*/  
        if (this.state.id === 0 || this.state.id === 1) 
            return (
                <>
                    <View style={{ flexDirection: 'row' }}>
                        <CardView
                            text={`Homemade \nChocolate`}
                            source={require('assets/img/choco.png')} />
                        <CardView
                            text='Milk'
                            source={require('assets/img/milk.png')} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CardView
                            text={`Dry Fruits`}
                            source={require('assets/img/dry_fruits.png')}
                            onClick={() => { this.onPress(2,0) }} />
                        <CardView
                            text={`Juice`}
                            source={require('assets/img/coconut.png')} />
                    </View>
                    <View style={[Styles.setToBottom(),Styles.setMargin(30,25,30,25), { flexDirection: 'row' }]}>
                        <Button

                            header='Add to Cart'
                            onClick={null}
                            animating={false}
                            width={80} />
                    </View>
                </>);
/*
                Dry Fruits Fragment
                =============================
*/                
        else if (this.state.id === 2) {

            return (<>
                <TouchableOpacity 
                onPress={() => { this.onPress(this.state.returnBack,this.state.returnBack) }}
                style={{ flexDirection: 'row' }}> 
                    <Text style={[Styles.setTextDesign(COLOR_PRIMARY), Styles.setMargin(0, 10,0,10)]}>
                        <Icon name="md-arrow-back" size={17} color={COLOR_PRIMARY} />  View all products
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.setTextDesign()}>
                        Products:
                    </Text>
                </View>
                <View style={[Styles.setToBottom(), { flexDirection: 'row' }]}>
                    <Button
                        margin={15}
                        header='Add to Cart'
                        onClick={null}
                        animating={false}
                        width={40} />
                    <Button
                        margin={15}
                        header='Order Now'
                        onClick={null}
                        animating={false}
                        width={40} />
                </View>
            </>);
        }else if (this.state.id === 3) {
            
        }
    }
}