import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Button, Text, TextInput, View } from 'react-native';
import RecentMatches from './RecentMatches.js';

export default class summoner extends Component{
	constructor(props){
		super(props);
		this.state ={
			baseurl : props.baseurl,
			url : props.baseurl + '/lol/summoner/v3/summoners/by-name/',
			apikey : props.apikey,
			text : 'bj0rnred3mpti0n',
			accountId : null

		};
	}


	_handlePress(){
		url = this.state.url + this.state.text + '?api_key=' + this.state.apikey;
	
		 fetch(url)
	    .then((response) => response.json())
    	.then((responseJson) => {
    		this.state.accountId = responseJson.accountId;
    		this.setState({
    			accountId : this.state.accountId
    		})

    		return responseJson;
    	})
    	.catch((error) => {
      		console.error(error);
    	});


	}
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.label}>{this.state.text}</Text>
				<TextInput 
					style={styles.input}
					placeholder="Summoner name"
					value={this.state.text}
					onChangeText={(text) => this.setState({text})}
					 />
				<Button
					color="#841584"
					onPress={() => this._handlePress() }
					title="Get info"
				/>
				{ this.state.accountId != null &&
					<View>
						<Text>Account Id : {this.state.accountId}</Text>
						<RecentMatches accountid={this.state.accountId} apikey={this.state.apikey} baseurl={this.state.baseurl} />
					</View>
				}
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
  	margin:10
  },
  label:{
  	fontWeight: 'bold' ,
  	margin:10 
  },

});

AppRegistry.registerComponent('summoner', () => summoner);