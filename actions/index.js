export const CONNECTED =  'CONNECTED';
export const NOT_CONNECTED = 'NOT_CONNECTED';
export const IS_LOGGED_IN = true;

export function isConnected() {
    fetch('http://example.com/xyz')
        .then((response) => { return { type: CONNECTED }})
        .catch((error) => { return { type: NOT_CONNECTED }; })
}

export function click_register_activity(){
    fetch('http://example.com/xyz')
    .then((response) => { response.json();console.log(response.json()); })
    .then((data)=>{return data;})
    .catch((error) => { return { type: NOT_CONNECTED }; })
} 
