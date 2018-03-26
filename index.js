import React, {Component} from 'react';
import { AppRegistry, Text, View, SafeAreaView } from 'react-native';
import Summoner from './app/components/Summoner.js';

export default class lolJungle extends Component{
	render(){
		return(
			<SafeAreaView>
				<Summoner apikey='RGAPI-86b27462-97d8-40f4-b21f-8448fa8f6368' baseurl="https://oc1.api.riotgames.com" />
	
			</SafeAreaView>
			);
	}
}

AppRegistry.registerComponent('lolJungle', () => lolJungle);