import axios from 'axios';
import { Reducer } from 'redux';

/**
 * =========================================================
 * ACTIONS
 * =========================================================
 */

//   TODO:
//   - Implement getCountries

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/countries.json');
      const data = await response.json();
      console.log(data);
      dispatch({ type: 'COUNTRIES_RECEIVED', payload: data });
    } catch (err) {
      console.log('errr');
    }
  };
};
//   - Use Axios or fetch to get the countries from `/api/countries.json`
//   - Store the result in the reducer

//   TODO:
//   - Implement setCountry
export const setCountry = (country: string) => ({
  type: 'SET_COUNTRY',
  payload: country,
});
//   - Store the country in the reducer

/**
 * =========================================================
 * REDUCER
 * =========================================================
 */

export interface IAppState {
  //    TODO:
  //    - Implement countries as an array of strings
  countries: string[];
  //    - Implement country as a string
  country: string;
}

// TODO: Initialize app state
const initialState: IAppState = {
  countries: [],
  country: '',
};

export const reducer: Reducer<IAppState> = (state = initialState, action) => {
  switch (action.type) {
    //    TODO:
    //    - Implement case COUNTRIES_RECEIVED
    case 'COUNTRIES_RECEIVED':
      return { ...state, countries: action.payload };
    //    - Store the countries in the reducer

    //    TODO:
    //    - Implement case SET_COUNTRY
    case 'SET_COUNTRY':
      return { ...state, country: action.payload };
    //    - Store the country in the reducer
    default:
      return state;
  }
};
