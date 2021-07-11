import React,{useState} from 'react'
import Screen from './screen/Screen';
import './App.css';

const msgs = [
    {avatar:"robot",message:"This is a Message by Robot"},
];

function App() {
    const [messages,setMessages]=useState(msgs);
    console.log(messages);
    const addMessage=newMessage=>{
        setMessages(prevMessages=>[...prevMessages,newMessage])
    }
    return (
        <div className="bg">
            <Screen messages={messages} addMessage={addMessage}/>
        </div>
    );
}

export default App;
