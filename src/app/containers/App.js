import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from '../components/Main';
import User from '../components/User';
import * as userActions from '../actions/userActions';


class App extends React.Component {

  onDeleteClick = () => {

  }

  render() {

    return (
      <div className="container">
        <Main changeUsername={this.props.setName} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

App.propTypes = {
  setName: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setName: (name) => {
//       dispatch(setName(name))
//     }
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(userActions, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
