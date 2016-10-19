import React from 'react'
import ItemObj from './ItemObj'

class ListItem extends React.Component{
	render(){
	    const todoLis = this.props.data.map((item,key) => (
			<ItemObj key={key} data={item} />
		))

		return  {todoLis}
	}
}

export default ListItem
