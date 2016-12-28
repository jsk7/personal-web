import * as types from '../constants/actionTypes';
import 'whatwg-fetch';


// example of a thunk using the redux-thunk middleware
export function fetchGithubProfileData() {

  return dispatch => {
  // Reducers may handle this to set a flag like isFetching
  dispatch({ type: types.GITHUB_PROFILE_REQUEST });

  // Perform the actual API call
  fetch('https://api.github.com/users/jsk7')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      dispatch({ type: types.GITHUB_PROFILE_SUCCESS, value: json});
      return json.location;
    }).then(function(location) {
      dispatch(fetchGeolocationData(location));
    }).catch(function(err) {
      console.log(err);
      return dispatch({ type: types.GITHUB_PROFILE_FAILED });
    });
  };
}

export function fetchGeolocationData(stringPlace) {
  console.log("executed");
  return dispatch => {
  // Reducers may handle this to set a flag like isFetching
  console.log("executed2");

  dispatch({ type: types.GMAPS_GEOLOCATION_GIT_REQUEST });

  // Perform the actual API call
  console.log('https://maps.googleapis.com/maps/api/geocode/json?address=' + stringPlace);
  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + stringPlace)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return dispatch({ type: types.GMAPS_GEOLOCATION_GIT_SUCCESS, locationData: json});
    }).catch(function(err) {
      console.log(err);
      return dispatch({ type: types.GMAPS_GEOLOCATION_GIT_FAILED });
    });
  };
}
