import React, { useEffect, useState } from 'react';
import { Card, Header, Divider } from 'semantic-ui-react';
import userService from '../../utils/userService';
import * as operaApi from '../../utils/opus-api';
import './UserCard.css';

export default function UserCard ({ otherUser, handleUserClick }) {

    const [theUser, setTheUser] = useState({...otherUser});
    const [userOpera, setUserOpera] = useState([]);

    function handleCardClick() {
        handleUserClick(otherUser)
    }

    async function getUserData() {
        try {
            const user = await userService.getOneUserById(otherUser)
            console.log()
            setTheUser({ ...user })
        } catch (error) {
            console.log(error)
        }
    }

    async function getUserOpera() {
        try {
            const allOpera = await operaApi.getAll();
            const thisUserOpera = allOpera.opera.filter(opus => opus.user === otherUser)
            setUserOpera(thisUserOpera);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserData()
        getUserOpera()
    }, []);

    return (
        <Card style={{ width: '300px'}} onClick={handleCardClick}>
            <img className="user-card-img" src={theUser.photoUrl} alt="User Avatar" />
 
            <div className="inner-padding">
                <Header as="h3">{theUser.firstname} {theUser.lastname}</Header>
                <Divider></Divider>
                <Header as="h3"><span style={{ color: 'red' }}>{userOpera.length}</span> Musical Works</Header>
            </div>
                
        </Card>
    )
}