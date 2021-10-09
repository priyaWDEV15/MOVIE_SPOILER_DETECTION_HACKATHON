
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import db from './components/firebase-config'



 
function App() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    const auth = getAuth()
    onAuthStateChanged(auth, user =>{
      setUser(user)
    })
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}



export default App;
