import React from 'react';
import GoogleMap from 'google-map-react';
import classNames from 'classnames';

export default class CurrentLocationMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  componentWillMount() {
    window.addEventListener('scroll', (e) => {
      if(this.props.mobile) return;
      
      if(window.scrollY > 50 && !this.state.expanded) {
        this.setState({expanded: true})
      } else if(window.scrollY < 50 && this.state.expanded) {
        this.setState({expanded: false})
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {return;});
  }

  render() {
    const mapClassName = classNames({
      "gmap": true,
      "mobile": this.props.mobile,
      "expanded": this.state.expanded
    })
    return (
      <div className={mapClassName}>
        <GoogleMap
          center={this.props.center}
          defaultZoom={11}
          options= {{
            draggable: false,
            scrollwheel: false
          }} />
      </div>
    )
  }
}
