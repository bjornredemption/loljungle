import React, {Component} from 'react';
import { AppRegistry, Text, View, SafeAreaView } from 'react-native';
import Summoner from './app/components/Summoner.js';

export default class lolJungle extends Component{
	render(){
		return(
			<SafeAreaView>
				<Summoner apikey='RGAPI-dbfe3d89-682b-49df-80c5-ca49768fcf4d' baseurl="https://oc1.api.riotgames.com" />
			</SafeAreaView>
			);
	}
}

AppRegistry.registerComponent('lolJungle', () => lolJungle);