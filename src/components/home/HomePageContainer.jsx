import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementProgress, decrementProgress } from '../../actions/progress';
import { randomColor } from '../../actions/color';
import HomePage from './HomePage';

export function HomePageContainer(props) {
  const { incrementProgressAction, decrementProgressAction, randomColorAction } = props;
  return (
    <HomePage
      incrementFunction={incrementProgressAction}
      decrementFunction={decrementProgressAction}
      changeColorFunction={randomColorAction}
    />
  );
}

// I.e. I'm allowed to do the following actions that lead to state changes.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementProgressAction: incrementProgress,
    decrementProgressAction: decrementProgress,
    randomColorAction: randomColor,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(HomePageContainer);
