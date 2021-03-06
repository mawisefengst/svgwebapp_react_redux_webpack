import React from 'react'
import actions from "../redux/actions"

class Detail extends React.Component{

  closeDetail(){
     this.props.dispatch(actions.showDetail(0));
  }

  seeDetail(direction){
     if(direction === "prev"){
       this.props.dispatch(actions.showDetailPrev(this.props.showIndex));
     }else{
       this.props.dispatch(actions.showDetailNext(this.props.showIndex));
     }
  }

	render(){
    const detailViewObj = this.props.data
		return <div className="col-md-12 detailView expand_background clearfix expand show newExpand detailViewObj_{detailViewObj.showIndex}}"> 
          <div className="col-md-7">
           <div className="expand_name">{detailViewObj.influencer_name}</div>
           <div className="full_state">{detailViewObj.state_full}</div>
           <a target="_blank" className="expand_link" href="{detailViewObj.blog_url}">{detailViewObj.blog_display}</a>
           <div className="expand_text">{detailViewObj.statement}</div>
           <div className="col-md-12 expandDetail">
              <div className="shopthelook_header">shop the look</div>
              <div className="row">

                        <div className="col-md-12 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{detailViewObj.look1_cat_name} </div>
                            <a target="_blank" className="shopthelook_item" href={"http://oldnavy.gap.com/browse/product.do?pid="+detailViewObj.look1_mpn+"&mlink=0,people_50states&tid=onsm004625"}>{detailViewObj.look1_prod_name}</a> 
                        </div> 

                        <div className="col-md-12 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{detailViewObj.look2_cat_name} </div>
                              <a target="_blank" className="shopthelook_item" href={"http://oldnavy.gap.com/browse/product.do?pid="+detailViewObj.look2_mpn+"&mlink=0,people_50states&tid=onsm004625"}>{detailViewObj.look2_prod_name}</a>
                        </div> 

                        <div className="col-md-12 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{detailViewObj.look3_cat_name} </div>
                              <a target="_blank" className="shopthelook_item" href={"http://oldnavy.gap.com/browse/product.do?pid="+ detailViewObj.look3_mpn+ "&mlink=0,people_50states&tid=onsm004625" }>{detailViewObj.look3_prod_name}</a>
                        </div> 

                        <div className="col-md-12 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{detailViewObj.look4_cat_name} </div>
                            <a target="_blank" className="shopthelook_item" href={"http://oldnavy.gap.com/browse/product.do?pid="+ detailViewObj.look4_mpn +"&mlink=0,people_50states&tid=onsm004625" }>{detailViewObj.look4_prod_name}</a>
                        </div> 

              </div>
            </div>
        </div>   

        <div className="col-md-5 rightColumDetail">
          <img className="expand_photo" src={"http://50.secondthought.com/images/original/" + detailViewObj.influencer_image} />
          <div className="expand_two_letter_state">{detailViewObj.state}</div>
        </div>

        <div className="row shareRow col-md-3">
            <div className="col-md-2">
              <div className="shopthelook_share_header">share</div>
            </div>
            <div className="col-md-8">
              <a className="shopthelook_share_icons fa fa-facebook" href="javascript:void(0);"></a>
              <a className="shopthelook_share_icons fa fa-twitter" href="javascript:void(0);"></a>
              <a className="shopthelook_share_icons fa fa-pinterest-p" href="javascript:void(0);"></a>
             </div>
        </div> 


          <a href="javascript:void(0);" className="prevBtn sprite" onClick={this.seeDetail.bind(this,"prev")}></a>

        

          <a href="javascript:void(0);" className="nextBtn sprite" onClick={this.seeDetail.bind(this,"next")}></a>

          <a href="javascript:void(0);" className="closeBtn sprite" onClick={this.closeDetail.bind(this)}></a>
          <div className={"sprite navigationArrow state"+ this.props.showIndex % 4 }></div>
         </div>
    }     
}

export default Detail
