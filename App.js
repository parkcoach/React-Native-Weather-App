import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Dimensions, StatusBar} from 'react-native';
import Weather from "./Weather"
const {width,height} = Dimensions.get('window');

export default class App extends Component {
  state = {
    isLoaded: true
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? <Weather/> : (
          <View style={styles.loading}>
            <View style={styles.upper}><ActivityIndicator size={65} style={styles.loadingAcivity}/>
<Text style={styles.loadingText}>날씨 정보를 불러오는 중...</Text></View>
          </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    width:width,
  },
  loadingAcivity:{
    paddingTop: 10
  },
  loadingText:{
    fontSize:30,
    marginTop: 10
  },
  upper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
