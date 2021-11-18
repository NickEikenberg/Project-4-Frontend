import React, {useEffect, useState} from 'react';
import '../util/css/add.css';

const Add = () => {
  return (
    <div className="add_form_wrap">
      <form >
        <label for="title">title:</label>
        <input type="text" />
        <label for="title">name:</label>
        <input type="text" />
        <label for="title">Messages:</label>
        <input type="textarea" />
        <input type="submit"/>
      </form>
    </div>
  )
};
export default Add;
