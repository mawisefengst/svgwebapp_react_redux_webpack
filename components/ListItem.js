import React from 'react'
import ItemObj from './ItemObj'

class ListItem extends React.Component{


	render(){
		const showData = this.props.showId;
		
	    const todoLis = this.props.data.map((item,key) => {
	    	// if(key != this.props.detailViewId) return <ItemObj dispatch={this.props.dispatch} key={key} data={item} />
	    	//else return <ItemObj dispatch={this.props.dispatch} key={key} data={item} /><Detail style={item}/>
	    	return <ItemObj dispatch={this.props.dispatch} key={key} data={item} detailViewId={this.props.detailViewId} showId={this.props.showId} />
	    })
		return  <div className="hero-unit row clearfix">{todoLis}</div>
	}
}

export default ListItem
