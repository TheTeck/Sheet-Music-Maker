import React from 'react';
import { Container } from 'semantic-ui-react';
import './OpusIndex.css';

export default function OpusIndex ({ user }) {
    return (
        <Container fluid textAlign='center' className="opera-index">
            {user.opera.length === 0 ? 'You currently have no files available' : ''}
        </Container>
    )
};