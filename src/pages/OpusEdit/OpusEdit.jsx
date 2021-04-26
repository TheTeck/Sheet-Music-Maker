import React from 'react';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import Opus from '../../components/Opus/Opus';
import './OpusEdit.css';

export default function OpusEdit ({ user, handleLogout }) {
    return (
        <div>
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                <Opus />
            </div>
        </div>
    )
}