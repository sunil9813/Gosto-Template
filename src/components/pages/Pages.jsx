import React from "react"
import { Header } from "../common/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { Footer } from "../common/Footer"
import { Details } from "../home/details/Details"

export const Pages = ({ cartItems }) => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home cartItems={cartItems} />
          </Route>
          <Route exact path='/cart/:id'>
            <Details />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
