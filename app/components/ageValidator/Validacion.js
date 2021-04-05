import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

class Validacion extends Component{
    constructor(props){
        super(props);
        this.state = {
            textValue: '',
        };
    }

    changeTextInput = text => {
        if(text>=18){
            this.setState({textValue: 'Es mayor de edad'});
        } else {
            this.setState({textValue: 'Es menor de edad'});
        }
    };

    render(){
        return(
            <View>
                <TextInput
                style={{marginTop:10, height:40, borderColor: 'green', borderWidth: 1}}
                keyboardType = 'numeric'
                onChangeText={text => this.changeTextInput(text)}
                />
                <Text>{this.state.textValue}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    text:{
      alignItems: 'center',
      padding: 10,
    },
  });