import * as t from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import dateFns from 'date-fns';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function githubProfile(state = initialState.github, action) {
  let newState;



  switch (action.type) {
    case t.GITHUB_PROFILE_REQUEST:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return state;

    case t.GITHUB_PROFILE_SUCCESS:
      newState = objectAssign({}, state);
      const gh = action.value;
      newState.user = gh.login;
      newState.avatar = gh.avatar_url;
      newState.user_since = dateFns.format(gh.created_at, 'MMMM Do, YYYY');
      newState.company = gh.company;
      newState.url = gh.html_url;
      newState.location = gh.location;
      newState.public_repos = gh.public_repos;
      newState.repos_url = gh.repos_url;
      newState.loved_repos = gh.subscriptions_url;
      return newState;

    case t.GMAPS_GEOLOCATION_GIT_REQUEST:
      return state;

    case t.GMAPS_GEOLOCATION_GIT_SUCCESS:
      newState = objectAssign({}, state);
      const ld = action.locationData;
      newState.lat = ld.results[0].geometry.location.lat;
      newState.lng = ld.results[0].geometry.location.lng;
      return newState;

    case t.GMAPS_GEOLOCATION_GIT_FAILED:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return state;

    default:
      return state;
  }
}
