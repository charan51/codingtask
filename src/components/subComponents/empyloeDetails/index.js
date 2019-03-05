import React from 'react';
import { connect } from 'react-redux';
import { stat } from 'fs';
class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="EmployeeDetailsContainer">
                {this.props.fetched && this.props.details.length !== 0 ?
                    <div>
                        <img src={this.props.details.avatar} alt={this.props.details.first_name} />
                        <h2>ID: {this.props.details.id}</h2>
                        <h2>Name: {this.props.details.first_name} {this.props.details.last_name}</h2>
                    </div>
                    :
                    <h2>Please select options to get Details</h2>
                }
            </div>
        )
    };
}
const mapStateToProps = (state) => {
    return {
        details: state.getDetils.employeeDeails.data,
        fetched: state.getDetils.fetched
    }
}
export default connect(mapStateToProps, null)(EmployeeDetails);