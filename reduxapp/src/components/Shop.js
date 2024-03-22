import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actionCreators} from '../state/index'	
import { bindActionCreators } from 'redux'

const Shop = () => {
  const balance = useSelector(state => state.amount)
  const dispath = useDispatch()
  const {withDrawMoney, depositMoney} = bindActionCreators(actionCreators,dispath)

  return (
    <div>
        <h2 className='my-3'>Deposit/Withdraw Money</h2>
        <div className="btn btn-primary mx-2" onClick={()=>{withDrawMoney(100)}}>-</div>
        Update Balance ({balance})
        <div className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</div>
    </div>
)
}

export default Shop