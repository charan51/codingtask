import * as React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
const SelectOptions = (props) => {
  return (
    <Dropdown
      placeholder="Select option"
      label={props.label}
      ariaLabel="Departement"
      options={props.options}
      onFocus={props.getChange}
      style={{marginRight: '10px'}}
      onBlur={props.getChange}
      onChange={props.getEmp}
    />
  );
}
export default SelectOptions;