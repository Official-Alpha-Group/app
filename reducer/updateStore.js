import * as actions from '@actions/actions';
export function updateStore(state = {}, action) {
    switch (action.type) {
        case actions.updateStore.type:
            return JSON.parse(action.payload);
        default:
            return state;

    }
}