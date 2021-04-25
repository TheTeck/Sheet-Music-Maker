import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './FileOptionControls.css';

export default function FileOptionControls() {
    return (
        <div className="btn-container">
            <Popup
                trigger={
                    <Link to="/">
                        <Icon.Group size='big'>
                            <Icon 
                                name='file text' 
                                color='black'
                                circular 
                            />
                            <Icon corner name='add' color='green' />
                        </Icon.Group>
                    </Link>
                }
                content='New File'
                position='top center'
            />
            <Popup
                trigger={
                    <Link to="/">
                        <Icon.Group size='big'>
                            <Icon 
                                name='file text' 
                                color='black'
                                circular 
                            />
                        <Icon corner name='delete' color='red' />
                        </Icon.Group>
                    </Link>
                }
                content='Delete File'
                position='top center'
            />
        </div>
    )
}