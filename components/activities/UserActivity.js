import React, { Component } from 'react';
import configureStore from '@store/store';
import * as Styles from '@res/styles';
import {blocks,bottomBorder} from '@res/listStyles';
import {COLOR_BLACK} from '@res/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text,  View,  TouchableHighlight,SectionList} from "react-native";
const store = configureStore();

export class UserActivity extends Component {
    constructor(props) {
        super(props);
       
    }
    onClick= (value,index) =>{
      switch(index){
        case 0:
          this.props.navigation.navigate('RegisterActivity');
          break;
        default:
          alert('Unkown Error Occured');


      }
    }

    render() {
        return (
            <View>
        <SectionList 
          sections={[
            {
              mobileNumber:'9981710273',
            title: 'User',
            icon:'user',
              data: [
                {index:0,value:'Update Contact Number',},
                {index:1,value: 'Update Address'},
              ],
            },
            {
              title: 'Orders',
              icon:'shopping-cart',
              data: [
                {index:2,value: 'Your One Time Purchage'},
                {index:3,value: 'Your Subscriptions'}
              ],
            },
            {
              title: 'Options',
              icon:'list',
              data: [
                {index:4,value:'Logout'},
                {index:5,value:'Credit'},
                {index:6,value: 'Help'},
                {index:7,value: 'About'},               
                
              ],
            },
          ]}
          renderItem={({item,section}) => 
          <TouchableHighlight
          onPress={() => this.onClick(item.value,item.index)}>
            <Text style={[blocks(),bottomBorder(),Styles.setTextDesign(COLOR_BLACK)]}>
              {item.value}
              
            </Text>
          </TouchableHighlight>
          }
          renderSectionHeader={({section}) => (<>
            <Text style={[blocks(),Styles.setTextDesign(COLOR_BLACK,'PrimaryBold')]}><Icon name={section.icon} size={14}/>  {section.title} <Text style={{textAlign: 'right'}}>{section.mobileNumber}</Text></Text></>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
        )
    }
}