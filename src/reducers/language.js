import { CHANGE_LANGUAGE } from '../actions/actionTypes';

/**
 *
 *
 * @param {*} [state={}]
 * @param {*} action
 * @returns
 */
const languageReducer = (state = {}, action) => {
   console.log(state, action)
   switch (action.type) {
      case CHANGE_LANGUAGE:
         return { ...state, language: action.payload }
      default:
         return state
   }
}

export default languageReducer