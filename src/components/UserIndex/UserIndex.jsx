import React from 'react';
import { Container } from 'semantic-ui-react';
import UserCard from '../../components/UserCard/UserCard';
import './UserIndex.css';

export default function UserIndex ({ user, otherUsers }) {

    return (
        <Container centered fluid textAlign='center' className="user-index">
            <div className="flex-container">
            {otherUsers.length === 0 ? 'There seems to be no other people using this app' : 
                (
                    otherUsers.map(otherUser => {
                        return (
                            <UserCard otherUser={otherUser} />
                        )
                    })
                )
            }
            </div>
        </Container>
    )
};