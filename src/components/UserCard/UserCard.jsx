import React, { useEffect, useState } from 'react';
import { Card, Image, Grid, Header, Divider } from 'semantic-ui-react';
import userService from '../../utils/userService';
import './UserCard.css';

export default function UserCard ({ otherUser, handleUserClick, isID}) {

    const [theUser, setTheUser] = useState({...otherUser});

    function handleCardClick() {
        handleUserClick(otherUser)
    }

    async function getUserData() {
        try {
            const user = await userService.getOneUserById(otherUser)
            setTheUser({ ...user })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isID) {
            getUserData()
        }  
    }, []);

    return (
        <Card onClick={handleCardClick} fluid>
            <Grid columns="2">
                <Grid.Column width="four">
                    <Image rounded src={theUser.photoUrl} size='small'/>
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                <div className="inner-padding">
                    <Header as="h4">{theUser.firstname} {theUser.lastname}</Header>
                    <Divider></Divider>
                    <Header as="h4">{theUser.bio}</Header>
                </div>
                </Grid.Column>
            </Grid>
        </Card>
    )
}