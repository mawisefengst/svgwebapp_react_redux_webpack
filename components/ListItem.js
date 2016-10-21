import React from 'react'
import ItemObj from './ItemObj'

class ListItem extends React.Component{
	render(){
		const showData = this.props.showId;
	    const todoLis = this.props.data.map((item,key) => {
	    	return <ItemObj dispatch={this.props.dispatch} key={key} index={key} data={item} detailViewId={this.props.detailViewId} showId={this.props.showId} showIndex={this.props.showIndex} />
	    })
		return  <div className="hero-unit row clearfix">{todoLis}</div>
	}
}

export default ListItem
