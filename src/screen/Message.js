/*
import React from 'react'
import './Message.css'

const Message = props => {
    const avatarClass = 'bg-white fa-3x rounded-circle p-2 mr-2 '+props.avatar;
    const msgClass = 'msg rounded msg-left '
    return (
        <div className="d-flex">
            <i className={avatarClass}></i>
            <div className={msgClass}>{props.message}</div>
        </div>
    )
}

export default Message
*/



import React from 'react'
import './Message.css'

const Message = props => {
    // const [avatar,setAvatar]=useState('');
    // const [msgAlign,setMsgAlign]=useState('');
    // if(props.avatar==='robot'){
    //     setAvatar('fab fa-android');
    //     setMsgAlign('msg-left');
    // }else{
    //     setAvatar('fas fa-user');
    //     setMsgAlign('msg-right');
    // }
    // const robot='fab fa-android';
    // const avatarClass = 'bg-white fa-3x rounded-circle p-2 mr-2 '+avatar;
    const avatarClass = (props.avatar==='robot')?'bg-white fa-3x rounded-circle p-2 mr-2 fab fa-android ':'bg-white fa-3x rounded-circle p-2 ml-2 fas fa-user ';
    const msgClass = (props.avatar==='robot')?'msg rounded msg-left ':'msg rounded msg-right ';
    const parentClass = (props.avatar==='robot')?'d-flex my-1 ':'d-flex flex-row-reverse my-1 ';
    console.log("avatarClass:",avatarClass);
    console.log("msgClass:",msgClass);
    console.log("parentClass:",parentClass);
    return (
        <div className={parentClass}>
            <i className={avatarClass}></i>
            <div className={msgClass}>{props.message}</div>
        </div>
    )
}

export default Message


