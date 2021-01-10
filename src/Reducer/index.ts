import { combineReducers, Reducer } from 'redux';

import SampleReducer from './SampleReducer';

const rootReducer: Reducer = combineReducers({
    SampleReducer: SampleReducer,
})

export default rootReducer;