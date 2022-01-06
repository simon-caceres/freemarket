import axios from "axios";
import { BASEURL } from "../helper";

const SEARCH: Function = (query: string) => { return query ?  `/api/items?q=:${query}` : '/api/items'};
const ITEMDETAIL: Function = (id: string) => {return `/api/items/${id}`};

const getBaseData = async (loadingState: Function, query?: string) => {
    const searchable: any = query || undefined;
    loadingState(true);
    try {
        const res = await axios.get(`${BASEURL}${SEARCH(searchable)}`);
        if (res.status === 200 || res.status === 201) {
            const { 
                data: {
                    data: {
                        items
                    }  
                } 
            } = res;
            loadingState(false);
            return items;
        } else {
            loadingState(false);
            return []
        }
    } catch (error) {
        console.warn(error)
        loadingState(false);
        alert("!lo sentimos! ocurrio un error cargando los datos, porfavor intente mas tarde");
        return error;
    }
};

const getItemDetail = async (loadingState: Function, id: string, setState: Function) => {
    loadingState(true);
    try {
        const res = await axios.get(`${BASEURL}${ITEMDETAIL(id)}`);
        if (res.status === 200 || res.status === 201) {
            const { 
                data: {
                    data: {
                        item
                    }
                }
            } = res;
            setState(item);
            loadingState(false);
            return;
        } else {
            loadingState(false);
            setState([])
            return;
        }
    } catch (error) {
        console.warn(error)
        loadingState(false);
        alert("!lo sentimos! ocurrio un error, porfavor intente mas tarde");
        return error;
    }
}

export {
    getBaseData,
    getItemDetail,
}