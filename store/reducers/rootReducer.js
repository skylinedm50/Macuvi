import authReducer from './authReducer';
import appReducer from './appReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    project: appReducer,
    firestore: firestoreReducer
})

export default rootReducer;

