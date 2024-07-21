import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "276550544904-3e0a85ac7gcecac7gce7rl6jvms7sg39.apps.googleusercontent.com";

function Login() {
  const onSuccess = (response) => {
    console.log('Login Success! Current user:', response.profileObj);
  };

  const onFailure = (error) => {
    console.log('Login Failure. Error:', error);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
