const BASEURL: string = 'http://127.0.0.1:6060';

const FORMATNUMBER: Function = (num: number | bigint) => {
    return `$ ${new Intl.NumberFormat(['ban', 'id'], { 
        maximumFractionDigits: 2 
    }).format(num)}`;
}

export {
    BASEURL,
    FORMATNUMBER,
};