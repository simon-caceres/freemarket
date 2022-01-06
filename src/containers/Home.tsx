import React, {useEffect, useState} from "react";
import { ListItem, Spinner } from "../components";
import { getBaseData } from "../services/Index";
import { Product } from "../types";

const Home = () => {
    const [items, setItems] = useState([] as Product[]);
    const [loading, setLoading] = useState(true);
    
    const getData = async () => {
        const res: Product[] = await getBaseData(setLoading);
        console.log(res)
        setItems(res);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="container">
            {
                loading 
                    ?  <Spinner />
                    : <ListItem items={items} />
            }
        </div>
    );
};

export default Home;