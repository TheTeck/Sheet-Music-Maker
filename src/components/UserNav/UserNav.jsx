import React from 'react';
import { Popup, Icon, Segment } from 'semantic-ui-react';
import { useLocation, Link } from 'react-router-dom';
import './UserNav.css';

export default function UserNav ({ user }) {

    const location = useLocation();

    function checkLocation(endpoint) {
        console.log(location)
        return location.pathname === endpoint ? true : false;
    }

    return (
        <Segment textAlign="center">
            <Popup
                trigger={
                    <Link to="/" >
                        <Icon 
                            style={{ color: (checkLocation('/') ? "red" : "black") }}
                            size='large' 
                            name='home' 
                            circular 
                        />
                    </Link>
                }
                content='Home'
                position='bottom center'
            />
            <Popup
                trigger={
                    <Link to={`/${user.username}`}>
                        <Icon 
                            style={{ color: (checkLocation(`/${user.username}`) ? "red" : "black") }}
                            size='large' 
                            name='user' 
                            circular 
                        />
                    </Link>
                }
                content='Profile'
                position='bottom center'
            />
            <Popup
                trigger={
                    <Link to={'/opera'}>
                        <Icon 
                            style={{ color: (checkLocation('/opera') ? "red" : "black") }}
                            size='large' 
                            name='music' 
                            circular 
                        />
                    </Link>
                }
                content='Musical Works'
                position='bottom center'
            />
            <Popup
                trigger={
                    <Link to={'/friends'}>
                        <Icon 
                            style={{ color: (checkLocation('/friends') ? "red" : "black") }}
                            className="user-nav" 
                            size='large' 
                            name='users' 
                            circular 
                        />
                    </Link>
                }
                content='Friends'
                position='bottom center'
            />
            
        </Segment>
    )
}