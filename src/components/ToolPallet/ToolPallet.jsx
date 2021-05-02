import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import './ToolPallet.css';

export default function ToolPallet ({ getTool, current }) {

    function handleToolClick(e) {
        getTool(e.target.id)
    }

    return (
        <div className="pallet">
            
            <Popup
                trigger={
                    <div className="tool" onClick={handleToolClick}>
                        <div id="qNote" style={{ color: current === 'qNote' ? "red" : "black"}} >♩</div>
                    </div>
                }
                content='Quarter Note'
                position='left center'
            />
            <Popup
                trigger={
                    <div className="tool" onClick={handleToolClick}>
                        <Icon id="erase" fitted="true" name="erase" 
                            color={current === 'erase' ? "red" : "black"} ></Icon>
                    </div>
                }
                content='Erase'
                position='left center'
            />
        </div>
    )
}