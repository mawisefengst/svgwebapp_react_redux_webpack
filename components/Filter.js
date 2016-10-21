import React from 'react'
import actions from "../redux/actions"
import APP_DATA from "../components/DATA"

class Filter extends React.Component{

    constructor(){
        super();
        this.state = {
            stateActive : ""
        }
    }

    selectFilterState(state){
        this.props.dispatch(actions.filterState(state));
    }

    selectFilterCategory(cateogory){
        this.props.dispatch(actions.filterCategory(cateogory));
    }

    toggleState(){
        if(this.state.stateActive == "active") this.setState({stateActive : "" });
        else this.setState({stateActive : "active"});
        this.setState({categoryActive : "" });
    }

    toggleCategory(){
        if(this.state.categoryActive == "active") this.setState({categoryActive : "" });
        else this.setState({categoryActive : "active"});
        this.setState({stateActive : "" });
    }

	render(){

        const stateList = this.props.data.map((item,key) => {
            return <span key={key} className="dropdown_state_items" onClick={this.selectFilterState.bind(this,item.state)}>{item.state}</span>
        });

        let valueArray = [];
        
        APP_DATA.map(function(item, pos) {
            var keysValue = Object.keys(item).map(k => {
                if( k == "look1_cat_name")   valueArray.push(item.look1_cat_name);
                if( k == "look2_cat_name")   valueArray.push(item.look2_cat_name);
                if( k == "look3_cat_name")   valueArray.push(item.look3_cat_name);
                if( k == "look4_cat_name")   valueArray.push(item.look4_cat_name);
            });
        });

        valueArray= valueArray.filter(function(item, pos) {
            return valueArray.indexOf(item) == pos && item.length;
        });

        const categoryList = valueArray .map((item,key) => {
            return <span key={key} className="dropdown_state_items" onClick={this.selectFilterCategory.bind(this,item)}>{item}</span>
        });

		return  <div className="filter_bar">
            <div className="optionWrapper">
                <span id="filter_state" className="filter_bar_by_states_by_items" onClick={this.toggleState.bind(this)}>
                  by states <i className="fa fa-angle-down"></i>
                </span>
                <div id="retrieveCover_list" className={this.state.stateActive}>
                        {stateList}
                </div>
            </div>
            <div className="optionWrapper">
                <span id="filter_item" className="filter_bar_by_states_by_items"  onClick={this.toggleCategory.bind(this)}>
                  by items <i className="fa fa-angle-down"></i>
                </span>
                <div id="retrieveCover_list_item" className={this.state.categoryActive}>
                    {categoryList}
                </div>
            </div>

      </div>
	}
}

export default Filter
