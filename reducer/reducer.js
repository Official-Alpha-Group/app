import * as actions from '@actions/actions';

const intitalState = { captchaUri: null, csrf: null, sessionId: null, error: null };
export function load(state = intitalState, action) {
    switch (action.type) {
        case actions.sendOtp.type:
            return fetch('http://192.168.29.237/home/send_otp',{
                method : 'POST',
                body:JSON.stringify({
                    number:action.payload.number,
                    csrfToken: action.payload.csrfToken,
                    sessionId: action.payload.sessionId,
                    captchaText:action.payload.captchaText
                })
            })
            .then((response) => { return response.json(); })
            .then((data) => {
                console.log(Json.parse(data));
                return data;
            })
            .catch((exception) => { console.log();} );
            break;
        case actions.loadRegisterActivity.type:
            const response = fetch('http://192.168.29.237/home/load_register_activity')
                .then((response) => { return response.json(); })
                .then((data) => {
                    return {
                        ...state,
                        captchaUri: data.captchaImage,
                        csrfToken : data.csrfToken,
                        sessionId : data.sessionId,
                        error : data.error
                    };
                })
                .catch((exception) => { alert(exception); })
            return response;
        default:
            return state;
    }
}