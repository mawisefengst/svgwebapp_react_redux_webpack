import React from 'react'

class Detail extends React.Component{
	render(){
		return         <div className="col-md-7">
           <div className="expand_name">{{influencer_name}}</div>
           <div className="full_state">{{state_full}}</div>
           <a target="_blank" className="expand_link" href="{{blog_url}}">{{blog_display}}</a>
           <div className="expand_text">{{statement}}</div>
           <div className="col-md-12 expandDetail">
              <div className="shopthelook_header">shop the look</div>
              <div className="row">
                        <div className="col-md-12 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{{look1_cat_name_show}} </div>

                             {{#if look1_mpn}}
                              <a target="_blank" className="shopthelook_item" href="http://oldnavy.gap.com/browse/product.do?pid={{look1_mpn}}&mlink=0,people_50states&tid=onsm004625">{{look1_prod_name}}</a>
                            {{/if}} 

                            {{#if look1_url}}
                                <a target="_blank" className="shopthelook_item" href="{{look1_url}}">{{look1_prod_name}}</a>
                            {{/if}}   

                        </div> 

                        <div className="col-md-12 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{{look2_cat_name_show}} </div>

                            {{#if look2_mpn}}
                              <a target="_blank" className="shopthelook_item" href="http://oldnavy.gap.com/browse/product.do?pid={{look2_mpn}}&mlink=0,people_50states&tid=onsm004625">{{look2_prod_name}}</a>
                            {{/if}} 

                            {{#if look2_url}}
                                <a target="_blank" className="shopthelook_item" href="{{look2_url}}">{{look2_prod_name}}</a>
                            {{/if}}   

                        </div> 

                        <div className="col-md-12 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{{look3_cat_name_show}} </div>

                            {{#if look3_mpn}}
                              <a target="_blank" className="shopthelook_item" href="http://oldnavy.gap.com/browse/product.do?pid={{look3_mpn}}&mlink=0,people_50states&tid=onsm004625">{{look3_prod_name}}</a>
                            {{/if}} 

                            {{#if look3_url}}
                                <a target="_blank" className="shopthelook_item" href="{{look3_url}}">{{look3_prod_name}}</a>
                            {{/if}}   

                        </div> 

                        <div className="col-md-12 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{{look4_cat_name_show}} </div>

                             {{#if look4_mpn}}
                              <a target="_blank" className="shopthelook_item" href="http://oldnavy.gap.com/browse/product.do?pid={{look4_mpn}}&mlink=0,people_50states&tid=onsm004625">{{look4_prod_name}}</a>
                            {{/if}} 

                             {{#if look4_url}}
                                <a target="_blank" className="shopthelook_item" href="{{look4_url}}">{{look4_prod_name}}</a>
                            {{/if}}   

                        </div> 


              </div>
            </div>
        </div>   

        <div className="col-md-5 rightColumDetail">
          <img className="expand_photo" src="http://50.secondthought.com/images/original/{{influencer_image}}" />
          <div className="expand_two_letter_state">{{state}}</div>
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

        {{#unless first}}
          <a href="javascript:void(0);" className="prevBtn sprite"></a>
        {{/unless}}
        
        {{#unless last}}
          <a href="javascript:void(0);" className="nextBtn sprite"></a>
        {{/unless}}

        <a href="javascript:void(0);" className="closeBtn sprite"></a>
        <div className="sprite navigationArrow state{{arrowIndex}}"></div>

    </script>


    <script id="influencerDetailMobile-template" type="text/x-handlebars-template">

        <div className="col-md-5 rightColumDetail">
          <img className="expand_photo" src="http://50.secondthought.com/images/original/{{influencer_image}}" />
          <div className="expand_two_letter_state">{{state}}</div>
        </div>

        <div className="col-md-7">
           <div className="expand_name">{{influencer_name}}</div>
           <div className="full_state">{{state_full}}</div>
           <a target="_blank" className="expand_link" href="{{blog_url}}">{{blog_display}}</a>
           <div className="expand_text">{{statement}}</div>
           <div className="col-md-12 expandDetail">
              <div className="shopthelook_header">shop the look</div>
              <div className="row">
                        <div className="col-md-6 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{{look1_cat_name_show}} </div>
                            {{#if look1_mpn}}
                              <a target="_blank" className="shopthelook_item" href="http://oldnavy.gap.com/browse/product.do?pid={{look1_mpn}}&mlink=0,people_50states&tid=onsm004625">{{look1_prod_name}}</a>
                            {{/if}} 

                            {{#if look1_url}}
                                <a target="_blank" className="shopthelook_item" href="{{look1_url}}">{{look1_prod_name}}</a>
                            {{/if}}   
                        </div> 

                        <div className="col-md-6 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{{look2_cat_name_show}} </div>

                            {{#if look2_mpn}}
                              <a target="_blank" className="shopthelook_item" href="http://oldnavy.gap.com/browse/product.do?pid={{look2_mpn}}&mlink=0,people_50states&tid=onsm004625">{{look2_prod_name}}</a>
                            {{/if}} 

                            {{#if look2_url}}
                                <a target="_blank" className="shopthelook_item" href="{{look2_url}}">{{look2_prod_name}}</a>
                            {{/if}}  
                        </div> 
 
                        <div className="col-md-6 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{{look3_cat_name_show}} </div>
                            {{#if look3_mpn}}
                              <a target="_blank" className="shopthelook_item" href="http://oldnavy.gap.com/browse/product.do?pid={{look3_mpn}}&mlink=0,people_50states&tid=onsm004625">{{look3_prod_name}}</a>
                            {{/if}} 

                            {{#if look3_url}}
                                <a target="_blank" className="shopthelook_item" href="{{look3_url}}">{{look3_prod_name}}</a>
                            {{/if}}   
                        </div> 

                        <div className="col-md-6 shopthelook_wrapper">
                            <div className="shopthelook_subheader">{{look4_cat_name_show}} </div>
                           {{#if look4_mpn}}
                              <a target="_blank" className="shopthelook_item" href="http://oldnavy.gap.com/browse/product.do?pid={{look4_mpn}}&mlink=0,people_50states&tid=onsm004625">{{look4_prod_name}}</a>
                            {{/if}} 

                             {{#if look4_url}}
                                <a target="_blank" className="shopthelook_item" href="{{look4_url}}">{{look4_prod_name}}</a>
                            {{/if}}   
                        </div> 
              </div>
            </div>
        </div>   

        <div className="row shareRow col-md-3">
            <div className="col-md-2">
              <div className="shopthelook_share_header">share</div>
            </div>
            <div className="col-md-8">
              <a className="shopthelook_share_icons fa fa-facebook" href=""></a>
              <a className="shopthelook_share_icons fa fa-twitter" href=""></a>
              <a className="shopthelook_share_icons fa fa-pinterest-p" href=""></a>
             </div>
        </div> 


        {{#unless first}}
          <a href="javascript:void(0);" className="prevBtn sprite"></a>
        {{/unless}}
        
        {{#unless last}}
          <a href="javascript:void(0);" className="nextBtn sprite"></a>
        {{/unless}}
        
        <a href="javascript:void(0);" className="closeBtn sprite"></a>
	}
}

export default Detail
