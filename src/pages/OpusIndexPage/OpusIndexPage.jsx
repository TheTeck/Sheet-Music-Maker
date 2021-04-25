import React from 'react';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import FileOptionControls from '../../components/FileOptionControls/FileOptionControls';
import { Grid, Header } from 'semantic-ui-react';
import './OpusIndexPage.css';

export default function OpusIndexPage({ user, handleLogout }) {
    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                <Grid columns={2}>
                    <Grid.Column>
                        <FileOptionControls />
                    </Grid.Column>
                    <Grid.Column>
                        <Header style={{ padding: '10px' }} floated='right' as='h3'>
                            You have {user.opera.length} 
                            {user.opera.length === 1 ? ' file': ' files'}
                        </Header>
                    </Grid.Column>
                </Grid>
                
                All of the user's works shall be shown here
            </div>
        </div>
    )
}