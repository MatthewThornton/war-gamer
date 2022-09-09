import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import {
  Link
} from "react-router-dom";

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const Profile = () => {
    const [isLoadingUser, setLoadingUser] = React.useState(true);
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
    Auth.currentAuthenticatedUser()
        .then(response => {
            setUser(response);
            setLoadingUser(false);
        })
        .catch(err => {
            console.log("getUser error: ", err);
            setLoadingUser(false);
        });
    }, []);

    if (!user && !isLoadingUser) {
        return (<>
            <li className="user-name"><Link to="sign-in">Sign-In</Link></li>
        </>);
    }

    else if (isLoadingUser) {
        return (<li className="user-name">...</li>)
    }

     else {
        console.log("user: ", user);
        return (<>
           <li className="user-name"><Link to="sign-in">{user && (user as any).attributes ? (user as any).attributes.name : 'Hello'}</Link></li>
        </>)
    }
}
export default Profile;