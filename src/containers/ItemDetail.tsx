import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
    const params = useParams()
    const {id} = params
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{id}.</p>
            </div>
        </div>
    );
};

export default ItemDetail;