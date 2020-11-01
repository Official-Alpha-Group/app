import { createStore, combineReducers } from 'redux';
import {load} from '@reducer/load';
import {updateStore} from '@reducer/updateStore';


const store = combineReducers(
    { 
        promise : load,
        state : updateStore
    }
);

const configureStore = () => {
    return createStore(store);
}
export default configureStore;