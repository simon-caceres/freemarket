import React, {useEffect, useState} from "react";
import { ListItem } from "../components";
import { getBaseData } from "../services/Index";

const Home = () => {
    const [items, setItems] = useState([] as any[]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const res: any = await getBaseData(setLoading);
        setItems(res);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="App">
            {
                loading 
                    ? <h1>Cargando ....</h1>
                    : <ListItem items={items} />
            }
        </div>
    );
};

export default Home;