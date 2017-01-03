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
      return json;
    }).then(function(json) {
      dispatch(fetchGeolocationData(json.location));
      dispatch(fetchGithubReposData(json.repos_url));
      dispatch(fetchGithubLovedReposData(json.subscriptions_url));
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
      return dispatch({ type: types.GMAPS_GEOLOCATION_GIT_SUCCESS, locationData: json});
    }).catch(function(err) {
      console.log(err);
      return dispatch({ type: types.GMAPS_GEOLOCATION_GIT_FAILED });
    });
  };
}


export function fetchGithubReposData(api_url) {
  return dispatch => {
  // Reducers may handle this to set a flag like isFetching
  dispatch({ type: types.GITHUB_REPOS_REQUEST });

  // Perform the actual API call
  fetch(api_url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return dispatch({ type: types.GITHUB_REPOS_SUCCESS, repos: json});
    }).catch(function(err) {
      console.log(err);
      return dispatch({ type: types.GITHUB_REPOS_FAILED });
    });
  };
}

export function fetchGithubLovedReposData(api_url) {
  console.log(api_url);
  return dispatch => {
  // Reducers may handle this to set a flag like isFetching
  dispatch({ type: types.GITHUB_LOVEDREPOS_REQUEST });

  // Perform the actual API call
  fetch(api_url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      dispatch({ type: types.GITHUB_LOVEDREPOS_SUCCESS, repos: json});
      return dispatch(hideLoading());
    }).catch(function(err) {
      console.log(err);
      dispatch({ type: types.GITHUB_LOVEDREPOS_FAILED });
      return dispatch(hideLoading());
    });
  };
}
