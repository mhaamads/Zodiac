import React,{Component} from 'react';
import Cardlist from './Cardlist.js';
import {zodiac} from './zodiac.js';
import Search from	'./Search.js';
import './App.css'
import Footer from './Footer.js';


class App extends Component{
	constructor(){
		super()
		this.state={	
			zodiacc: zodiac,
			searchfield:'',
			AllZodiac:{}
		}
	}
onSearch=(event)=>
{
	this.setState({searchfield: event.target.value});
}

render(){
	const fzodiac =this.state.zodiacc.filter(zodiac => {
		return zodiac.name.includes(this.state.searchfield);
	
	})
	return (
		<div className="application">
		<div className='tc'>
		<h1 className="logo"> g</h1>
		<Search onSearch={this.onSearch}/>
		<Cardlist zodiac={fzodiac}/>
		<Footer/>

</div></div>
		);
}}

export default App;