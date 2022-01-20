import React from "react"
import { Route } from "react-router-dom"
import { NewEmployeeForm } from "./employees/employees.js"
import {LocationList} from './locations/locations.js'
import {ProductList} from './products/products.js'

export const ApplicationViews = () => {
    return (
        <>
       
            <Route path="/employees/create">
                <NewEmployeeForm />
            </Route>
       
            <Route exact path="/locations">
                <LocationList />
            </Route>
       
            <Route exact path="/products">
                <ProductList />
            </Route>
            
            
        </>
    )
}