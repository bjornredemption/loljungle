import React, {Component} from 'react';
import { AppRegistry, Text, View, SafeAreaView } from 'react-native';
import Summoner from './app/components/Summoner.js';

export default class lolJungle extends Component{
	render(){
		return(
			<SafeAreaView>
				<Summoner apikey='RGAPI-63edf357-9a21-48b5-a683-fb52b98ab5c6' baseurl="https://oc1.api.riotgames.com" />
	
			</SafeAreaView>
			);
	}
}

AppRegistry.registerComponent('lolJungle', () => lolJungle);