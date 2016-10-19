import React from 'react'

class Filter extends React.Component{
	render(){
		return  <div className="filter_bar">
            <div className="optionWrapper">
                <span id="filter_state" className="filter_bar_by_states_by_items">
                  by states <i className="fa fa-angle-down"></i>
                </span>
                <div id="retrieveCover_list">

                </div>
            </div>
            <div className="optionWrapper">
                <span id="filter_item" className="filter_bar_by_states_by_items">
                  by items <i className="fa fa-angle-down"></i>
                </span>
                <div id="retrieveCover_list_item">

                </div>
            </div>

      </div>
	}
}

export default Filter
