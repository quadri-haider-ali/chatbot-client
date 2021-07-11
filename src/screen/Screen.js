import React from 'react'
import MessageRenderer from './MessageRenderer';
import UserInput from './UserInput';
import './Screen.css'

const Screen = (props) => {
    // const classes = ' '+props.className;
    return (
        <div className="p-4 screen container w-100">
            <MessageRenderer msgs={props.messages} className=""/>
            <UserInput className="stick-bottom text-white h-100" addMessage={props.addMessage}/>
        </div>
    )
}

export default Screen
