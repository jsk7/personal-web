import React, {PropTypes} from 'react';
import * as gitActions from '../actions/gitActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Image} from 'react-bootstrap';
import GoogleMap from 'google-map-react';
import {RepoBox} from './RepoBox';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Code extends React.Component {
  constructor(props, context) {
    if(props.git.user == "") props.gitActions.fetchGithubProfileData(fetch);
    super(props, context);
  }



  render() {
    const screenOffset = 0.15; // So our latittude are shown on the screen without scrolling

    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}
        key={0}>
        <Grid fluid className="code">
            <Row>
              <Col lg={7} md={7} sm={7} xs={12}>
                <Row>
                  <Col
                    lg={4}
                    md={4}
                    sm={4}
                    xs={4}>
                    <div className="git_avatar">
                    <Image  responsive
                            src={this.props.git.avatar}
                            circle />
                    </div>

                  </Col>

                  <Col lg={6} md={6} sm={6} xs={6}>
                  <Col lg={12} md={12} sm={12} xsHidden><div className="git-margin" /></Col>
                    <h4 className="git-name">
                      Mr.
                      <a href={this.props.git.url}> @futurejuan</a>
                    </h4>
                    <h5>Working since {this.props.git.user_since}</h5>
                    <h5>Currently at {this.props.git.company} in {this.props.git.location}</h5>
                  </Col>

                  <Col lgHidden mdHidden smHidden xs={12}>
                    <div className="gmap center">
                      <GoogleMap
                        center={{lat: this.props.git.lat, lng: this.props.git.lng}}
                        defaultZoom={11}
                        options= {{
                          draggable: false,
                          scrollwheel: false
                        }} />
                    </div>
                  </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <hr />
                  <h4>
                    Repos:
                  </h4>
                  <hr />
                </Col>
                  {
                    this.props.git.repos.length > 1 &&
                    this.props.git.repos.map(
                      (repo) => (
                        <RepoBox href={repo.html_url}
                                 boxClassName="box"
                                 contentClassName="box__content box__content--centered"
                                 key={repo.id.toString()}
                                 repo={repo} />
                      )
                    )
                  }
                <Col lg={12} md={12} sm={12} xs={12}>
                  <hr />
                  <h4>
                    Repos que sigo:
                  </h4>
                  <hr />
                </Col>
                  {
                    this.props.git.loved_repos.length > 1 &&
                    this.props.git.loved_repos.map(
                      (repo) => (
                        <RepoBox href={repo.html_url}
                                 boxClassName="box"
                                 contentClassName="box__content box__content--centered"
                                 key={repo.id.toString()}
                                 repo={repo} />

                      )
                    )
                  }
              </Row>
            </Col>
            <Col lg={5} md={5} sm={5} xsHidden className="gmap-right">
              <div className="gmap pull-right">
                <GoogleMap
                  center={{lat: this.props.git.lat-screenOffset, lng: this.props.git.lng}}
                  defaultZoom={11}
                  options= {{
                    draggable: false,
                    scrollwheel: false
                  }} />
              </div>
            </Col>
          </Row>
        </Grid>
      </ReactCSSTransitionGroup>
    );
  }
}

Code.propTypes = {
  children: PropTypes.element,
  gitActions: PropTypes.object.isRequired,
  git: PropTypes.object
};

function mapStateToProps(state) {
  return {
    git: state.github
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gitActions: bindActionCreators(gitActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Code);
