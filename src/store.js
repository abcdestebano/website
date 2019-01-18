import { createStore, combineReducers } from 'redux';
import languageReducer from './reducers/language'


const appReducers = combineReducers({
   languageReducer,
})


export default function configureStore(initialState) {

   const store = createStore(
      appReducers,
      initialState,
   )

   return store
}
