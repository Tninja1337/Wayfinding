/* 
    EXAMPLE REDUCER, THIS IS HOW THEY LOOK, YOU WILL 
    ALMOST ALWAYS USE A SWITCH CASE STATEMENT
    THESE TELL REDUX HOW THE STATE IS BEING CHANGED
    INITIAL STATE CAN BE USED TO TELL OTHERS WHAT OBJECTS/VARIABLES
    ARE EXPECTED IN THIS REDUCER
    THE IMPORT IS USED TO ENSURE WE ARE USING THE SAME PHRASE
    IN OUR ACTION AND REDUCER
*/

import {EMPLOYEE_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
