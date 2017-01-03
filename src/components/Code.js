import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import * as gitActions from '../actions/gitActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Image} from 'react-bootstrap';
import GoogleMap from 'google-map-react';

class Code extends React.Component {
  constructor(props, context) {
    if(props.git.user == "") props.gitActions.fetchGithubProfileData();
    super(props, context);
  }



  render() {

    return (
      <Grid fluid>
          <Row>
            <Col lg={6} md={6} sm={6} xs={6}>
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
                <Col lg={12} md={12} xsHidden><div className="git-margin" /></Col>
                  <h4 className="git-name">
                    Mr.
                    <a href={this.props.git.url}> @futurejuan</a>
                  </h4>
                  <h5>Working since {this.props.git.user_since}</h5>
                  <h5>Currently at {this.props.git.company} in {this.props.git.location}</h5>
                </Col>
            </Row>
            <Row>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <h4>
                    Repos:
                  </h4>
                </Col>
              </Row>
              <Row>
                {
                  this.props.git.repos.map(
                    (repo) => (
                      <Col lg={3} md={3} sm={4} xs={6}>
                        <h6>
                          {repo.name}
                        </h6>
                      </Col>
                    )
                  )
                }
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <h4>
                    Repos que sigo:
                  </h4>
                </Col>
              </Row>
              <Row>
                {
                  this.props.git.loved_repos.map(
                    (repo) => (
                      <Col lg={3} md={3} sm={4} xs={6}>
                        <h6>
                          {repo.full_name}
                        </h6>
                      </Col>
                    )
                  )
                }
              </Row>
            </Row>
          </Col>

          <Col lg={6} md={6} sm={6} xs={6} bsClass="gmap-right">
            <div className="gmap pull-right">
              <GoogleMap
                center={{lat: this.props.git.lat, lng: this.props.git.lng}}
                defaultZoom={11} />
            </div>
          </Col>
        </Row>
      </Grid>
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
