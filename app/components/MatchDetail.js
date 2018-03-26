import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Image, Button, Text, TextInput, View } from 'react-native';

export default class matchdetail extends Component{
	constructor(props){
		super(props);
		this.state ={
			baseurl : props.baseurl,
			accountid: props.accountid,
			participantId : null,
			urltimelines : props.baseurl + '/lol/match/v3/timelines/by-match/',
			urlinfo : props.baseurl + '/lol/match/v3/matches/',			
			apikey : props.apikey,
			currentmatch : props.currentmatch,
			players : [],
			frames: null
		};
	}

	componentWillMount(){


    	// the match
    	let acc = this.state.accountid;
    	let pi = this.state.participantId;

    	let url = this.state.urlinfo + this.state.currentmatch + '?api_key=' + this.state.apikey;
    	
	 	fetch(url)
	    .then((response) => response.json())
    	.then((responseJson) => {

    		this.processRequest(responseJson, acc);
    		//return responseJson;

    	})
    	.catch((error) => {
      		console.error(error);
    	});



    	url = this.state.urltimelines + this.state.currentmatch + '?api_key=' + this.state.apikey;
    	
	 	fetch(url)
	    .then((response) => response.json())
    	.then((responseJson) => {
    		//if (pi){
    			this.processFrames(responseJson);
    		//}
    		

    	})
    	.catch((error) => {
      		console.error(error);
    	});






	}

	processFrames(responseJson){
		let framesBuffer = '';
		let pid = this.state.participantId;
			for (var i=0; i<20; i++) {
			  	
			  //	framesBuffer += (responseJson.frames[i].timestamp/1000) + 's ' + responseJson.frames[i].participantFrames[pid].jungleMinionsKilled +  '\n';
			 	framesBuffer += '[' + responseJson.frames[i].participantFrames[pid].position.x + ', ' + responseJson.frames[i].participantFrames[pid].position.y +'], ';
			   
			}
		this.setState({
			frames:  framesBuffer
		});
		//http://jsfiddle.net/ow4tsbne/271/
				
			
	}

	processRequest(responseJson,acc){
		let participantBuffer;
			for (var player of responseJson.participantIdentities) {
			  if (player.player.currentAccountId == acc){
			  	participantBuffer = player.participantId;
			  }
			}
		this.setState({
			participantId:  participantBuffer
		});

				
			
	}
	
	render(){
		return(
			<View>
				<Text> Match id :	{this.props.currentmatch}</Text>
				<Text> id : {this.state.participantId} </Text>
				<Text> CS : {this.state.frames} </Text>
				<Image
				style={{width: 350, height: 350}}
          source={{uri: 'https://s3-us-west-1.amazonaws.com/riot-developer-portal/docs/map11.png'}}
        />
		</View>
		);
			
	}
}


AppRegistry.registerComponent('matchdetail', () => matchdetail);