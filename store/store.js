import { createStore, combineReducers } from 'redux';
import {register} from '@reducer/load';
import {updateStore} from '@reducer/updateStore';


const store = combineReducers(
    { 
        register : register,
        state : updateStore
    }
);

const configureStore = () => {
    return createStore(store);
}
export default configureStore;