import React, {useEffect, useState} from "react";
import { ListItem } from "../components";
import { getBaseData } from "../services/Index";

const ItemSearch = ({ search }: any) => {
    const [items, setItems] = useState([] as any[]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const res: any = await getBaseData(setLoading, search);
        setItems(res);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="container">
            {
                loading 
                    ? (
                        <div className="spinner-grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
                    : <ListItem items={items} />
            }
        </div>
    );
};

export default ItemSearch;