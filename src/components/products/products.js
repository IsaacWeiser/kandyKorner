import { useEffect, useState } from "react";


export const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:8088/products?_sort=productTypeId&_expand=productType").then((prods)=>{
            return prods.json()
        }).then((prodObjs)=> {
            setProducts(prodObjs)
        })
    }, [])


    return (
        <>
        <h2>products</h2>

        {
            products.map((product)=>{
                return <p key={`product--${product.id}`}>{`${product.name}: 
                id: ${product.id} 
                type: ${product.productType.name}
                price: ${product.price}`}</p>
            })
        }        
        </>
    )

}