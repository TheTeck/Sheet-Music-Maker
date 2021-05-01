import React, { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import UserIndex from '../../components/UserIndex/UserIndex';
import OpusIndex from '../../components/OpusIndex/OpusIndex';
import userService from '../../utils/userService';
import * as opusApi from '../../utils/opus-api';
import { Button, Divider, Modal } from 'semantic-ui-react';
import './Friends.css'

export default function FriendsPage({ user, handleLogout, handleSignUpOrLogin }) {

    const [modalActive, setModalActive] = useState(false);
    const [userOperaModalActive, setUserOperaModalActive] = useState(false);
    const [activeFriend, setActiveFriend] = useState('');
    const [activeFriendOpera, setActiveFriendOpera] = useState([]);
    const [otherUsers, setOtherUsers] = useState([]);
    const [friendsUpdated, setFriendsUpdated] = useState(false)
        const [state, setState]  = useState({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            bio: user.bio,
            friends: user.friends
        });


    async function getAllUsers() {
        try {
            const users = await userService.getAll();
            const userIdx = users.findIndex(aUser => aUser.username === user.username)
            users.splice(userIdx, 1);
            const userIds = users.map(user => user._id)
            setOtherUsers([...userIds]);
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

    async function getActiveFriendOpus(friend) {
        try {
            const allOpera = await opusApi.getAll();
            const friendOpera = allOpera.opera.filter(opus => opus.user === friend);
            setActiveFriendOpera(friendOpera)
        } catch (error) {
            console.log(error)
        }
    }

    function handleFriendClick(friend) {
        setActiveFriend(friend);
        getActiveFriendOpus(friend);
        handleOperaIndexModalOpen();
    }

    function handleOperaIndexModalOpen() {
        setUserOperaModalActive(true)
    }

    function handleOperaIndexModalClose() {
        setUserOperaModalActive(false)
    }

    async function updateUser() {
        try {
            await userService.update(state);
            handleSignUpOrLogin()
            handleModalClose();
        } catch(err){
            console.log(err.message)
        }
        setFriendsUpdated(false)
    }

    if (friendsUpdated) {
        updateUser()
    }

    function handleAddFriend(friend) {
        const allFriends = [...state.friends, friend]
        setState({
            ...state,
            friends: allFriends
        })
        setFriendsUpdated(true)
    }

    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                <Button onClick={handleFindClick} color="youtube">Add Friends</Button>
                <Divider />
                <UserIndex otherUsers={user.friends} handleUserClick={handleFriendClick} />
            </div>

            <Modal
                dimmer='blurring'
                onClose={handleModalClose}
                onOpen={handleModalOpen}
                open={modalActive}
                >
                <Modal.Header>Find Friends to Follow</Modal.Header>
                <UserIndex otherUsers={otherUsers} handleUserClick={handleAddFriend} />
            </Modal>

            <Modal
                dimmer='blurring'
                onClose={handleOperaIndexModalClose}
                onOpen={handleOperaIndexModalOpen}
                open={userOperaModalActive}
                >
                <Modal.Header>View Their Works</Modal.Header>
                <OpusIndex user={user} opera={activeFriendOpera} isUser={false}/>
            </Modal>
        </div>
    )
}