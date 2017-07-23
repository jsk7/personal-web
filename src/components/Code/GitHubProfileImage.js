import React from 'react';
import {Image} from 'react-bootstrap';

export default class GitHubProfileImg extends React.PureComponent {
  render(){
    return(
      <div className="git_avatar">
        <Image  responsive
                src={this.props.src}
                circle />
      </div>
    )
  }
}
