import React from 'react';
import '../util/css/header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="top_inner_header">
        <div className="logo_intro_wrap">
          <div className="logo">OGT</div>
          {/* <span id="lyrics">Today was <br/> a good day</span> */}
          <span id="intro">At least one GOOD thing happend today.</span>
        </div>
        <div className="share">submit your OGT</div>
      </div>
      <div className="bottom_inner_header">
        <div className="tags">
          <span>Tags:</span>
        </div>
        <div className="form_wrap">
          <form>
            <input id="search_bar" type="text"></input>
            <input type="submit" value="search"/>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Header