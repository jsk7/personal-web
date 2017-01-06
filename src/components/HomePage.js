import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const HomePage = (props) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={300}
      transitionEnter={true}
      transitionEnterTimeout={300}
      transitionLeave={true}
      transitionLeaveTimeout={300}
      key={1}>
    <div className="home">
      <h1>@futurejuan</h1>

      <h4>Some some catchy phrase</h4>

    </div>
    </ReactCSSTransitionGroup>
  );
};

export default HomePage;
