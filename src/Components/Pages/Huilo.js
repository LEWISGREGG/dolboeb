import { Button } from '@material-ui/core'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Idex from './Idex';
import Navbar from './Navbar';
import { auth, provider } from "../Pages/firebase";
import { selectUser, login, logout } from "../../features/userSlice";
import {useDispatch, useSelector } from 'react-redux';
import Login from './Login';


function Huilo() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);




  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <>
      <Navbar />
    <div>
      <Link to="/pricing">
                    <Button variant="contained" color="primary" className="send" >
                      Search for plan
                    </Button></Link>
                    <Link to="/poltmessage">
                    <Button variant="contained" color="primary" className="send" >
                      Search for plan
                    </Button></Link>
    </div>
          <Idex />
  </>
   )}
    </div>
  )
}

export default Huilo
