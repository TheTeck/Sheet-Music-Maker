import React from 'react';
import { Segment, Grid, Icon} from 'semantic-ui-react';
import './ToolPallet.css';

export default function ToolPallet () {
    return (
        <div className="pallet">
            <div className="tool">
                <Icon fitted="true" name="mouse pointer"></Icon>
            </div>
            <div className="tool">
                <div>♩</div>
            </div>
        </div>
    )
}