import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HeaderContainer from './shared/HeaderContainer';
import HomePageContainer from './home/HomePageContainer';
import ProfilePage from './account/ProfilePage';
import LoginPage from './account/LoginPage';


export default function Template(props) {
  // console.log(props);
  const divStyle = {
    background: props.color,
    padding: '20px',
    margin: '20px',
  };

  return (
    <Router>
      <div className="wrapper" >
        <HeaderContainer username="Sjors" />
        <p style={{ margin: '20px' }}>{props.progress}</p>
        <p style={divStyle}>This is the color test of {props.color}</p>
        <section className="page-content container-fluid">
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/account/login" component={LoginPage} />
          <Route path="/account/profile/:id" component={ProfilePage} />
        </section>
      </div>
    </Router>
  );
}
