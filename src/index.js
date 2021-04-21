import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import firebase from './database/firebasedb'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import './components/css/App.css'

import App from './App'
import { createStore } from 'redux'
import { rootReducer } from './database/root'

const initialState = {}

const store = createStore(rootReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      createFirestoreInstance={createFirestoreInstance}
      dispatch={store.dispatch}
      config={{
        attachAuthIsReady: true,
      }}
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
)
