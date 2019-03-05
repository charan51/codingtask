import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './subComponents/header';
import Employee from './subComponents/empyloeDetails';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import '../app.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.fetching ? <Spinner size={SpinnerSize.large} label="loading..." ariaLive="assertive" />
          :
          <Employee />
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fetching: state.getDetils.fetching
  }
}
export default connect(mapStateToProps, null)(App);
