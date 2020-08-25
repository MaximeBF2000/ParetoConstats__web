import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import "./App.scss"

import EditPage from "./pages/EditPage"
import WatchPage from "./pages/WatchPage"
import Header from './components/Header'
import Navigation from "./components/Navigation"

export default function App() {
  // TODO : adapt edit function to firestore
  // TODO : fix performance error
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/edit"> <EditPage /> </Route>
        <Route exact path="/"> <WatchPage /> </Route>
        <Route path="*"> <Redirect to="/" /> </Route>
      </Switch>
    </BrowserRouter>
  )
}
