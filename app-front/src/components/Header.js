import React from 'react';
import '../util/css/header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="top_inner_header">
        <div className="logo_intro_wrap">
          <div className="logo">OGT</div>
          <span id="lyrics">"Today was <br/> a good day"</span>
          <span>The best things in life happen NOW</span>
        </div>
        <div className="share">submit your OGT</div>
      </div>
      <div className="bottom_inner_header">
        <form>
          <input type="text"></input>
          <input type="submit" value="search"/>
        </form>
      </div>
    </div>
  )
}
export default Header