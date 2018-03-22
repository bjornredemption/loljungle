import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default class matchdetail extends Component{
	constructor(props){
		super(props);
		this.state ={
			baseurl : props.baseurl,
			accountid: props.accountid,
			urltimelines : props.baseurl + '/lol/match/v3/timelines/by-match/',
			urlinfo : props.baseurl + '/lol/match/v3/matches/',			
			apikey : props.apikey,
			currentmatch : props.currentmatch,
			frames: null
		};
	}

	componentWillMount(){


    	// the match


    	url = this.state.urlinfo + this.state.currentmatch + '?api_key=' + this.state.apikey;
    	
	 	fetch(url)
	    .then((response) => response.json())
    	.then((responseJson) => {
		
    		return responseJson;
    	})
    	.catch((error) => {
      		console.error(error);
    	});

	}
	
	render(){
		return(
			<View>
				<Text>	{this.props.currentmatch}</Text>

			</View>
		);
			
	}
}


AppRegistry.registerComponent('matchdetail', () => matchdetail);