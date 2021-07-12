// // import React, { useState } from 'react'

// const Chat = props => {
//     // const callChat = () => {
//     const msgs = [];
//     const i=0;
//     const spawn = require('child_process').spawn;
//     const process = spawn('python', ['./chat.py']);
//     process.stdout.on('data', data => {
//         const readData = data.toString();
//         if (readData[0] === '$') {
//             const newMsg = { id: props.id, avatar: 'robot', message: readData }
//             return newMsg;
//         }
//         console.log(data.toString());
//     });
//     // }
//     // return callChat;
// }

// export default Chat
