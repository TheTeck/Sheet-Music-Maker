import React from 'react';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import FileOptionControls from '../../components/FileOptionControls/FileOptionControls';
import './OpusIndexPage.css';

export default function OpusIndexPage({ user, handleLogout }) {
    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                <FileOptionControls />
                All of the user's works shall be shown here
            </div>
        </div>
    )
}