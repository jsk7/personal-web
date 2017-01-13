import React, {PropTypes} from 'react';
import {Col} from 'react-bootstrap';
import {GitLogo} from './GitLogo';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class RepoBox extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mouseOver: false
    };
  }

  randomColors() {
    const r = Math.floor((Math.random() * 255) + 1);
    const g = Math.floor((Math.random() * 255) + 1);
    const b = Math.floor((Math.random() * 255) + 1);
    const transparency = Math.random() + 0.2;
    return `rgba(${r}, ${g}, ${b}, ${transparency})`;
  }

  render() {
    function hover(e) {
      e.preventDefault();
      this.setState({
        mouseOver: !this.state.mouseOver
      });
    }
    return (
        <Col lg={4} md={4} sm={6} xs={6} className="box-padding repo-box" >
          <a href={this.props.href} className="no-style">
            <div>
              <div className={this.props.boxClassName}>
                <div className={this.props.contentClassName} onMouseEnter={hover.bind(this)} onMouseLeave={hover.bind(this)}>
                  <div className="text-center repo_name_margin">
                    <div className="circle" style={{backgroundColor: this.randomColors()}} />
                    <h6 className="repo_name" key="title">
                      {this.props.repo.name}
                    </h6>
                    </div>
                    {
                      this.state.mouseOver &&
                      <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        key={this.props.repo.id}>
                        <GitLogo color="#fff" />
                      </ReactCSSTransitionGroup>
                    }
                    <br />
                    <Col xsHidden>
                      <div>
                        <p className="text-center small">{this.props.repo.description}</p>
                        <br />
                        <h4 className="text-bottom text-center language">{this.props.repo.language}</h4>
                      </div>
                    </Col>

                </div>
              </div>
            </div>
          </a>
        </Col>
    );
  }
}

RepoBox.propTypes = {
  children: PropTypes.element,
  href: PropTypes.string,
  boxClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  repo: PropTypes.object
};
