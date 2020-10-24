export const CONNECTED =  'CONNECTED';
export const NOT_CONNECTED = 'NOT_CONNECTED';

export function isConnected() {
    fetch('http://example.com/ping')
        .then((response) => { return { type: CONNECTED }})
        .catch((error) => { return { type: NOT_CONNECTED }; })
}
