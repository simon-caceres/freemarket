import React from "react";
import { FORMATNUMBER } from "../helper";
import { itemStr } from "../customization";
import { InfoElement } from "../types";

const ItemDetailed = ({ info }: InfoElement) => {
    const {
        condition,
        base_price,
        initial_quantity,
        available_quantity,
        thumbnail,
        title,
        plain_text
    } = info;

    const { 
        itemDetail: {
            SELL,
            BUY,
            DESCR_PROD,
        },
        CONDITION: {
            NEW,
            USE,
        }
    } = itemStr;

    return (
        <div className="card p-5">
            <div className="row">
                <div className="col-sm-12 col-lg-8 text-center" style={{height: '50vh'}}>
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
                <div className="col-sm-12 col-lg-4 bordered p-4">
                    <p className="card-text"><small className="text-muted">{condition === 'new' ? NEW : USE} - {initial_quantity - available_quantity} {SELL} </small></p>
                    <h5 className="card-title">{title}</h5>
                    <h1 className="card-text mt-4">{FORMATNUMBER(base_price)}</h1>
                    <button className="btn btn-primary btn-block btn-lg mt-5">{BUY}</button>
                </div>
            </div>
            <div className="row">
                <div className="card-body mt-4 pr-4 col-sm-12 col-lg-8">
                    <h1 className="card-title">{DESCR_PROD}</h1>
                    <p className="card-text mt-4 text-justify">{plain_text}</p>
                </div>
                <div className="col-sm-12 col-lg-4"></div>
            </div>
        </div>
    )
};

export default ItemDetailed;