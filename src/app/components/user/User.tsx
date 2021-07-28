import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const User = () => {
    const {user, isAuthenticated}:any = useAuth0(); 
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name}></img>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    )
}

export default User;
