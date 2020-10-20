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
    onPress(id) {
        this.setState({
            id: id
        });
    };
    render() {
/*
                Subscribe Fragment
                =============================
*/  
        if (this.state.id === 0)
            return (
                <>
                    <View style={{ flexDirection: 'row' }}>
                        <CardView
                            text={`Homemade \nChocolate`}
                            source={require('assets/img/choco.png')} />
                        <CardView
                            text='Milk'
                            source={require('assets/img/milk.png')} />
                        <CardView
                            text={`Fruit\nJuice`}
                            source={require('assets/img/coconut.png')} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CardView
                            text={`Dry Fruits`}
                            source={require('assets/img/dry_fruits.png')}
                            onClick={() => { this.onPress(2) }} />
                        <CardView
                            text={`abc item`}
                            source={require('assets/img/coconut.png')} />
                    </View>
                    <View style={[Styles.setToBottom(), { flexDirection: 'row' }]}>
                        <Button
                            margin={30}
                            header='Add to Cart'
                            onClick={null}
                            animating={false}
                            width={80} />
                    </View>
                </>);
/*
                One Time Purchage Fragment
                =============================
*/   
        else if (this.state.id === 1)
            return (
                <>
                    <View style={{ flexDirection: 'row' }}>
                        <CardView
                            text={`Homemade \nChocolate`}
                            source={require('assets/img/choco.png')} />
                        <CardView
                            text={`Dry Fruits`}
                            source={require('assets/img/dry_fruits.png')}
                            onClick={() => { this.onPress(2) }} />
                    </View>
                    <View style={[Styles.setToBottom(), { flexDirection: 'row' }]}>
                            <Button
                                margin={30}
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
                onPress={() => { this.onPress(0) }}
                style={{ flexDirection: 'row' }}> 
                    <Text style={[Styles.setTextDesign(COLOR_PRIMARY), Styles.setMargin(0, 10)]}>
                        <Icon name="md-arrow-back" size={17} color={COLOR_PRIMARY} />  View all products
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                   
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
        }
    }
}