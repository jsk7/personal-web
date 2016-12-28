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
          <Col
            lg={2}
            md={2}
            sm={3}
            xs={12}>
            <div className="git_avatar">
            <Image responsive src={this.props.git.avatar}
                    circle />
            </div>

          </Col>
          <Col
            lg={10}
            md={10}
            sm={9}
            xs={12}>


            <Row>

              <Col lg={6} md={6} sm={6} xs={6}>
              <Col lg={12} md={12}  xsHidden={true}><div className="git-margin"></div></Col>
                <h4 className="git-name">
                  Mr.
                  <a href={this.props.git.url}> @futurejuan</a>
                </h4>
                <h5>Working since {this.props.git.user_since}</h5>
                <h5>Currently at {this.props.git.company} in {this.props.git.location}</h5>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} pullRight>
              <div className="gmap pull-right">
                <GoogleMap
                  center={{lat: this.props.git.lat, lng: this.props.git.lng}}
                  defaultZoom={11}>
                </GoogleMap>
              </div>
              </Col>
            </Row>
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
