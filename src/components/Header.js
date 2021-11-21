import React from 'react';
import '../util/css/header.css';

const Header = ({ isAdding, setIsAdding }) => {
  const toggleAddForm = () => {
    setIsAdding(!isAdding);
  };

  return (
    <div className="header">
      <div className="top_inner_header">
        <div className="logo_intro_wrap">
          <div className="logo">
            <img src="https://i.imgur.com/Umksv2s.png"/>
          </div>
          {/* <span id="lyrics">Today was <br/> a good day</span> */}
          <span id="intro">At least one GOOD thing happened today.</span>
        </div>
        <div className="share" onClick={toggleAddForm}>
          Submit Your OGT
        </div>
      </div>
      <div className="bottom_inner_header">
        <div className="tags">
        <span id="lyrics">Today was a good day</span>
        </div>
        <div className="form_wrap">
          <form>
            <input id="search_bar" type="text" />
            <input id="search" type="submit" value="search" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Header;
