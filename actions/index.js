export const CONNECTED =  'CONNECTED';
export const NOT_CONNECTED = 'NOT_CONNECTED';
export const LOGIN_SUCESS = 'LOGIN_SUCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function isConnected() {
    fetch('http://example.com/')
        .then((response) => { return { type: CONNECTED }})
        .catch((error) => { return { type: NOT_CONNECTED }; })
}

export function load_register_activity(){
    fetch('http://192.168.29.237/home/')
        .then((response) => { return { type: CONNECTED }})
        .catch((error) => { return { type: NOT_CONNECTED }; })
} 
export async function send_otp(){
    
}