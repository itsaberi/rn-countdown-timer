// timer.js
import React, { Component } from 'react';
import BackgroundTimer from 'react-native-background-timer';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

var prettyMs = require('pretty-ms');

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
		return(<View style={styles.container}>
		<View style={styles.timeContainer}>
			<Text>{prettyMs(this.state.remaining,{verbose: true})}</Text>
		</View>
		</View>)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
})