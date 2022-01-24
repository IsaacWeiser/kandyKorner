import {useState, useEffect}from "react";

export const CustomerList = () => {
    const [customers, setCustomer] = useState([])

    useEffect(()=>{
        return fetch(`http://localhost:8088/customers`)
        .then((custs)=> custs.json()).then((custs)=> setCustomer(custs))
    },[])

    return (
        <>
        <h2>customers</h2>
        <ul>
        {
            customers.map(
                (customer)=>{
                    console.log("yo" +customer)
                    return <li>{customer.name}</li>                    
                }
            )
        }
        </ul>
        </>
    )

}