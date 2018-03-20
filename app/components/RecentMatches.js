import React, {Component} from 'react';
import { AppRegistry, Button, Text, TextInput, View } from 'react-native';

export default class recentmatches extends Component{
	constructor(props){
		super(props);
		this.state ={
			url : props.baseurl + '/lol/match/v3/matchlists/by-account/',
			apikey : props.apikey,
			text : props.accountId,
			lanes : 'null',
			rows : null

		};
	}
	componentWillMount(){
		url = this.state.url + this.state.text + '?api_key=' + this.state.apikey;


	 	fetch(url)
	    .then((response) => response.json())
    	.then((responseJson) => {
    		let lanesBuffer = responseJson.matches.map((a) => `${a.lane} :: ${a.role} ` ).join(' ');
    		
    		this.setState({
    			lanes : lanesBuffer
    		});
    		alert(this.state.lanes.length);
    		return responseJson;
    	})
    	.catch((error) => {
      		console.error(error);
    	});

	}

	
	render(){
		//const { lanes, value } = this.state
		return(
			<View>
				<Text>Fetching </Text>
				<Text>{this.state.lanes}</Text>
			</View>
			);
	}
}

AppRegistry.registerComponent('recentmatches', () => recentmatches);