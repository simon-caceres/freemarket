import React from "react";


type ListProducts = {
    items?: Products[];
}

interface Products {
    id?: string;
    title?: string;
    thumbnail?: string;
}

const ListItem = ({items}: ListProducts) => {
    console.log(items)
    return (
        <h1>Texto</h1>
    )
};

export default ListItem;