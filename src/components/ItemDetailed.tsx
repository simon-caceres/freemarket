import React from "react";

const ItemDetailed = ({ info }: any) => {
    const {
        condition,
        base_price,
        initial_quantity,
        available_quantity,
        thumbnail,
        title,
        plain_text
    } = info;
    return (
        <div className="card p-5">
            <div className="row">
                <div className="col-sm-6 text-center" style={{height: '50vh'}}>
                    <img 
                        src={thumbnail} 
                        className="card-img-top"
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            margin: 'auto',
                            objectFit: 'contain',
                        }}
                        alt="..." 
                    />
                </div>
                <div className="col-sm-6">
                    <p className="card-text"><small className="text-muted">{condition} - {initial_quantity - available_quantity} vendidos </small></p>
                    <h5 className="card-title">{title}</h5>
                    <h2 className="card-text">$ {base_price}</h2>
                    <button className="btn btn-primary mt-4">Comprar</button>
                </div>
            </div>
            <div className="card-body mt-4 pr-4">
                <h5 className="card-title">Descripción del producto: </h5>
                <p className="card-text text-justify">{plain_text}</p>
            </div>
        </div>
    )
};

export default ItemDetailed;