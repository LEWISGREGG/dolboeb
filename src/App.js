import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import Specialist from './Components/Pages/Specialist';
import Pricing from './Components/Pages/Pricing';
import Support from './Components/Pages/Support';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Cart from './Components/Pages/Cart';
import { selectUser, login, logout } from "./features/userSlice";
import HomeScreen from './Components/Pages/HomeScreen';
import { auth } from "./Components/Pages/firebase";
import Poltmessage from './Components/Pages/Poltmessage';
import Huilo from './Components/Pages/Huilo';
import VideoChatContainer from './VideoChatContainer'


function App() {





  return (
      <>
    
      <Router>   
        <Switch>
          <Route path='/' exact component={HomeScreen} />    
          <Route path='/specialist' component={Specialist} />          
          <Route path='/huilo' component={Huilo} />      
          <Route path='/poltmessage' component={Poltmessage} />  
          <Route path='/pricing' component={Pricing} />          
          <Route path='/support' component={Support} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/cart' component={Cart} />
          <Route path='/videoChatContainer' component={VideoChatContainer} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
