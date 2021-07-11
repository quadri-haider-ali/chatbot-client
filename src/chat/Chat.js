
const spawn = require('child_process').spawn;
const process = spawn('python',['./hello.py','redhat']);
process.stdout.on('data',data=>{
    console.log(data.toString());
});