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
                        <Icon id="select" fitted="true" name="mouse pointer" 
                            color={current === 'select' ? "red" : "black"} ></Icon>
                    </div>
                }
                content='Select'
                position='left center'
            />
            <Popup
                trigger={
                    <div className="tool" onClick={handleToolClick}>
                        <div id="qNote" style={{ color: current === 'qNote' ? "red" : "black"}} >♩</div>
                    </div>
                }
                content='Quarter Note'
                position='left center'
            />
        </div>
    )
}