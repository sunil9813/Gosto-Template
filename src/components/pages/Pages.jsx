import React from "react"
import { Header } from "../common/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { Footer } from "../common/Footer"

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
