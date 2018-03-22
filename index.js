import React, {Component} from 'react';
import { AppRegistry, Text, View, SafeAreaView } from 'react-native';
import Summoner from './app/components/Summoner.js';

export default class lolJungle extends Component{
	render(){
		return(
			<SafeAreaView>
				<Summoner apikey='RGAPI-20de3735-ded6-4db5-afa6-515472a0ccb7' baseurl="https://oc1.api.riotgames.com" />
	
			</SafeAreaView>
			);
	}
}

AppRegistry.registerComponent('lolJungle', () => lolJungle);