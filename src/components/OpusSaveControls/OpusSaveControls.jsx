import React from 'react';
import { Popup, Icon, Segment, Header } from 'semantic-ui-react';
import './OpusSaveControls.css';

export default function OpusSaveControls ({ saveChanges, resetSaveControls }) {

    function handleSaveChanges() {
        resetSaveControls();
        saveChanges();
    }

    return (
        <Segment textAlign="center">
            <Header>Unsaved changes made. Do you want to save?</Header>
            <Popup
                trigger={
                    <Icon 
                        onClick={handleSaveChanges}
                        style={{ color: "green" }}
                        size='large' 
                        name='check' 
                        circular 
                    />
                }
                content='Save'
                position='top center'
            />
            <Popup
                trigger={
                    <Icon 
                        style={{ color: "red" }}
                        size='large' 
                        name='delete' 
                        circular 
                    />
                }
                content='Ignore'
                position='top center'
            />
            
        </Segment>
    )
}