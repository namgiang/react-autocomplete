import { combineReducers } from 'redux';
import { SET_SEARCH_RESULT } from './services/actions';

const initialState = {
  searchResult: []
};

function app(state = initialState , action) {
  switch (action.type) {
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