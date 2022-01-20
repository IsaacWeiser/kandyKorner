import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/ApplicationViews"

export const KandyKorner = () => {
    return (
        <>
        <Route
        render={() => {
            if (localStorage.getItem("honey_customer")) {
              return (
                <>
                  <NavBar />
                  <ApplicationViews />
                </>
              );
            } 
            else 
            {
                //<Login />
            }
          }}
          />
        </>
    )
}
