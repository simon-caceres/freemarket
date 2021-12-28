import axios from "axios";
import { BASEURL } from "./helper";

const SEARCH: Function = (query: string) => { return `/sites/MLA/search?q=:${query !== undefined ? query : 'query'}`};
const ITEMDETAIL: Function = (id: string) => {return `/items/${id}`};

const getBaseData = async (loadingState: Function, query?: string) => {
    const searchable: any = query || undefined;
    loadingState(true);
    try {
        const res = await axios.get(`${BASEURL}${SEARCH(searchable)}`);
        if (res.status === 200 || res.status === 201) {
            const { data: { results } } = res;
            loadingState(false);
            return results;
        } else {
            loadingState(false);
            return []
        }
    } catch (error) {
        console.warn(error)
        loadingState(false);
        return error;
    }
};

const getItemDetail = async (loadingState: Function, id: string) => {
    loadingState(true);
    try {
        const res = await axios.get(`${BASEURL}${ITEMDETAIL(id)}`);
        if (res.status === 200 || res.status === 201) {
            const { data: { results } } = res;
            loadingState(false);
            return results;
        } else {
            loadingState(false);
            return []
        }
    } catch (error) {
        console.warn(error)
        loadingState(false);
        return error;
    }
}

export {
    getBaseData,
    getItemDetail,
}