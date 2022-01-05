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
    const navigateToItemInfo = (evt: any, item_id: number) => {
        evt.preventDefault();
    
        return window.location.replace(`/items/${item_id}`)
    };
    return (
        <div className="row mt-4">
            {
                items.map((item: Product, i: number) => (
                    <ItemCard key={i} item={item} navigateToItemInfo={navigateToItemInfo} />
                ))
            }
        </div>
    );
};

export default ListItem;