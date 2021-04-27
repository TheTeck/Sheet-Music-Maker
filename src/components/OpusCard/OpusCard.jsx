import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './OpusCard.css';

export default function OpusCard ({ opus, deleteOpus, removeOpus}) {

    function handleDeleteClick() {
        removeOpus(opus._id)
    }

    return (
        <div className="card-container-outer">
            <Card fluid >
                {
                deleteOpus ? 
                    <div className="card-container-inner" onClick={handleDeleteClick}>
                        <Card.Content>
                            <Card.Header style={{ color: 'black'}}>{opus.title}</Card.Header>
                            <Card.Content vertical>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                            </Card.Content>
                        </Card.Content>
                    </div>
                : <Link to={`/opera/${opus._id}/edit`}>
                    <div className="card-container-inner">
                        <Card.Content>
                            <Card.Header style={{ color: 'black'}}>{opus.title}</Card.Header>
                            <Card.Content vertical>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                                <div className="music-placeholder"></div>
                            </Card.Content>
                        </Card.Content>
                    </div>
                </Link>
                }
            </Card>
        </div>
    )
}