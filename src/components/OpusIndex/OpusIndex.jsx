import React from 'react';
import { Container } from 'semantic-ui-react';
import OpusCard from '../../components/OpusCard/OpusCard';
import './OpusIndex.css';

export default function OpusIndex ({ opera, deleteOpus, removeOpus, showOpus, isUser }) {

    return (
        <Container centered="true" fluid textAlign='center' className="opera-index">
            <div className="flex-container">
            {opera.length === 0 ? 'There are currently no works to see' : 
                (
                    opera.map(opus => {
                        return (
                            <>{
                                isUser ? 
                                    <OpusCard key={opus._id} opus={opus} deleteOpus={deleteOpus} removeOpus={removeOpus} showOpus={showOpus} isUser={isUser} />
                                    : <OpusCard key={opus._id} opus={opus} showOpus={showOpus} isUser={isUser} />
                            }</>
                        )
                    })
                )
            }
            </div>
        </Container>
    )
};