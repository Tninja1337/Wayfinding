/*
    THIS IS WHERE WE COMBINE ALL REDUCERS FOR USE IN COMPONENTS
    THE ONE IN HERE IS AN EXAMPLE AND CAN BE REMOVED LATER
*/

import {combineReducers} from 'redux';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  selectedLibraryID: SelectionReducer,
});
