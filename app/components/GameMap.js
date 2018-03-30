import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Image, Text, TextInput, View } from 'react-native';


export default class gamemap extends Component{
	constructor(props){
		super(props);
		const min = {x: -120, y: -120};
        const max  = {x: 14870, y: 14980};
		this.state ={
			points : props.points,
			//points: [{x:50, y:50, label:'1'},{x:100,y:110,label:'2'}],
			maxWidth: 350,
			maxHeight: 350

		};
	}

	componentWillMount(){
		//const ratio = (350 / 14990);
		const ratio = 0.0233;
		let pointsBuffer = this.state.points.map( (point) => ({x: point.x*ratio, y:   350 - point.y*ratio})  );

		this.setState({
    			points : pointsBuffer.slice(0,5)
    		});

		//console.log(this.state.points);
	}
	
	
	render(){
		return(
			<View>
				{this.state.points.map( (point) =>
					<Text style={{display:'none'}}>{point.x}, {point.y} </Text>
					)}
				<View style={{position:'relative'}}>
				<Image
				style={{width: this.state.maxWidth, height: this.state.maxHeight, position:'absolute'}}
          source={{uri: 'https://s3-us-west-1.amazonaws.com/riot-developer-portal/docs/map11.png'}}
        		>
    
        		</Image>
        			{this.state.points.map( (point) =>
        			<View key={point.x} style={{borderRadius:10,width:14,height:14,backgroundColor:'red',top: point.y, left: point.x, position:'absolute'}}><Text style={{fontSize:10,padding:2}} key={point.x}>{point.label}</Text></View>
        		)}
        		</View>
			</View>
			);
	}
}



AppRegistry.registerComponent('gamemap', () => gamemap);