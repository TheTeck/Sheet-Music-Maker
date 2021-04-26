import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import FileOptionControls from '../../components/FileOptionControls/FileOptionControls';
import OpusIndex from '../../components/OpusIndex/OpusIndex';
import NewOpusForm from '../../components/NewOpusForm/NewOpusForm';
import * as operaApi from '../../utils/opus-api';
import { Grid, Header, Modal } from 'semantic-ui-react';
import './OpusIndexPage.css';

export default function OpusIndexPage({ user, handleLogout }) {

    const [active, setActive] = useState(false);
    const [opera, setOpera] = useState([]);

    function handleModalOpen() {
        setActive(true);
    }

    function handleModalClose() {
        setActive(false);
    }

    async function getOpera() {
        try {
            const data = await operaApi.getAll();
            setOpera([...data.opera])
          } catch(err){
            console.log(err, ' this is the error')
          }
    }

    async function handleAddOpus(opus) {
        try {
            const data = await operaApi.create(opus);
            console.log(data.opus, '<<<<<<< after create in handleAddOpus');
            setActive(false);
            getOpera()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getOpera()
    }, [])

    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />

                <Grid columns={2}>
                    <Grid.Column>
                        <FileOptionControls handleModalOpen={handleModalOpen} />
                    </Grid.Column>
                    <Grid.Column>
                        <Header style={{ padding: '10px' }} floated='right' as='h3'>
                            You have {opera.length} 
                            {opera.length === 1 ? ' file': ' files'}
                        </Header>
                    </Grid.Column>
                </Grid>

                <OpusIndex user={user} />
                
                <Modal
                    dimmer='blurring'
                    onClose={handleModalClose}
                    onOpen={handleModalOpen}
                    open={active}
                    >
                    <NewOpusForm user={user} handleAddOpus={handleAddOpus} />
                </Modal>
            </div>
        </div>
    )
}