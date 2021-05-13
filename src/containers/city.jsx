import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectCity from '../actions/index';

const City = (props) => {
  return (
    <li
      className="list-group-item"
      onClick={() => props.selectCity(props.city)}
    >{props.city.name}</li>
  );
};

export default City;
