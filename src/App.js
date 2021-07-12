import React,{useState} from 'react'
import Screen from './screen/Screen';
import './App.css';

const msgs = [
    {id:1,avatar:"robot",message:"Hi There, May I know your Name."},
];

function App() {
    const [id,setId]=useState(2);
    const [messages,setMessages]=useState(msgs);
    // console.log(messages);
    const addMessage=newMessage=>{
        setMessages(prevMessages=>[...prevMessages,newMessage]);
        setId(id+1);
    }
    return (
        <div className="bg">
            <Screen messages={messages} id={id} addMessage={addMessage}/>
        </div>
    );
}

export default App;
