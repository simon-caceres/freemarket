import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../services/Index";
import { ItemDetailed } from "../components";

const ItemDetail = () => {
    const params = useParams()
    const {id}: any = params

    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const res: any = await getItemDetail(setLoading, id);
        setInfo(res);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="container pt-5">
            {
                loading ? (
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <ItemDetailed info={info} />
                )
            }
        </div>
    );
};

export default ItemDetail;