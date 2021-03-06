import React from 'react'
import actions from "../redux/actions"
import Detail from "./Detail"
import APP_DATA from "./DATA"


class ItemObj extends React.Component{

  seeDetail(styleId,key){
    this.props.dispatch(actions.showDetail(styleId,key))
  }

	render(){
    const  dataObj = this.props.data;
    const  showDetailData = APP_DATA[this.props.showId - 1];
    if(this.props.index + 1 == this.props.detailViewId)  {
      return <div><div className="col-md-3 influencerImgWrapper" onClick={this.seeDetail.bind(this,dataObj.influencer_id,this.props.index)}>
        <div className="stateWrapper">
          <span className="state two_letter_state_box">{dataObj.state}</span>
          <img src={ "http://50.secondthought.com/images/original/" + dataObj.influencer_image } />
          <div className="grid_hover_bg">
              <div className="grid_hover_name">{dataObj.influencer_name}</div>
              <div className="grid_hover_state">{dataObj.state_full}</div>
          </div>
        </div>  
   </div><Detail data={showDetailData} dispatch={this.props.dispatch} showIndex={this.props.showIndex} /></div>
    }else  return <div className="col-md-3 influencerImgWrapper" onClick={this.seeDetail.bind(this,dataObj.influencer_id,this.props.index)}>
        <div className="stateWrapper">
          <span className="state two_letter_state_box">{dataObj.state}</span>
          <img src={ "http://50.secondthought.com/images/original/" + dataObj.influencer_image }/>
          <div className="grid_hover_bg">
              <div className="grid_hover_name">{dataObj.influencer_name}</div>
              <div className="grid_hover_state">{dataObj.state_full}</div>
          </div>
        </div>  
   </div>     
	}
}

export default ItemObj