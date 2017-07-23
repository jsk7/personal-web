import * as uiActions from '../../actions/uiActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from '../../components/App';

function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(uiActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
