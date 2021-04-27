import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import UserIndex from '../../components/UserIndex/UserIndex';
import userService from '../../utils/userService';
import { Button, Modal } from 'semantic-ui-react';
import './Friends.css'

export default function FriendsPage({ user, handleLogout }) {

    const [modalActive, setModalActive] = useState(false);
    const [otherUsers, setOtherUsers] = useState([])

    async function getAllUsers() {
        try {
            const users = await userService.getAll();
            const userIdx = users.findIndex(aUser => aUser.username === user.username)
            users.splice(userIdx, 1);
            setOtherUsers([...users]);
        } catch (error) {
            console.log(error);
        }
    }

    function handleFindClick() {
        handleModalOpen();
        getAllUsers();
    }

    function handleModalOpen() {
        setModalActive(true);
    }

    function handleModalClose() {
        setModalActive(false);
    }

    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                <Button onClick={handleFindClick}>Add Friends</Button>
            </div>

            <Modal
                dimmer='blurring'
                onClose={handleModalClose}
                onOpen={handleModalOpen}
                open={modalActive}
                >
                <Modal.Header>Find Friends to Follow</Modal.Header>
                <UserIndex user={user} otherUsers={otherUsers} />
            </Modal>
        </div>
    )
}