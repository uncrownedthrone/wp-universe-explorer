import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NewHouse from './pages/NewHouse'
import AllHousesPage from './pages/AllHousesPage'
import AllStudentsPage from './pages/AllStudentsPage'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Welcome to Hogwarts Enrollment</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/house/new">Create House</Link>
            </li>
            <li>
              <Link to="/house/:id">All Houses</Link>
            </li>
            <li>
              <Link to="/student/">All Students/Create Students</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/house/new" component={NewHouse}></Route>
        <Route exact path="/house/:id" component={AllHousesPage}></Route>
        <Route exact path="/student" component={AllStudentsPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
