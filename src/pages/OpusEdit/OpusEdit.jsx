import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import Opus from '../../components/Opus/Opus';
import './OpusEdit.css';

export default function OpusEdit ({ user, handleLogout}) {

    const location = useLocation();
    const [opus, setOpus] = useState(location.state.opus);

    return (
        <div>
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                <Opus opus={opus}/>
            </div>
        </div>
    )
}