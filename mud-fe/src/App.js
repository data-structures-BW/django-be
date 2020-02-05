import React from 'react'
import Login from "./components/login/Login"
import ClientRegistration from "./components/registration/ClientRegistration"
import { useDispatch } from 'react-redux';
import { getAllRooms } from '../src/actions/roomActions';
import './App.css'
import NavBar from './components/navbar/Navbar'


import { Switch, Route } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  dispatch(getAllRooms())
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={ClientRegistration} />
      </Switch>

     
    </div>
  )
}
export default App