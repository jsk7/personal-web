import * as t from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export function ui(state = initialState.ui, action) {
  let newState;

  switch (action.type) {
    case t.OPEN_MODAL:
      newState = objectAssign({}, state);
      newState.openModal = true;
      return newState;

    case t.CLOSE_MODAL:
      newState = objectAssign({}, state);
      newState.openModal = false;
      newState.mailCopied = false;
      return newState;

    case t.COPY_MAIL:
      newState = objectAssign({}, state);
      newState.mailCopied = true;
      return newState;

    default:
      return state;

  }
}
