import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import WaterService from './components/WaterService'
import RailService from './components/RailService'
import DoorToDoor from './components/DoorToDoor'
import FlightService from './components/FlightService'
import Warehouse from './components/Warehouse'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Tracking from './components/Tracking'
import Error404 from './components/Error404'
import Payments from './components/Payments'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/warehouseservice" exact component={Warehouse} />
        <Route path="/airservice" exact component={FlightService} />
        <Route path="/doortodoorservice" exact component={DoorToDoor} />
        <Route path="/railservice" exact component={RailService} />
        <Route path="/waterservice" exact component={WaterService} />

        <Route path="/contact" exact component={Contact} />
        <Route path="/payment" exact component={Payments} />
        <Route path="/tracking" exact component={Tracking} />
        <Route exact component={Error404} />
      </Switch>
    </Router>
  )
}

export default App
