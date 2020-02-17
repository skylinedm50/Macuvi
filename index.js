import React           from 'react';
import ReactDOM        from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider }    from 'react-redux';
import rootReducer     from './store/reducers/rootReducer';
import thunk           from 'redux-thunk'
import { reduxFirestore , getFirestore } from 'redux-firestore'
import { reactReduxFirebase , getFirebase  } from 'react-redux-firebase'
import FirebaseConfig  from './config/FirebaseConfig'

/// STYLES AND JS 
/// import './statics/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './statics/js/js/all.js'
import './statics/styles/css/style.css'


/// COMPONENTS
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(
                            rootReducer, 
                            compose ( 
                                       applyMiddleware(thunk.withExtraArgument({getFirebase , getFirestore})),
                                       reduxFirestore(FirebaseConfig),
                                       reactReduxFirebase(FirebaseConfig)   
                                    ) 
                        ) 
ReactDOM.render( <Provider store = {store} >
                    <App />
                 </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
