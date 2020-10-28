import * as actions from '@actions/actions';

const intitalState = { captchaUri: null, csrf: null, sessionId: null, error: null };
export function load(state = intitalState, action) {
    switch (action.type) {
        case actions.sendOtp.type:
            console.log(action.payload);
            fetch('http://192.168.29.237/home/send_otp',{
                method : 'POST',
                body:JSON.stringify({
                    number:action.payload.number,
                    csrf_token: action.payload.csrfToken,
                    session_id: action.payload.sessionId,
                    captchaText:action.payload.captchaText
                })
            })
            .then((response) => { return response.json(); })
            .then((data) => console.log(data))
            .catch((error) => { alert(1); });
        case actions.loadRegisterActivity.type:
            const response = fetch('http://192.168.29.237/home/load_register_activity')
                .then((response) => { return response.json(); })
                .then((data) => {
                    return {
                        ...state,
                        captchaUri: data.captcha_image
                    };
                })
                .catch((error) => { alert(1); })
            return response;
        default:
            return state;
    }
}