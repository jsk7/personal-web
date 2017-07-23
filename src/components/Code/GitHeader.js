import React from 'react';
import { Col } from 'react-bootstrap';

export default class GitHeader extends React.PureComponent {

  render() {
    return (
      <div className="git-name">
        <h4>
          Mr. <a href={this.props.git.url}> @futurejuan</a>
        </h4>
        <h5>Working since {this.props.git.user_since}</h5>
        <h5>Currently at {this.props.git.company} in {this.props.git.location}</h5>
      </div>
    )

  }
}
