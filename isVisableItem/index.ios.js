/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, ScrollView
} from 'react-native';
import InViewPort from './InViewPort'
export default class isVisableItem extends Component {
  constructor(props) {
    super()
  
  }

  checkVisible(visibleKey,isVisible) {
      if(isVisible){
  
        console.log(visibleKey +' is ' +isVisible)
      }
  }

  render() {


    return (
      <ScrollView style={{ flex: 1 }}>
        <InViewPort visibleKey = {1} onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'blue' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>1</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey = {2}  onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'green' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>2</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey = {3} onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'red' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>3</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey={4}  onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'orange' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>4</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey = {5} onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500 }}>
            <Text>View is visible?</Text>
            <Text style={{fontSize:30}}>5</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey = {6}  onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'green' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>6</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey = {7} onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'red' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>7</Text>
          </View>
        </InViewPort>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('isVisableItem', () => isVisableItem);
