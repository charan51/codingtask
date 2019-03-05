import React from 'react';
import Select from './selectOptions';
import Button from './button';
import constants from '../../../constants/constants';
import SelectEmployee from './selectEmployee';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeOptions: [],
            getEmployeeID: null
        };
        this.getSelection = this.getSelection.bind(this);
        this.getEmployeeID = this.getEmployeeID.bind(this);
    }
    getSelection(e) {
        const selectedText = e.target.innerText;
        if(selectedText === 'HR') {
            this.setState({
                employeeOptions: constants.employesID.hr
            });
        } else if(selectedText === 'Engineering') {
            this.setState({
                employeeOptions: constants.employesID.engineering
            });
        }
    }
    getEmployeeID(e) {
        const selectedID = e.target.innerText;
        this.setState({
            getEmployeeID: selectedID
        });
    }
    render() {
        return (
            <div className="headerContainer">
                <Select label='Departement' getChange={this.getSelection} options={constants.HRDepartmentOptions} />
                <SelectEmployee label="Employee ID's" getEmp={this.getEmployeeID} options={this.state.employeeOptions} />
                <Button employeeID={this.state.getEmployeeID} label="Get Details" />
            </div>
        );
    }
}
export default Header;