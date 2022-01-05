import React, {useEffect, useState} from "react";
import {ItemCard, Pagination} from '../components';
interface Product {
    id?: string;
    title?: string;
    thumbnail?: string;
}
interface Items {
    items: Array<Product>
}

const ListItem = ({ items }: Items ) => {
    const totalRecords = items.length;
    const pageNeighbours = 0;
    const pageLimit =  4;
    const [currentItems, setCurrentItems ] = useState(items);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const navigateToItemInfo = (evt: any, item_id: number) => {
        evt.preventDefault();
    
        return window.location.replace(`/items/${item_id}`)
    };

    const onPageChanged = (data: any) => {
        const { currentPage: currPage, totalPages: totalPag, pageLimit } = data;
        console.log(data)
        const offset = (currentPage - 1) * pageLimit;
        const newItems: any = items.slice(offset, offset + pageLimit);
    
        setCurrentPage(currPage);
        setCurrentItems(newItems);
        setTotalPages(totalPag);
    }

    useEffect(() => {
        if (items.length) {
            setTotalPages(Math.floor(items.length / 4))
            onPageChanged({
                currentPage: 1,
                pageLimit: 4,
                totalPages: Math.floor(items.length / 4),
                totalRecords: items.length,
            })
        }
    }, [items])

    return (
        <div className="row justify-center mt-4 p-4">
            {
                currentItems.map((item: Product, i: number) => (
                    <ItemCard key={i} item={item} navigateToItemInfo={navigateToItemInfo} />
                ))
            }
            <div className="col-12">
            {
                items && (
                    <Pagination 
                        totalRecords={totalRecords}
                        totalPages={totalPages}
                        pageNeighbours={pageNeighbours}
                        currentPage={currentPage}
                        pageLimit={pageLimit}
                        onPageChanged={onPageChanged}
                    />
                )
            }
            </div>
            
        </div>
    );
};

export default ListItem;