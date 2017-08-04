import React from 'react';
import { connect } from 'react-redux';
import Template from './Template';

function TemplateContainer(props) {
  return (
    <Template progress={props.progress} color={props.color} />
  );
}

// I.e. I'm now listening to the states progress and color and they are bound to props.
function mapStateToProps(state) {
  return {
    progress: state.progress,
    color: state.color,
  };
}

// Connects it.
export default connect(mapStateToProps)(TemplateContainer);
