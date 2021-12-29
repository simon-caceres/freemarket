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
        <div className="row mt-4">
            {
                items.map((item: Product, i: number) => (
                    <ItemCard krey={i} item={item} />
                ))
            }
        </div>
    );
};

export default ListItem;