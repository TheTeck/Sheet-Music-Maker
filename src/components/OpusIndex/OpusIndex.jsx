import React from 'react';
import { Container } from 'semantic-ui-react';
import OpusCard from '../../components/OpusCard/OpusCard';
import './OpusIndex.css';

export default function OpusIndex ({ user, opera }) {

    return (
        <Container fluid textAlign='center' className="opera-index">
            <div className="flex-container">
            {opera.length === 0 ? 'You currently have no files available' : 
                (
                    opera.map(opus => {
                        return (
                            <OpusCard key={opus._id} opus={opus} />
                        )
                    })
                )
            }
            </div>
        </Container>
    )
};