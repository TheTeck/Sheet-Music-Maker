import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './OpusCard.css';

export default function OpusCard ({ opus }) {
    return (
        <div className="card-container-outer">
            <Card fluid >
                <Link to={`/opera/${opus._id}/edit`}>
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
            </Card>
        </div>
    )
}