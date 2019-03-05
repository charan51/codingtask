import types from '../constants/actionTypes';
export function getEmployeeDetails(ID) {
    return {    
        type: types.GET_EMPLOYEE_ID,
        payload: ID
    };   
};
