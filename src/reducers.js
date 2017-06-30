import { combineReducers } from 'redux';
import { SET_SEARCH_RESULT, FETCH_SEARCH_REJECTED } from './services/actions';

const initialState = {
  searchResult: []
};

function app(state = initialState , action) {
  switch (action.type) {
    case FETCH_SEARCH_REJECTED:
    case SET_SEARCH_RESULT:
      return {
        searchResult: action.searchResult
      };
    default:
      return state;
  }
}

const autoCompleteApp = combineReducers({
  app
});

export default autoCompleteApp;