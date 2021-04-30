import React from 'react';

export default function ErrorMessage(props){
    return <span style={{ color: 'red' }} className={"error"}>{props.error}</span>
}