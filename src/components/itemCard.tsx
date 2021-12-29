import React from "react";

const ItemCard = ({ item, key }: any) => {
    const {
        id,
        title,
        thumbnail,
        price,
        address: {state_name}
    } = item;

    const navigateToItemInfo = (evt: any) => {
        evt.preventDefault();
    
        return window.location.replace( `/items/${id}`)
    };

    return (
        <div className="col-md-offset-1 col-md-6 col-sm-12">
            <div 
                key={key}
                className="card mb-3 box p-2"
                onClick={(evt) => navigateToItemInfo(evt)}
            >
                <div className="row g-0">
                    <div className="col-md-4 col-md-offset-3">
                        <div className="row justify-content-center" style={{height: 250}}>
                            <img 
                                src={thumbnail} 
                                className="text-center" 
                                style={{
                                    maxHeight: '100%',
                                    maxWidth: 200,
                                    margin: 'auto',
                                    resize: 'inline'
                                }} 
                                alt="..." 
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body mt-5">
                            <h5 className="card-title">$ {price}</h5>
                            <p className="card-text">{title}.</p>
                        </div>
                    </div>
                    <div className="col-md-2 pt-2">
                        <p className="card-text mt-5">
                            <small className="text-muted">{state_name}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemCard;