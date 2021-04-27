import React from 'react';
import { Card, Image, Grid, Header, Divider } from 'semantic-ui-react';
import './UserCard.css';

export default function UserCard ({ otherUser }) {
    return (
        <Card fluid>
            <Grid columns="2">
                <Grid.Column width="four">
                    <Image rounded src={otherUser.photoUrl} size='small'/>
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                <div className="inner-padding">
                    <Header as="h4">{otherUser.firstname} {otherUser.lastname}</Header>
                    <Divider></Divider>
                    <Header as="h4">{otherUser.bio}</Header>
                </div>
                </Grid.Column>
            </Grid>
        </Card>
    )
}