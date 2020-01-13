
import {createStore, applyMiddleware, compose} from 'redux'
import { api } from './middleware/api'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store =createStore( 
    composeEnhancers(
        applyMiddleware(api)
      )
)