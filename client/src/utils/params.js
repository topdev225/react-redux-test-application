console.log('NODE_ENV', process.env.NODE_ENV);
const PARAM1 = process.env.PARAM1;
console.log('PARAM1', PARAM1);
const PARAM2 = process.env.PARAM2;
console.log('PARAM2', PARAM2);
const basename = (PARAM1 && PARAM2) ? `/${PARAM1}/${PARAM2}` : '';

export function withBasename(url) {
    return `${basename}${url}`;
}