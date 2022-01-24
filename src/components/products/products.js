import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const ProductList = () => {
    const [products, setProducts] = useState([]);

    

    useEffect(()=> {
        fetch("http://localhost:8088/products?_sort=productTypeId&_expand=productType").then((prods)=>{
            return prods.json()
        }).then((prodObjs)=> {
            setProducts(prodObjs)
        })
    }, [])



    const [purchase, setpurch] =useState([]);
    const history = useHistory()

    const purchItem = (evt)=>{
        evt.preventDefault()

        const purch = {
      purchasedBy: localStorage.getItem("honey_customer") > 3? Math.floor((Math.random()*3)+1) : localStorage.getItem("honey_customer"),
      soldBy: Math.floor((Math.random()*3)+1),
      productsId: parseInt(evt.target.id.slice(5)),
      totalPrice: products.find(productObj=>productObj.id === parseInt(evt.target.id.slice(5))).price
        }

        //console.log(JSON.stringify(products.find(productObj=>productObj.id === parseInt(evt.target.id.slice(5))).price))

        //console.log(JSON.stringify(purch))

        setpurch(purch);

        console.log(JSON.stringify(purchase))

      return fetch(`http://localhost:8088/purchases`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purch)
        })
        .then(()=>history.push("/orders")) 
    }


    return (
        <>
        <h2>products</h2>

        {
            products.map((product)=>{
               return <>
                <p key={`product--${product.id}`}>{`${product.name}: 
                id: ${product.id} 
                type: ${product.productType.name}
                price: ${product.price}`}</p>
                <button id={`btn--${product.id}`} onClick={purchItem}>Purchase</button>
                </>
            })
        }        
        </>
    )

}