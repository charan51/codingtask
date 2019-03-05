import * as React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
const SelectEmployee = (props) => {
  return (
    <Dropdown
      placeholder="Select option"
      label={props.label}
      style={{marginRight: '10px'}}
      ariaLabel="Departement"
      options={props.options}
      onFocus={props.getEmp}
      onBlur={props.getEmp}
    />
  );
}
export default SelectEmployee;