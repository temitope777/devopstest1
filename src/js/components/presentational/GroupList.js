import React from "react";
import PropTypes from "prop-types";
//handlechange is here just for demo as not necessary
const GroupList = ({ value, handleChange }) => (
  <div className="form-group">
  <div ><img src={value.picture.thumbnail}/></div>
  <div><label >{value.name.first} {value.name.last}</label></div> 
  </div>
);

GroupList.propTypes = {
  value: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default GroupList