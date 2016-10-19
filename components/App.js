import React from 'react'
import Header  from "./Header"
import Svg  from "./Svg"
import Filter from "./Filter"
import ListItem  from "./ListItem"
import Footer  from "./Footer"
import actions from "../redux/actions"
import { connect } from "react-redux"
require("../client/styles/styles.css")

class App extends React.Component{

	constructor(props){
		super(props);
		//this.repeatedItem = this.props.styles.slice(this.props.currentPatch,(this.props.currentPatch + 1) * this.props.patchAmout);
		//debugger;
	}

	loadmore(){
		this.props.dispatch(actions.loadMore());
	}

	render(){
		return <div>  
			<Header />
			<h1>{this.props.currentPatch}</h1>
			<div className="container">
				<Svg />
				<Filter />
				<ListItem data={this.props.repeatedItem} />
				<div className={"btn_load_more_styles " + this.props.showLoadMore} onClick={this.loadmore.bind(this)}>load more styles</div>
			</div>
			<Footer />
		</div>
	}
}

function mapStateToProps(state){
	return state
}

export default connect(mapStateToProps)(App)
