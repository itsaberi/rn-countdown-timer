// timer.js
import React, { Component } from 'react';
import BackgroundTimer from 'react-native-background-timer';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

var intervalId;

export default class RNTimer extends Component {
	constructor() {
		// code
		super();
		this.state={
			remaining:0
		}
	}

	// methods
	componentWillMount() {
		this.setState({remaining:this.props.time})
		intervalId = BackgroundTimer.setInterval(() => {
			this.setState({remaining: this.state.remaining -1000})
			console.log(this.state.remaining)
			if (this.state.remaining <= 0) 
			{
				BackgroundTimer.clearInterval(intervalId);
			}
		}, 1000);
	}
	componentWillUnmount() {
		BackgroundTimer.clearInterval(intervalId);
	}
	render(){
		return(<Text>{this.state.remaining}</Text>)
	}
}