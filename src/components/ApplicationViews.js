import React from "react"
import { Route } from "react-router-dom"
import { NewEmployeeForm } from "./employees/employees.js"
import {LocationList} from './locations/locations.js'
import {ProductList} from './products/products.js'
import { CustomerList } from "./customers/customers.js"
import { OrdersList } from "./orders/orders.js"
import { EmployeeList } from "./employees/employeeList.js"

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

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/orders">
                <OrdersList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>
            
            
        </>
    )
}