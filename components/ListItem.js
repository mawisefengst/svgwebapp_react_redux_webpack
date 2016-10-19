import React from 'react'
import ItemObj from './ItemObj'

class ListItem extends React.Component{


	render(){
	    const todoLis = this.props.data.map((item,key) => {
	    	 return <ItemObj key={key} data={item} />
	    })

		return  <div className="hero-unit row clearfix">{todoLis}</div>
	}
}

export default ListItem
