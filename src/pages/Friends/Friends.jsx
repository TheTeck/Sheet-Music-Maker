import React, { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import UserIndex from '../../components/UserIndex/UserIndex';
import userService from '../../utils/userService';
import { Button, Divider, Modal } from 'semantic-ui-react';
import './Friends.css'

export default function FriendsPage({ user, handleLogout, handleSignUpOrLogin }) {

    const [modalActive, setModalActive] = useState(false);
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

    function handleFriendClick(friend) {
        // Does nothing for now
        console.log(friend)
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
        </div>
    )
}