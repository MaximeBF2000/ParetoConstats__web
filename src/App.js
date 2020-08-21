import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import "./App.scss"

import EditPage from "./pages/EditPage"
import WatchPage from "./pages/WatchPage"
import Navigation from "./components/Navigation"

export default function App() {
  // TODO : Responsive design
  // TODO : add color selection for pie charts in add constat & edit constats
  // TODO : add localStorage OR BETTER firebase database
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        {/* Inverser les 2 routes pour la production */}
        <Route exact path="/edit"> <EditPage /> </Route>
        <Route exact path="/"> <WatchPage /> </Route>
        <Route path="*"> <Redirect to="/" /> </Route>
      </Switch>
    </BrowserRouter>
  )
}
