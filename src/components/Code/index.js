import React, {PropTypes} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import RepoBox from './RepoBox';
import GitHeader from './GitHeader';
import CurrentLocationMap from './CurrentLocationMap';
import GitHubProfileImage from './GitHubProfileImage';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MobileDetect from 'mobile-detect';

export default class Code extends React.PureComponent {
  constructor(props, context) {
    if(props.git.user == "") props.gitActions.fetchGithubProfileData(fetch);
    super(props, context);
    this.md = new MobileDetect(window.navigator.userAgent);
  }



  render() {
    const mobile = this.md.mobile();
    const screenOffset = 0.20; // So our latittude are shown on the screen without scrolling
    const lat = mobile ? this.props.git.lat : this.props.git.lat
    const lng = mobile ? this.props.git.lng : this.props.git.lng+screenOffset
    const center = {lat, lng}
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
                  <Col lg={4} md={4} sm={4} xs={4}>
                    <GitHubProfileImage src={this.props.git.avatar} />
                  </Col>

                  <Col lg={6} md={6} sm={6} xs={6}>
                    <GitHeader git={this.props.git} />
                  </Col>

                  <Col lgHidden mdHidden smHidden xs={12}>
                    <CurrentLocationMap center={center}
                                        mobile={mobile} />
                  </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <hr />
                  <h4> Repos: </h4>
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
              <CurrentLocationMap center={center}
                                  mobile={mobile} />
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
