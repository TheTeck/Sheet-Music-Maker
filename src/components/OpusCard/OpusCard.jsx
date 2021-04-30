import React from 'react';
import { Card } from 'semantic-ui-react';
import './OpusCard.css';

export default function OpusCard ({ opus, deleteOpus, removeOpus, editOpus}) {

    function handleDeleteClick() {
        removeOpus(opus._id)
    }

    function handleEditClick() {
        editOpus(opus)
    }

    return (
        <div className="card-container-outer">
            <Card fluid >
                {
                deleteOpus ? 
                    <div className="card-container-inner" onClick={handleDeleteClick}>
                        <Card.Content>
                            <Card.Header style={{ color: 'black'}}>{opus.title}</Card.Header>
                            <Card.Content vertical="true">
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                            </Card.Content>
                        </Card.Content>
                    </div>
                :   <div onClick={handleEditClick} className="card-container-inner">
                        <Card.Content>
                            <Card.Header style={{ color: 'black'}}>{opus.title}</Card.Header>
                            <Card.Content vertical="true">
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                            </Card.Content>
                        </Card.Content>
                    </div>
                }
            </Card>
        </div>
    )
}