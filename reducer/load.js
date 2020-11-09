import * as actions from '@actions/actions';

const intitalState = { captchaUri: null, csrf: null, sessionId: null, error: null };
export  function load(state = intitalState, action) {
    switch (action.type) {
        case actions.verifyOtp.type:
            action.payload = JSON.parse(action.payload);
            let response = fetch('http://192.168.43.107/home/verify_otp',{
                method : 'GET',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body:JSON.stringify({
                      otp:action.otp,
                      csrfToken: action.payload.csrfToken,
                      sessionId: action.payload.sessionId,
                  })
            })
            .then((response) => { return (response.json()); })
            .then((data) => {
                return {
                    ...state,
                    error:data.error,
                    token:data.token}
            });
            return response;
        case actions.sendOtp.type:
            action.payload = JSON.parse(action.payload);
            response = fetch('http://192.168.43.107/home/send_otp',{
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
                    error:data.error,
                    otpSent:data.otpSent,
                    csrfToken:data.csrfToken
                };
            })
            .catch((exception) => { console.log(exception.message);} );
            return response;
        case actions.loadRegisterActivity.type:
             response = fetch('http://192.168.43.107/home/load_register_activity',{
                    method : 'GET'
             })
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
                .catch((exception) => { 
                    console.log(exception.message);
                    return{
                        ...state,
                        error : 'Cannot Connect to Server.'
                    }
                 })
            return response;
        default:
            return state;
    }
}