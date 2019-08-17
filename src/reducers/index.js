import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {ProductReducer as Product} from './ProductReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    Product
  });
