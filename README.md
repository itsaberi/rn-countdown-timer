# rn-countdown-timer

## Synopsis

Note : This module is under experimentation.

React native Timer component to display a countdown timer 

## Code Example

```javascript
export default YourAppClass extends React.Component{
	render(){
		<RNTimer time="800000" /> //time value in milliseconds
	}
}
```

## Motivation

I am a front end developer working on various react native projects. This module was used many times by me on various Elearning apps (for eg. The quiz module where we require the coundown timer). So i thought why not keep the basic RN component ready in NPM from where i can reuse and customize it the way i need.

## Installation

install using the following commands:

```npm i -S rn-countdown-timer```

```react-native link react-native-background-timer```

## for IOS

Open the project in XCode and enable the Background working capability of the app. In that, you will find the Background fetch option. Check it and restart the app.

import the module into your app file

```var RNTimer = require('rn-countdown-timer'); //es5```

```import RNTimer from "rn-countdown-timer"; //es6```

## License

MIT