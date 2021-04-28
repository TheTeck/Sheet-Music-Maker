import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import Opus from '../../components/Opus/Opus';
import './OpusEdit.css';

export default function OpusEdit ({ user, handleLogout}) {

    const location = useLocation();
    const [opus, setOpus] = useState(location.state.opus);
    const [changes, setChanges] = useState(false);

    // Pass down to all components to indicate if a change has been made on the page
    function makeChanges() {
        setChanges(true);
    }

    function saveChanges() {
        setChanges(false)
    }

    function getUpdatedElement(element, value) {
        setOpus({
            ...opus,
            [element]: value
        })
        makeChanges()
    }

    return (
        <div>
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body"> 
                <UserNav user={user} isOpusEdit={true} changes={changes} saveChanges={saveChanges} />
                <Opus opus={opus} makeChanges={makeChanges} getUpdatedElement={getUpdatedElement} />
            </div>
        </div>
    )
}