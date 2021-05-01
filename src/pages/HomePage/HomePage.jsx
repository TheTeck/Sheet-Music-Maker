import React from 'react';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import { Grid, Header, Divider } from 'semantic-ui-react';
import "./HomePage.css";

export default function HomePage({ user, handleLogout }) {
    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <div className="welcome-image"></div>
                        </Grid.Column>
                        <Grid.Column>
                            <div style={{ paddingTop: '20px'}}>
                                Welcome to
                                <Header as='h2'>Sheet <span style={{ color: 'red' }}>Music</span> Maker!</Header>
                                <Divider></Divider>
                                A completely <span style={{ color: 'red' }}>free</span> sheet music editor I have made as my final project for my full-stack bootcamp. 
                                <Divider></Divider>
                                Write your own music and <span style={{ color: 'red' }}>share</span> it with all of your connected friends, or <span style={{ color: 'red' }}>explore</span> what everybody else is creating!
                                <Divider></Divider>
                                This app is still in the very early stages of it's existence, so expect vast <span style={{ color: 'red' }}>improvements</span> in the near future!
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="welcome-image2"></div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
}