import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import StudentPage from './pages/StudentPage'
import HousePage from './pages/HousePage'

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
              <Link to="/house">Houses</Link>
            </li>
            <li>
              <Link to="/student">Students</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/house" component={HousePage}></Route>
        <Route exact path="/student" component={StudentPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
