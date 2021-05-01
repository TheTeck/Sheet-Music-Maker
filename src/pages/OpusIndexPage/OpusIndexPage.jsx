import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import FileOptionControls from '../../components/FileOptionControls/FileOptionControls';
import OpusIndex from '../../components/OpusIndex/OpusIndex';
import NewOpusForm from '../../components/NewOpusForm/NewOpusForm';
import * as operaApi from '../../utils/opus-api';
import { Grid, Header, Modal } from 'semantic-ui-react';
import './OpusIndexPage.css';
import { Redirect } from 'react-router';

export default function OpusIndexPage({ user, handleLogout }) {

    const [active, setActive] = useState(false);
    const [deleteOpus, setDeleteOpus] = useState(false);
    const [opera, setOpera] = useState([]);

    const history = useHistory()

    function handleModalOpen() {
        setActive(true);
    }

    function handleModalClose() {
        setActive(false);
    }

    function handleDeleteModalOpen() {
        setDeleteOpus(true);
    }

    function handleDeleteModalClose() {
        setDeleteOpus(false);
    }

    async function removeOpus(opus) {
        try {
            await operaApi.removeOpus(opus)
            setDeleteOpus(false);
            getOpera()
        } catch (error) {
            console.log(error)
        }
    }

    function editOpus(opus) {
        history.push({
            pathname: '/compose',
            state: {
                opus: opus
            }
        });
    }

    async function getOpera() {
        try {
            const data = await operaApi.getAll();
            const userOpera = data.opera.filter(opus => opus.user === user._id)
            setOpera([...userOpera])
          } catch(err){
            console.log(err, ' this is the error')
          }
    }

    async function handleAddOpus(opus) {
        try {
            const data = await operaApi.create(opus);
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
                        <FileOptionControls handleModalOpen={handleModalOpen} handleDeleteModalOpen={handleDeleteModalOpen} />
                    </Grid.Column>
                    <Grid.Column>
                        <Header style={{ padding: '10px' }} floated='right' as='h3'>
                            You have <span style={{ color: 'red' }}>{opera.length}</span> 
                            {opera.length === 1 ? ' file': ' files'}
                        </Header>
                    </Grid.Column>
                </Grid>

                <OpusIndex user={user} opera={opera} editOpus={editOpus} />
                
                <Modal
                    dimmer='blurring'
                    onClose={handleModalClose}
                    onOpen={handleModalOpen}
                    open={active}
                    >
                    <Modal.Header>New Musical Work</Modal.Header>
                    <NewOpusForm user={user} handleAddOpus={handleAddOpus} />
                </Modal>

                <Modal
                    dimmer='blurring'
                    onClose={handleDeleteModalClose}
                    onOpen={handleDeleteModalOpen}
                    open={deleteOpus}
                    >
                    <Modal.Header>Select A Work To Delete</Modal.Header>
                    <OpusIndex user={user} opera={opera} deleteOpus={deleteOpus} removeOpus={removeOpus} />
                </Modal>
            </div>
        </div>
    )
}