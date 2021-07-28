import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const LogoutPage = () => {
    const { logout, isAuthenticated } :any =useAuth0();
    return (
        isAuthenticated && (
        <Button variant="contained" color="secondary" onClick={() => logout()}>
            Logout
        </Button>
        )
    )
}

export default LogoutPage;
