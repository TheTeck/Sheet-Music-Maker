import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';
import './Header.css';


export default function PageHeader({user, handleLogout}){
    return (
        <Segment className="page-header" clearing>
            <Header as='h2' floated='right'>
                <Link to='' onClick={handleLogout}>Logout</Link>
            </Header>
            <Header as='h2' floated='left'>
                <Link to=""><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>          
            </Header>
            <Header as='h2' floated='left'>
                <Link to="">Hi, {user.username}!</Link>
            </Header>
        </Segment>
    )
}