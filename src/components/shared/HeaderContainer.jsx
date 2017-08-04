import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

function HeaderContainer(props) {
  return (
    <Header progress={props.progress} color={props.color} />
  );
}

function mapStateToProps(state) {
  return {
    progress: state.progress,
    color: state.color,
  };
}

export default connect(mapStateToProps)(HeaderContainer);
