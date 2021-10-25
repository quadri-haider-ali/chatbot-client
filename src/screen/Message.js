import React from 'react'
import './Message.css'

const Message = props => {
    const avatarClass = (props.avatar==='robot')?'bg-white fa-3x rounded-circle p-2 mr-2 fab fa-android ':'bg-white fa-3x rounded-circle p-2 ml-2 fas fa-user ';
    const msgClass = (props.avatar==='robot')?'msg rounded msg-left ':'msg rounded msg-right ';
    const parentClass = (props.avatar==='robot')?'d-flex my-1 ':'d-flex flex-row-reverse my-1 ';
    return (
        <div className={parentClass}>
            <i className={avatarClass}></i>
            <div className={msgClass}>{props.message}</div>
        </div>
    )
}

export default Message


