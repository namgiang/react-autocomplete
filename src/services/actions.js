export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
export const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT';

export function fetchSearchResult(term) {
  return { type: FETCH_SEARCH_RESULT, searchTerm: term };
}

export const setSearchResult = searchResult => ({ type: SET_SEARCH_RESULT, searchResult });