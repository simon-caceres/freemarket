import React from "react";

interface AlertInterface {
    message: string;
    type: string;
    setShowAlert: Function
}

const Alert = ({message, type, setShowAlert}: AlertInterface) => {
    const alert = () => {
        return (
            <div className={`alert alert-${type} alert-dismissible`} role="alert">
                {message}
                <button 
                    type="button" 
                    onClick={() => setShowAlert(false)}
                    className="btn-close"
                />
            </div>
        );
    }

    return (
        <div className="alertContainer">
            {alert()}
        </div>
    )
};

export default Alert;