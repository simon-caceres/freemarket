import React, {useEffect, useState} from "react";
import { ListItem, Spinner } from "../components";
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
                    ? <Spinner />
                    : <ListItem items={items} />
            }
        </div>
    );
};

export default ItemSearch;