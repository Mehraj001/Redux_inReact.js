import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { actionCreators } from './state/index';
import { useSelector } from "react-redux";

const Shop = () => {
  const balance=useSelector(state=>state.amount);
  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch);
  // above is called destructing 
  return (
    <>
    <div  className="d-flex justify-content-center">
    <h1>Online Earning Details</h1>
    </div>
    <div className="d-flex justify-content-center">
    
      <div>
        <h2>Deposit/withdraw</h2>
        <button className="btn-primary mx-2" onClick={() => {depositMoney(100) }}> + </button>
        Update Balance ({balance})
        <button className="btn-primary mx-2" onClick={() => {withdrawMoney(100) }}> - </button>
      </div>
    </div>
    </>
  );
};

export default Shop;
