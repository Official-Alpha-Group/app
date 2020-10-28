import * as actions from '@actions/actions';

const intitalState = { captchaUri: null, csrf: null, sessionId: null,error: null};
export function load (state = intitalState, action) {
    if (action.type === actions.loadRegisterActivity) {
        const response = fetch('http://192.168.29.237/home/load_register_activity')
            .then((response) => {return response.json(); })
            .then((data) => {
                return {
                    ...state,
                    captchaUri: data.captcha_image
                };
            })
            .catch((error) => { return { error: "UNKNOWN_ERROR" }; })
            return response;
    } else {
        return state;
    }
}