import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = "276550544904-3e0a85ac7gcecac7gce7rl6jvms7sg39.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
