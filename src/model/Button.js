import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';
import { Styles } from 'src/styles/styles';
// This is used to create Buttons
export class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.animating) {
      return (
        <TouchableOpacity
          style={Styles.card}>
          <ActivityIndicator
            color='#fff'
            size="medium" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={this.props.onClick}
          style={Styles.card}>
          <Text style={Styles.text}>
            {this.props.header}
          </Text>
        </TouchableOpacity>
      );
    }
  }
}