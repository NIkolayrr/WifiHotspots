import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { Map } from '../pages/map/map'
import { NewLocation } from '../pages/new-location/new-location'

const Links = () => {
  return (
    <nav className='navigation'>
      <div className='logo'>
        {' '}
        <Link to='/'>WifiHotspots</Link>
      </div>
      <ul>
        <li>
          <Link to='/map'>Map</Link>
        </li>
        <li>
          <Link to='/location'>Add Location</Link>
        </li>
      </ul>
    </nav>
  )
}

const Routes = () => {
  return (
    <Switch>
      <Route path='/about'>
        <h1>About</h1>
      </Route>
      <Route path='/location'>
        <NewLocation />
      </Route>
      <Route path='/map'>
        <Map />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export function Nav() {
  return (
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
      <Links />
      <Routes />
    </Router>
  )
}
