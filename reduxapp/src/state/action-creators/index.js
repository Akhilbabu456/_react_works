export const depositMoney= (amount)=>{
    return (dispatch)=>{
       dispatch({
           type: "DEPOSIT",
           payload: amount
       })
    }
}
export const withDrawMoney= (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: "WITHDRAW",
            payload: amount
        })
     }
}