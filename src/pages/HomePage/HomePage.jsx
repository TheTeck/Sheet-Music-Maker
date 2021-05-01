import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import { Grid, Header, Divider, Icon } from 'semantic-ui-react';
import * as opusApi from '../../utils/opus-api';
import userService from '../../utils/userService';
import "./HomePage.css";

export default function HomePage({ user, handleLogout }) {

    const [operaCount, setOperaCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    async function getAllOpera() {
        try {
            const opera = await opusApi.getAll();
            setOperaCount(opera.opera.length)
        } catch (error) {
            console.log(error)
        }
    }

    async function getAllUsers() {
        try {
            const users = await userService.getAll();
            console.log(users)
            setUserCount(users.length);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllOpera();
        getAllUsers();
    }, [])

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
                <Divider></Divider>
                <h2>There are<span style={{ color: "red" }}>{operaCount === 1 ? <p>{operaCount}</p> : <p>0</p>}</span>musical works to explore!</h2>
                <Icon style={{ color: 'red' }} name="users" size="huge"></Icon>
                <h3>Check out any of the <span style={{ color: "red" }}>{userCount}</span> composers in the community <Link to="/following">here</Link>.</h3>
            </div>
        </div>
    )
}