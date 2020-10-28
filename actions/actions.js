export const CONNECTED =  'CONNECTED';
export const UNKNOWN_ERROR = 'UNKNOWN ERROR OCCURED';

export function isConnected() {
    fetch('http://192.168.29.237/home/ping')
        .then((response) => { return { type: CONNECTED }})
        .catch((error) => { return { type: UNKNOWN_ERROR }; })
}

export const loadRegisterActivity =  { type:'load/register' } 
export const sendOtp = { 
    type:'network/send_otp' ,
    payload :null
} 
