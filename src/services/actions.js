export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
export const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT';
export const FETCH_SEARCH_REJECTED = 'FETCH_SEARCH_REJECTED';

export const fetchSearchResult = searchTerm => ({ type: FETCH_SEARCH_RESULT, searchTerm });

export const fetchSearchRejected = () => ({ type: FETCH_SEARCH_REJECTED, searchResult: [], error: true });

export const setSearchResult = searchResult => ({ type: SET_SEARCH_RESULT, searchResult });