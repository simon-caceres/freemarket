const BASEURL: string = 'https://api.mercadolibre.com';

const FORMATNUMBER: Function = (num: number | bigint) => {
    return `$ ${new Intl.NumberFormat(['ban', 'id'], { 
        maximumFractionDigits: 2 
    }).format(num)}`;
}

export {
    BASEURL,
    FORMATNUMBER,
};