import React from 'react';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';

export default function ProfilePage({ user, handleLogout }) {
    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                This is the user profile page
            </div>
        </div>
    )
}