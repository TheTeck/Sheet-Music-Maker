import React, { useState } from 'react';
import { Popup, Icon, Segment } from 'semantic-ui-react';
import { useLocation, useHistory } from 'react-router-dom';
import OpusSaveControls from '../../components/OpusSaveControls/OpusSaveControls';
import './UserNav.css';

export default function UserNav ({ user, isOpusEdit, changes, saveChanges, ignoreChanges }) {

    const location = useLocation();
    const history = useHistory();
    
    const [showSaveControls, setShowSaveControls] = useState(false)

    function checkLocation(endpoint) {
        return location.pathname === endpoint ? true : false;
    }

    function resetSaveControls() {
        setShowSaveControls(false)
    }

    function handleNavClick(e) {
        if (isOpusEdit && changes) {
            setShowSaveControls(true)
        } else {
            switch (e.target.id) {
                case 'home':
                    history.push('/')
                    break;
                case 'user':
                    history.push(`/${user.username}`)
                    break;
                case 'music':
                    history.push('/opera')
                    break;
                case 'users':
                    history.push('/following')
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <>
        {
            showSaveControls ?
            <OpusSaveControls saveChanges={saveChanges} resetSaveControls={resetSaveControls} ignoreChanges={ignoreChanges} />
            :
            <Segment textAlign="center">
                <Popup
                    trigger={
                        <Icon 
                            onClick={handleNavClick}
                            style={{ color: (checkLocation('/') ? "red" : "black") }}
                            size='large' 
                            name='home' 
                            id='home'
                            circular 
                        />
                    }
                    content='Home'
                    position='top center'
                /> 
                <Popup
                trigger={
                    <Icon 
                        onClick={handleNavClick}
                        style={{ color: (checkLocation(`/${user.username}`) ? "red" : "black") }}
                        size='large' 
                        name='user' 
                        id='user'
                        circular 
                    />
                }
                content='Profile'
                position='top center'
                />
                <Popup
                    trigger={
                        <Icon 
                            onClick={handleNavClick}
                            style={{ color: (checkLocation('/opera') ? "red" : "black") }}
                            size='large' 
                            name='music' 
                            id='music'
                            circular 
                        />
                    }
                    content='Musical Works'
                    position='top center'
                />
                <Popup
                    trigger={
                        <Icon 
                            onClick={handleNavClick}
                            style={{ color: (checkLocation('/following') ? "red" : "black") }}
                            className="user-nav" 
                            size='large' 
                            name='users'
                            id='users'
                            circular 
                        />
                    }
                    content='Following'
                    position='top center'
                />
            </Segment>
        }
        </>
    )
}