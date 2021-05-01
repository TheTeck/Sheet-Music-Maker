import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import Opus from '../../components/Opus/Opus';
import ToolPallet from '../../components/ToolPallet/ToolPallet';
import { Icon, Popup } from 'semantic-ui-react';
import * as opusApi from '../../utils/opus-api';
import './OpusEdit.css';

export default function OpusEdit ({ user, handleLogout}) {

    const location = useLocation();
    const [opus, setOpus] = useState(location.state.opus);
    const [changes, setChanges] = useState(false);
    const [currentTool, setCurrentTool] = useState('select');

    // Pass down to all components to indicate if a change has been made on the page
    function makeChanges() {
        setChanges(true);
    }

    function saveChanges() {
        updateOpus();
        setChanges(false);
    }

    function ignoreChanges() {
        setChanges(false);
    }

    function getUpdatedElement(element, value) {
        setOpus({
            ...opus,
            [element]: value
        })
        console.log(value)
        makeChanges()
    }

    function getTool (tool) {
        setCurrentTool(tool);
    }

    async function updateOpus () {
        const data = {
            id: opus._id,
            title: opus.title,
            composer: opus.composer,
            opusData: opus.opusData,
            music: opus.music
        }

        try {
            await opusApi.update(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body"> 
                <UserNav user={user} isOpusEdit={true} changes={changes} saveChanges={saveChanges} ignoreChanges={ignoreChanges} />
                <Opus 
                    opus={opus} 
                    makeChanges={makeChanges} 
                    getUpdatedElement={getUpdatedElement} 
                    current={currentTool} />
                <ToolPallet getTool={getTool} current={currentTool} />
                <>
                {
                    changes ? 
                        <Popup
                            trigger={
                                <div className="save-container">
                                    <Icon 
                                        onClick={saveChanges}
                                        className="save-icon" 
                                        size="large" 
                                        fitted="true" 
                                        name="save">
                                        </Icon>
                                </div>
                            }
                            content='Save'
                            position='top center'
                        />
                        : ''
                }
                </>
            </div>
        </div>
    )
}