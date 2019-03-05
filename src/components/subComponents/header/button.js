import React from 'react';
import {PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import {getEmployeeDetails} from '../../../actions/getDetailsAction';
import {connect} from 'react-redux';
const Button = (props) => {
    return (
        <PrimaryButton
        data-automation-id="test"
        allowDisabledFocus={true}
        text={props.label}
        style={{marginRight: '10px'}}
        onClick={() => props.getEmployeeDetails(props.employeeID)}
      />
    );
};
export default connect(null, {getEmployeeDetails})(Button);