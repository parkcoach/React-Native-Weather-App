import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";

const {width, height} = Dimensions.get('window');

export default class Weather extends Component{
  render(){
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Ionicons color="white" size={120} name="ios-rainy"/>
          <Text style={styles.temperature}>35℃</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>비가 오고 있습니다</Text>
          <Text style={styles.subtitle}>창 밖을 보세요</Text>
        </View>
      </LinearGradient>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "transparent"
  },
  temperature: {
    fontSize: 48,
    backgroundColor: 'transparent',
    marginTop:10,
    color: 'white'
  },
  lower: {
    flex: 1,
    width: width,
    justifyContent: "flex-end",
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 35,
    color: 'white',
    backgroundColor: 'transparent',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white'
  }

});
