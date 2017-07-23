import * as t from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import dateFns from 'date-fns';

export default function githubProfile(state = initialState.github, action) {
  let newState;

  switch (action.type) {

    case t.GITHUB_PROFILE_SUCCESS: {
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
      return newState;
    }

    case t.GITHUB_REPOS_SUCCESS:
      newState = objectAssign({}, state);
      newState.repos = action.repos;
      return newState;

    case t.GITHUB_LOVEDREPOS_REQUEST:
      newState = objectAssign({}, state);
      return newState;

    case t.GITHUB_LOVEDREPOS_SUCCESS:
      newState = objectAssign({}, state);
      newState.loved_repos = action.repos;
      return newState;


    case t.GMAPS_GEOLOCATION_GIT_SUCCESS: {
      newState = objectAssign({}, state);
      const ld = action.locationData;
      newState.lat = ld.results[0].geometry.location.lat;
      newState.lng = ld.results[0].geometry.location.lng;
      return newState;
    }

    default:
      return state;
  }
}
