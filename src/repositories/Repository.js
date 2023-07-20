import axios from 'axios';
const baseDomain = 'http://localhost:4000'; // API for products
const baseDomainApi = 'http://localhost:4000'; // API for products
//export const baseAppUrl = `http://localhost:9001`;
export const baseAppUrl = `http://localhost:3000`;
export const baseUrl = `${baseDomain}`;
export const baseUrlApi = `${baseDomainApi}`;
export const customHeaders = {
    Accept: 'application/json',
    //"Authorization" : `Bearer ${getLogInfo()}`
};
export default axios.create({
    baseUrl,
    //withCredentials: true,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
