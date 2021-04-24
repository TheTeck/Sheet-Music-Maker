import React from 'react';
import NavHeader from '../../components/Header/Header';

export default function HomePage({ user, handleLogout }) {
    return (
        <>
            <NavHeader user={user} handleLogout={handleLogout} />
            <h1>This is the homepage!!!</h1>
        </>
    )
}