import React from "react";
import { itemStr } from "../customization";

const {LOADING} = itemStr;

const Spinner = () => (
    <div className="spinner-center">
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">{LOADING}</span>
        </div>
        <div className="spinner-grow ml-2" role="status">
            <span className="visually-hidden">{LOADING}</span>
        </div>
        <div className="spinner-grow ml-2" role="status">
            <span className="visually-hidden">{LOADING}</span>
        </div>
    </div>
);

export default Spinner;