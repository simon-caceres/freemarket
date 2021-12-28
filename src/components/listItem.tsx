import React from "react";
import {ItemCard} from '../components';
interface Product {
    id?: string;
    title?: string;
    thumbnail?: string;
}

interface Items {
    items: Array<Product>
}

const ListItem = ({ items }: Items ) => {
    return (
        <>
            {
                items.map((item: Product, i: number) => (
                    <ItemCard krey={i} item={item} />
                ))
            }
        </>
    );
};

export default ListItem;