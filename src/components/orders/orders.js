import { useState, useEffect } from "react";

export const OrdersList = () => {

    const [orders, updateOrders] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8088/purchases?purchasedBy=2&&_expand=products`)
        .then((orders)=> orders.json())
        .then((data)=> updateOrders(data))
    },[])


    return (
        <>
        <h2>your orders</h2>
        <ul>
            {
                orders.map((orderObj)=>{
                    console.log(orderObj)
                    return <li key={`purchase--${orderObj.id}`}>
                        {`product ${orderObj.products?.name}, price: ${orderObj.products?.price}`}
                    </li>
                })
            }
        </ul>
        
        </>
    )
}