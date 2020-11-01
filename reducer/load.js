import * as actions from '@actions/actions';

const intitalState = { captchaUri: null, csrf: null, sessionId: null, error: null };
export  function load(state = intitalState, action) {
    switch (action.type) {
        case actions.verifyOtp.type:
            let response = fetch('http://192.168.29.238/home/send_otp',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body:JSON.stringify({
                      
                  })
            });
            return response;
        case actions.sendOtp.type:
            action.payload = JSON.parse(action.payload);
            response = fetch('http://192.168.29.238/home/send_otp',{
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
                console.log(data);
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
             response = fetch('http://192.168.29.238/home/load_register_activity',{
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