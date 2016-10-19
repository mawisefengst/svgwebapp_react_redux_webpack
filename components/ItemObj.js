import React from 'react'

class ItemObj extends React.Component{
	render(){
    const  dataObj = this.props.data;
    const  imageUri  = "http://50.secondthought.com/images/original/" + dataObj.influencer_image;
		return <div className="col-md-3 influencerImgWrapper">
              <div className="stateWrapper">
                <span className="state two_letter_state_box">{dataObj.state}</span>
                <img src={imageUri} />
                <div className="grid_hover_bg">
                    <div className="grid_hover_name">{dataObj.influencer_name}</div>
                    <div className="grid_hover_state">{dataObj.state_full}</div>
                </div>
              </div>  
         </div>
	}
}

export default ItemObj