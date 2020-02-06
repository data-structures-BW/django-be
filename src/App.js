import React from 'react'
import Login from "./components/login/Login"
import ClientRegistration from "./components/registration/ClientRegistration"
import { useDispatch, useSelector } from 'react-redux';
import { getAllRooms } from '../src/actions/roomActions';
import './App.css'
import NavBar from './components/navbar/Navbar'
import World from './components/worldMap/world'



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
        <Route exact path='/game' component={World} />
      </Switch>

     
    </div>
  )
}
export default App