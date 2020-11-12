import React, { Component } from 'react';
import configureStore from '@store/store';
import * as Styles from '@res/styles';
import { blocks, bottomBorder } from '@res/listStyles';
import { COLOR_BLACK } from '@res/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu } from 'react-native-paper';
import { Text, View, TouchableHighlight, SectionList } from "react-native";
const store = configureStore();

export class UserActivity extends Component {
  constructor(props) {
    super(props);

  }
  onClick = (value, index) => {

    switch (index) {
      case 0:
        this.props.navigation.navigate('RegisterActivity');
        break;
      default:
        alert('Unkown Error Occured');


    }
  }

  render() {
    return (
      <>
      <View style={{ margin:15 }}>
        <Text style={Styles.setTextDesign('black','PrimaryBold')}>Update User</Text>
        <Menu.Item icon="phone" onPress={() => { }} title="Contact Number" />
        <Menu.Item icon="home" onPress={() => { }} title="Update Address" />
      </View>
      
      <View style={{ margin:15 }}>
        <Text style={Styles.setTextDesign('black','PrimaryBold')}>Orders</Text>
        <Menu.Item icon="food-variant" onPress={() => { }} title="Your One Time Purchage" />
        <Menu.Item icon="shopping" onPress={() => { }} title="Your Subscriptions" />
      </View>
      
      <View style={{ margin:15 }}>
        <Text style={Styles.setTextDesign('black','PrimaryBold')}>Options</Text>
        <Menu.Item icon="logout" onPress={() => { }} title="Logout" />
        <Menu.Item icon="home" onPress={() => { }} title="Credit" />
        <Menu.Item icon="help" onPress={() => { }} title="Help" />
        <Menu.Item icon="information" onPress={() => { }} title="About" />
      </View>
      </>
    )
  }
}