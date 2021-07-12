import React, { useState } from 'react'
// import Chat from '../chat/Chat'
import './UserInput.css'

// const spawn = require('child_process').spawn;
// const process = spawn('python', ['../chat/chat.py']);

const UserInput = props => {
    const [msg, setMsg] = useState('');
    // const [i, setI] = useState(0);
    // const [args,setArgs]=useState([]);
    const classes = 'chatbox text-white  ' + props.className;
    
    // const Chatter = () => {
    //     process.stdout.on('data', data => {
    //         const readData = data.toString();
    //         if (readData[0] === '$') {
    //             const newMsg = { id: props.id, avatar: 'robot', message: readData }
    //             props.addMessage(newMsg);
    //         }
    //         console.log(data.toString());
    //     });
    // }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log('msg submitted');
        
        const newMsg = (msg[0]==='$') ? { id: props.id, avatar: 'robot', message: msg.substring(1) } : { id: props.id, avatar: 'user', message: msg };
        // Chatter();
        console.log("newMsg:", newMsg);
        setMsg('');
        return props.addMessage(newMsg);
    };
    return (
        <form className={classes} onSubmit={onSubmitHandler}>
            <div className="chatmessages">
                <div className="d-flex align-items-center">
                    <input
                        type='text'
                        className="w-100 search pl-3"
                        placeholder="Type a message"
                        value={msg}
                        onChange={event => setMsg(event.target.value)}
                    />
                    <button type="submit" className='btn-custom rounded-circle ml-2 send d-flex align-items-center'>
                        <i className="fas fa-paper-plane fa-lg"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default UserInput
