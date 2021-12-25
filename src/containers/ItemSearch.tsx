import React from "react";

const ItemSearch = ({ search }: any) => {
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{search}.</p>
            </div>
        </div>
    );
};

export default ItemSearch;