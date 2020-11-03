import React, { Component } from 'react';
import configureStore from '@store/store';
import * as Styles from '@res/styles';
import {blocks} from '@res/listStyles';
import {COLOR_BLACK} from '@res/color';
import Icon from 'react-native-vector-icons/FontAwesome';

const store = configureStore();
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList
} from "react-native";
export class UserActivity extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <View>
        <SectionList 
          sections={[
            {
            title: 'User',
            icon:'user',
              data: [
                'Contact Number',
                'Update Address',
              ],
            },
            {
              title: 'Orders',
              icon:'shopping-cart',
              data: [
                'Your Subscriptions',
                'Your One Time Purchage'
              ],
            },
            {
              title: 'Options',
              icon:'list',
              data: [
                'Logout',
                'Credit',
                'Help',
                'About'
              ],
            },
          ]}
          renderItem={({item}) => 
            <Text style={[blocks(),Styles.setTextDesign(COLOR_BLACK)]}>
              {item}
            </Text>
          }
          renderSectionHeader={({section}) => (
            <Text style={[blocks(),Styles.setTextDesign(COLOR_BLACK,'PrimaryBold')]}><Icon name={section.icon} size={14}/>  {section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
        )
    }
}