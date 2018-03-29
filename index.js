import React, {Component} from 'react';
import { AppRegistry, Text, View, SafeAreaView } from 'react-native';
import Summoner from './app/components/Summoner.js';

export default class lolJungle extends Component{
	render(){
		return(
			<SafeAreaView>
				<Summoner apikey='RGAPI-b6576f48-fda4-4328-be07-4732b4a5350c' baseurl="https://oc1.api.riotgames.com" />
	
			</SafeAreaView>
			);
	}
}

AppRegistry.registerComponent('lolJungle', () => lolJungle);