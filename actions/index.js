export const CONNECTED =  'CONNECTED';
export const NOT_CONNECTED = 'NOT_CONNECTED';

export function isConnected() {
    fetch('http://192.168.29.237/Nacl-Dev-Program/main/test/')
        .then((response) => { return { type: CONNECTED }})
        .catch((error) => { return { type: NOT_CONNECTED }; })
}