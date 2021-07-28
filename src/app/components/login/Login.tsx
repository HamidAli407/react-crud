import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import LogoutPage from '../logout/logout';
import User from '../user/User';

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
      <div>
       {
        !isAuthenticated && (
            <Button variant="contained" color="primary" onClick={()=>loginWithRedirect()}>
                Login
            </Button>
        )
       }

        <LogoutPage />
        <User />
       
      </div>

    )
}

export default Login
