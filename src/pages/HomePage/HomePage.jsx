import React from 'react';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import "./HomePage.css";

export default function HomePage({ user, handleLogout }) {
    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                This is where I will put info about the app and community works
            </div>
        </div>
    )
}