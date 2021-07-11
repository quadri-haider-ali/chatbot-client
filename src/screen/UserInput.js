import React,{useState} from 'react'
import './UserInput.css'
const UserInput = props => {
    const [msg,setMsg]=useState('');
    const classes = 'chatbox text-white  ' + props.className;
    const onSubmitHandler=e=>{
        e.preventDefault();
        console.log('msg submitted');
        const newMsg={avatar:'fab fa-android',message:msg}
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
                        onChange={event=>setMsg(event.target.value)}
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
