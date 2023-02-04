import { configureStore  } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer';

const composeEnhancers = composeWithDevTools()

const store  = configureStore({reducer : rootReducer, composeEnhancers})

export default store;