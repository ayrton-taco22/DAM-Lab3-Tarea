import React,{Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Validacion from './app/components/ageValidator/Validacion';
import MyList from './app/components/myList/MyList';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      textValue: '',
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <Validacion/>
        <MyList/>
      </View>
    );
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

