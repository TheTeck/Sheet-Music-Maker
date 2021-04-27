import React from 'react';
import { Container } from 'semantic-ui-react';
import UserCard from '../../components/UserCard/UserCard';
import './UserIndex.css';

export default function UserIndex ({ otherUsers, handleUserClick, isID}) {

    return (
        <Container centered fluid textAlign='center' className="user-index">
            <div className="flex-container">
            {otherUsers.length === 0 ? 'There are no users to be shown' : 
                (
                    otherUsers.map(otherUser => {
                        return (
                            <UserCard isID={isID} otherUser={otherUser} handleUserClick={handleUserClick} />
                        )
                    })
                )
            }
            </div>
        </Container>
    )
};