import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import UserIndex from '../../components/UserIndex/UserIndex';
import OpusIndex from '../../components/OpusIndex/OpusIndex';
import userService from '../../utils/userService';
import * as opusApi from '../../utils/opus-api';
import { Button, Divider, Modal } from 'semantic-ui-react';
import './Friends.css'

export default function FriendsPage({ user, handleLogout, handleSignUpOrLogin }) {

    const history = useHistory();
    const [modalActive, setModalActive] = useState(false);
    const [userOperaModalActive, setUserOperaModalActive] = useState(false);
    const [activeFriendOpera, setActiveFriendOpera] = useState([]);
    const [otherUsers, setOtherUsers] = useState([]);
    const [friendsUpdated, setFriendsUpdated] = useState(false)
        const [state, setState]  = useState({
            id: user._id,
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
            const nonFriends = userIds.filter(thisUser => !user.friends.includes(thisUser))
            setOtherUsers([...nonFriends]);
        } catch (error) {
            console.log(error);
        }
    }

    async function removeDeadUsers() {
        try {
            const users = await userService.getAll();
            const userIds = users.map(user => user._id)
            const upToDateFriends = [];
            user.friends.forEach(id => {
                if (userIds.includes(id))
                    upToDateFriends.push(id)
            })
            setState({
                ...state,
                friends: upToDateFriends
            })
            await userService.update(state);
            handleSignUpOrLogin()
        } catch (error) {
            console.log(error)
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

    function showOpus(opus) {
        history.push({
            pathname: '/compose',
            state: {
                opus: opus,
                isUser: false
            }
        });
    }

    useEffect(() => {
        console.log('useEffect')
        removeDeadUsers();
    }, [])

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
                <OpusIndex user={user} opera={activeFriendOpera} showOpus={showOpus} isUser={false}/>
            </Modal>
        </div>
    )
}