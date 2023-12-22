import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';


const Purchase = (props) => {
    const { dispatch } = useContext(AppContext);

    const submitEvent = () => {

        const purchaseItem = {
            item: props.item,
            cost: props.cost,
        };
    
        dispatch({
            type: 'PURCHASE',
            payload: purchaseItem,
        });
    };

    const cancelEvent = () => {

        const purchaseItem = {
            item: props.item,
            cost: props.cost,
        };
    
        dispatch({
            type: 'CANCEL',
            payload: purchaseItem,
        });
    };


    return (
        <div className="container">
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Purchase: {props.item}</label>
                </div>
                
                <div>
                    Would you like to purchase {props.item}?
                </div>

                <button className="btn btn-primary" onClick={cancelEvent} style={{ marginLeft: '2rem' }}>
                    No Thanks
                </button>

                <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                    Purchase!!
                </button>
            </div>
        </div>

    );
};

export default Purchase;