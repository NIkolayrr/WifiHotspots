import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home } from '../pages/home/home'

const Links = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
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
      <Route path='/users'>
        <h1>Users</h1>
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
