import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import UserCard from '../../components/UserCard/UserCard';
import './UserIndex.css';

export default function UserIndex ({ otherUsers, handleUserClick }) {

    return (
        <Container centered="true" textAlign='center' className="user-index">
            <div className="flex-container">
            {otherUsers.length === 0 ? <Header as='h3' style={{ padding: '30px' }}>'There are no users to be shown'</Header> : 
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