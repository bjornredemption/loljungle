import React, {Component} from 'react';
import { AppRegistry, StyleSheet, FlatList, Button, Text, TextInput, View } from 'react-native';
import MatchDetail from './MatchDetail.js';
var champions = require('../../fakedata/champion.json');

export default class recentmatches extends Component{
	constructor(props){
		super(props);
		this.state ={
			accountid : props.accountid,
			baseurl : props.baseurl,
			url : props.baseurl + '/lol/match/v3/matchlists/by-account/',
			champurl : props.baseurl + '/lol/static-data/v3/champions?locale=en_US&champListData=info&tags=image&tags=info&dataById=true',
			apikey : props.apikey,
			text : props.accountid,
			lanes : [],
			champions : [],
			rows : null,
			currentmatch : null

		};
	}
	componentWillMount(){
		url = this.state.champurl + '&api_key=' + this.state.apikey;
		
	 	fetch(url)
	    .then((response) => response.json())
    	.then((responseJson) => {
    		//this.setState({
    		//	champions : responseJson.data[1]
    		//});
    		//alert(JSON.stringify(responseJson.data[1]));

//    		return responseJson;
    	})
    	.catch((error) => {
      		console.error(error);
    	});

    	this.setState({
    		champions : champions
    	});

    	// recent matches

		url = this.state.url + this.state.text + '?api_key=' + this.state.apikey;



	 	fetch(url)
	    .then((response) => response.json())
    	.then((responseJson) => {
    		//let lanesBuffer = responseJson.matches.map((a) => `${a.lane} :: ${a.role} ` ).join(' ');
    	// /	alert(responseJson.matches.length);
			let lanesBuffer = responseJson.matches.map( (a) => a );
    		
  			this.setState({
    			lanes : lanesBuffer.slice(0,10)
    		});
    		//alert(JSON.stringify(this.state.lanes[0]));
    		return responseJson;
    	})
    	.catch((error) => {
      		console.error(error);
    	});

	}
	handlePress(id){
		this.setState({
			currentmatch : id
		});
	}
	getName(champid){
		return  this.state.champions.data[champid].name;
	}

	
	render(){
		//const  champions  = this.state.champions;
		return(
			<View style={styles.container}>
				{ this.state.currentmatch != null ? (
					<MatchDetail accountid={this.state.accountid} currentmatch={this.state.currentmatch} apikey={this.state.apikey} baseurl={this.state.baseurl} />
				) : (

					<View style={styles.container}>
						{this.state.lanes.map( (game) =>
				            	<Text onPress={() => { this.handlePress(game.gameId);} } style={styles.labelContainer} key={game.gameId}>{game.lane} :: {game.role} {'\n'}{this.getName(game.champion)} </Text>

				          )}
					</View>
				)}
			</View>
			);
	}
}

const styles = StyleSheet.create({

  input: {
  	padding: 10,
  	borderColor : 'grey',
  	borderWidth: 1,
  },
  container: {
  	margin:2
  },
  labelContainer:{
  	fontWeight: 'normal' ,
  	margin:2,
  	borderColor : '#aaaaaa',
  	borderWidth: 1,
  	padding:2
  },

});

AppRegistry.registerComponent('recentmatches', () => recentmatches);