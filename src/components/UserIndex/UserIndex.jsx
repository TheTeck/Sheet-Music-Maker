import React from 'react';
import { Container } from 'semantic-ui-react';
import UserCard from '../../components/UserCard/UserCard';
import './UserIndex.css';

export default function UserIndex ({ otherUsers, handleUserClick }) {

    console.log(otherUsers)
    return (
        <Container centered="true" textAlign='center' className="user-index">
            <div className="flex-container">
            {otherUsers.length === 0 ? 'There are no users to be shown' : 
                (
                    otherUsers.map(otherUser => {
                        return (
                            <UserCard otherUser={otherUser} handleUserClick={handleUserClick} />
                        )
                    })
                )
            }
            </div>
        </Container>
    )
};