import React from "react";
import {ItemCard} from '../components';
import {createMemoryHistory} from 'history'
interface Product {
    id?: string;
    title?: string;
    thumbnail?: string;
}
interface Items {
    items: Array<Product>
}

const ListItem = ({ items }: Items ) => {
    const history = createMemoryHistory()
    const navigateToItemInfo = (evt: any, item_id: number) => {
        evt.preventDefault();
    
        return history.push( `/items/${item_id}`)
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