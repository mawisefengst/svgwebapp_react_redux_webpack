import React from 'react'
import Header  from "./Header"
import Svg  from "./Svg"
import Filter from "./Filter"
import ListItem  from "./ListItem"
import Footer  from "./Footer"
import APP_DATA from "./DATA"
require("../client/styles/styles.css")

class App extends React.Component{

	constructor(){
		super();
		this.APP_DATA = APP_DATA;
	}

	render(){
		return <div>  
			<Header />
			<div className="container">
				<Svg />
				<Filter />
				<ListItem data={this.APP_DATA} />
			</div>
			<Footer />
		</div>
	}
}

export default App
