import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Dimensions, StatusBar} from 'react-native';
import Weather from "./Weather"
const {width,height} = Dimensions.get('window');

export default class App extends Component {
  state = {
    isLoaded: false
    error:null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          isLoaded: true
        });
      },
      error => {
        this.setState({
          error:error
        });
      }
    );
  }
  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? <Weather/> : (
          <View style={styles.loading}>
            <View style={styles.upper}>
              <ActivityIndicator size={65} style={styles.loadingAcivity}/>
              <Text style={styles.loadingText}>날씨 정보를 불러오는 중...</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
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
  errorText:{
    color:"red",
    backgroundColor:"transparent",
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
