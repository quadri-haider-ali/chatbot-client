import React from 'react'
import Message from './Message'

const MessageRenderer = props => {
    return (
        <div>
            {props.msgs.map(msg=><Message key={msg.message} avatar={msg.avatar} message={msg.message}/>)}
        </div>
    )
}

export default MessageRenderer
