import { createStore, combineReducers } from 'redux';
import {load} from '@reducer/reducer';


const store = combineReducers(
    { promise : load }
);

const configureStore = () => {
    return createStore(store);
}
export default configureStore;
