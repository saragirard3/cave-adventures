import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Balance = () => {
    const { balance } = useContext(AppContext);
    // const totalExpenses = purchase.reduce((total, item) => {
    //     return (total += (item.cost));
    // }, 0);

    // const totalMoney = totalMoney - totalExpenses;

    return (
        <div className='alert alert-warning'>
            <span>Money Bag: {balance}</span>
        </div>
    );
};

export default Balance;