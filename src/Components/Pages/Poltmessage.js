
import Chat from "./Chat";
import "./Poltmessage.css";
import Sidebar from "./Sidebar";
import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from "../../features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import Huilo from "./Huilo";

function Poltmessage() {

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

    <div className="poltmessage">
      <Sidebar />
      <Chat />
    </div>
       )}
  </div>
 )
}

export default Poltmessage
