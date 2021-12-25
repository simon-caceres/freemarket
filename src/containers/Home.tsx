import React, {useEffect, useState} from "react";
import axios from "axios";
import { ListItem } from "../components";

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        setLoading(true);
        try {
            const res = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=:query');
            if (res.status === 200 || res.status === 201) {
                const {data : {results}} = res;
                setItems(results);
                setLoading(false);
            } else {
                console.log(res)
                setLoading(false);
            }
        } catch (error) {
            console.warn(error)
            setLoading(false);
        }
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