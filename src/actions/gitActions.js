import * as types from '../constants/actionTypes';
import 'whatwg-fetch';
import { showLoading, hideLoading } from 'react-redux-loading-bar';



// example of a thunk using the redux-thunk middleware
export function fetchGithubProfileData() {

  return dispatch => {
  // Reducers may handle this to set a flag like isFetching
  dispatch(showLoading());
  dispatch({ type: types.GITHUB_PROFILE_REQUEST });

  // Perform the actual API call
  fetch('https://api.github.com/users/jsk7')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      dispatch({ type: types.GITHUB_PROFILE_SUCCESS, value: json});
      // we're not using dispatch(hideLoading()) since we still want gmaps data to load with fetchGeolocationData
      return json.location;
    }).then(function(location) {
      dispatch(fetchGeolocationData(location));
    }).catch(function(err) {
      console.log(err);
      dispatch({ type: types.GITHUB_PROFILE_FAILED });
      return dispatch(hideLoading());
    });
  };
}

export function fetchGeolocationData(stringPlace) {
  return dispatch => {
  // Reducers may handle this to set a flag like isFetching
  dispatch({ type: types.GMAPS_GEOLOCATION_GIT_REQUEST });

  // Perform the actual API call
  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + stringPlace)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      dispatch({ type: types.GMAPS_GEOLOCATION_GIT_SUCCESS, locationData: json});
      return dispatch(hideLoading());
    }).catch(function(err) {
      console.log(err);
      dispatch({ type: types.GMAPS_GEOLOCATION_GIT_FAILED });
      return dispatch(hideLoading());
    });
  };
}
