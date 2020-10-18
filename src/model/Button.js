import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';
import { Styles,toPxlWidth } from 'src/styles/styles';
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
          style={[Styles.button,
            {margin:this.props.margin}
          ,{width:toPxlWidth(this.props.width)}]}>
          <Text style={Styles.text}>
            {this.props.header}
          </Text>
        </TouchableOpacity>
      );
    }
  }
}