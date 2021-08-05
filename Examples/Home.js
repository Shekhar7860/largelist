/*
 *
 * Created by Stone
 * https://github.com/bolan9999
 * Email: shanshang130@gmail.com
 * Date: 2019/2/25
 *
 */

import React from "react";
import { StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import { SpringScrollView } from "react-native-spring-scrollview";

export class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName : '',
      lastName : '',
      age : '',
      location : ''
    }
  }
  static navigationOptions = {
    title: "Home"
  };

  submit = () => {
  this.props.navigation.navigate('StickyFormExample', {data : this.state})
  }

  render() {
    const examples = ["LargeListExamples", "WaterfallListExamples", "StickyFormExample"];
    return (
      <SpringScrollView>
        {examples.map((str, index) =>
          <TouchableOpacity key={index} style={styles.button} onPress={() => this.props.navigation.navigate(str)}>
            <Text style={styles.text}>
              {str}
            </Text>
          </TouchableOpacity>
        )}
        <TextInput placeholder="Enter First Name" style={styles.textInput} placeholderTextColor="black" onChangeText={(text) => this.setState({firstName : text})}/>
         <TextInput placeholder="Enter Last Name" style={styles.textInput} placeholderTextColor="black" onChangeText={(text) => this.setState({lastName : text})}/>
        <TextInput placeholder="Enter Age" style={styles.textInput} placeholderTextColor="black" onChangeText={(text) => this.setState({age : text})}/>
        <TextInput placeholder="Enter Location" style={styles.textInput} placeholderTextColor="black" onChangeText={(text) => this.setState({location : text})}/>
        <TouchableOpacity style={styles.button2} onPress={this.submit}>
        <Text style={styles.textColor}>Submit</Text>
        </TouchableOpacity> 
      </SpringScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button2 :{
    width : '80%', backgroundColor : 'pink', alignSelf : 'center', marginTop : 30, height : 50, alignItems : 'center', justifyContent : 'center'
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "center"
  },
  button: { alignItems: "center" },
  textInput : {
    width : '80%', backgroundColor : 'white', alignSelf : 'center', marginTop : 10
  }
});
