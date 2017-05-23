'use strict';
import React, { Component } from 'react';
import {View,Dimensions} from 'react-native';
var window = Dimensions.get('window');

class InViewPort extends Component{

  constructor(props) {
    super(props);
    this._myview = []
     this.lastValue = [];
    this.state = { showText: true,rectTop: 0,rectBottom: 0 };
  }

  componentDidMount() {
    if (this.props.active) {
      this.startWatching();
    }
  }

  componentWillUnmount() {
    this.stopWatching();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.active) {
      this.lastValue = [];
      this.startWatching();
    } else {
      this.stopWatching();
    }
  }

  startWatching() {
    if (this.interval) { return; }
    this.interval = setInterval(this.check.bind(this), this.props.delay);
  }

  stopWatching() {
    this.interval = clearInterval(this.interval);
  }


  check() {

      let rect = this._myview[this.props.visibleKey].measure((ox, oy, width, height, pageX, pageY) => {
        this.setState({
          rectBottom: pageY+height,
          rectTop: pageY 
        })
      });
     
      let isVisible = this.state.rectBottom > 0 || this.state.rectTop < window.height

      if (this.lastValue[this.props.visibleKey] !== isVisible) {
        this.lastValue[this.props.visibleKey] = isVisible;
        this.props.onChange(this.props.visibleKey,isVisible);
      }
      
  
  }

  render() {
    return (
      <View ref={(myview) => this._myview[this.props.visibleKey] = myview} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}

InViewPort.propTypes={
      onChange: React.PropTypes.func.isRequired,
      active: React.PropTypes.bool,
      delay: React.PropTypes.number
  }
InViewPort.defaultProps = {
      active: true,
      delay: 100
  }

module.exports = InViewPort;
