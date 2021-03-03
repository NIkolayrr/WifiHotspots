import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { Map } from '../pages/map/map'

const Links = () => {
  return (
    <nav className='navigation'>
      <div className='logo'>
        {' '}
        <Link to='/'>WifiHotspots</Link>
      </div>
      <ul>
        <li>
          <Link to='/about'>About</Link>
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
        <h1>Add location</h1>
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
    <Router>
      <Links />
      <Routes />
    </Router>
  )
}
