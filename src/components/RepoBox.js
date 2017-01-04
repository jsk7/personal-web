import React, {PropTypes} from 'react';
import {Col} from 'react-bootstrap';

export class RepoBox extends React.Component {
  constructor(props, context) {
    super(props, context);
    let children;
  }

  randomColors() {
    const r = Math.floor((Math.random() * 255) + 1);
    const g = Math.floor((Math.random() * 255) + 1);
    const b = Math.floor((Math.random() * 255) + 1);
    const transparency = Math.random() + 0.2;
    return `rgba(${r}, ${g}, ${b}, ${transparency})`;
  }

  render() {
    console.log(window.innerWidth);
    return (
        <Col lg={4} md={4} sm={6} xs={6} className="box-padding" >
          <a href={this.props.href} className="no-style">
            <div className={this.props.boxClassName}>
              <div className={this.props.contentClassName}>
                <div className="text-center repo_name_margin">
                  <div className="circle" style={{backgroundColor: this.randomColors()}} />
                  <h6 className="repo_name" key="title">
                    {this.props.repo.name}
                  </h6>
                  </div>
                  <br />
                  <Col xsHidden>
                    <div>
                      <p className="text-center">{this.props.repo.description}</p>
                      <br />
                      <h4 className="text-bottom text-center">{this.props.repo.language}</h4>
                    </div>
                  </Col>

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
  contentClassName: PropTypes.string
};
