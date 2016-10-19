import React from 'react'
require("../client/styles/styles.css")

class Footer extends React.Component{
	render(){
		return <div className="footer">
          <a className="footer_logo ui-link"></a>
          <div className="footer_text">
            Got style? Show us! Take a snap of your best Old Navy look, then tag us on IG — @oldnavy &amp; #50Styles50States
          </div>
          <div className="footer_share_icons">
              <a className="fa fa-facebook ui-link" target="_blank" href="https://www.facebook.com/oldnavy/"></a>
              <a className="fa fa-twitter ui-link" target="_blank" href="https://twitter.com/oldnavy"></a>
              <a className="fa fa-instagram ui-link" target="_blank" href="https://www.instagram.com/oldnavy/"></a>
              <a className="fa fa-pinterest-p ui-link" target="_blank" href="https://www.pinterest.com/oldnavy/"></a>
          </div>
      </div>
	}
}

export default Footer