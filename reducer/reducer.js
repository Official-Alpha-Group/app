import * as actions from '@actions/actions';

const intitalState = { captchaUri: null, csrf: null, sessionId: null, error: null };
export function load(state = intitalState, action) {
    switch (action.type) {
        case actions.sendOtp.type:
            action.payload = JSON.parse(action.payload);
            let response = fetch('http://192.168.29.237/home/send_otp',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body:JSON.stringify({
                    number:action.payload.number,
                    csrfToken: action.payload.csrfToken,
                    sessionId: action.payload.sessionId,
                    captchaText:action.payload.captchaText
                })
            })
            .then((response) => { return (response.json()); })
            .then((data) => {
                return {
                    ...state,
                    response:data.response,
                    csrfToken:data.csrfToken
                };
            })
            .catch((exception) => { console.log(exception.message);} );
            return response;
        case actions.loadRegisterActivity.type:
             response = fetch('http://192.168.29.237/home/load_register_activity')
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
                .catch((exception) => { console.log(exception); })
            return response;
        default:
            return state;
    }
}