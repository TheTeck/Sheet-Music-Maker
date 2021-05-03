import React from 'react';
import { Card } from 'semantic-ui-react';
import './OpusCard.css';

export default function OpusCard ({ opus, deleteOpus, removeOpus, showOpus, isUser}) {

    function handleDeleteClick() {
        removeOpus(opus._id)
    }

    function handleShowClick() {
        showOpus(opus)
    }

    return (
        <div className="card-container-outer">
            {
                isUser ?
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
                        :   <div onClick={handleShowClick} className="card-container-inner">
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
                    :
                    <Card fluid >
                        <div className="card-container-inner" onClick={handleShowClick}>
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
                    </Card>
            }
        </div>
    )
}