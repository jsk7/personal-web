import * as gitActions from '../../actions/gitActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Code from '../../components/Code';

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
