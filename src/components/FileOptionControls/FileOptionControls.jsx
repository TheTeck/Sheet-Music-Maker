import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';
import './FileOptionControls.css';

export default function FileOptionControls({ handleModalOpen }) {

    function handleClick() {
        handleModalOpen();
    }

    return (
        <div className="btn-container">
            <Popup
                trigger={
                    <Icon.Group size='big'>
                        <Icon 
                            onClick={handleClick}
                            name='file text' 
                            color='black'
                            circular 
                        />
                        <Icon corner name='add' color='green' />
                    </Icon.Group>
                }
                content='New File'
                position='top center'
            />
            <Popup
                trigger={
                    <Icon.Group size='big'>
                        <Icon 
                            name='file text' 
                            color='black'
                            circular 
                        />
                    <Icon corner name='delete' color='red' />
                    </Icon.Group>
                }
                content='Delete File'
                position='top center'
            />
        </div>
    )
}