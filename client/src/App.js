import React, { useEffect } from 'react';
import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import { gapi } from 'gapi-script';

const clientId = "276550544904-3e0a85ac7gcecac7gce7rl6jvms7sg39.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    }

    gapi.load('client:auth2', start);
  });

  return (
    <div className="App">
      <h1>Google OAuth </h1>
      <p>click to login</p>
      <LoginButton />
      <p>click to logout</p>
      <LogoutButton />
    </div>
  );
}

export default App;
