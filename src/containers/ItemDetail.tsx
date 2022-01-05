/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../services/Index";
import { ItemDetailed, Spinner } from "../components";
import { ItemDetailedType } from "../types";

const ItemDetail = () => {
    const params  = useParams()
    const { id }: any = params

    const [info, setInfo] = useState({} as ItemDetailedType);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const res: ItemDetailedType = await getItemDetail(setLoading, id);
        setInfo(res);
    }

    const dataCallBack = useCallback(
        () => {
            getData();
    },[]);

    useEffect(() => {
        dataCallBack();
    }, [dataCallBack])

    return (
        <div className="container pt-5">
            {
                loading 
                ? <Spinner /> 
                : <ItemDetailed info={info} />
            }
        </div>
    );
};

export default ItemDetail;