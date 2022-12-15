// ********** First Example **********
// function name (name, age) {
// console.log("My name is " + name);
// console.log(`Age = ${age}`);
// }
//name('Fahad' , 34);



// ********** Module **********
// console.log(module);



// ********** Loading a Module **********
// const logger = require("./logger");

// logger("Fahad");



// ********** Path Module **********

// const path = require('path');

// const obj = path.parse(__filename);
// const obj2 = path.parse(__dirname);

// console.log(obj);
// console.log(obj2);




// ********** OS Module **********

// const os = require('os');

// let freeMemory = os.freemem();
// let totalMemory = os.totalmem();

// console.log('Total Memory: ' + totalMemory);
// console.log(`Free Memory: ${freeMemory}`);



// // ********** FileSystem Module **********

// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

// // callBack in Node
// fs.readdir('./', function(err, files){
//  if(err){
//     console.log('Error', err);
//  }
// else
// console.log('Result:' , files);
// });



// // ********** Event Module **********

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // Resister an Listener
// emitter.on('messageLogged', function(){
//     console.log('Listener');
// });

// // Raise an Event
// emitter.emit('messageLogged');

// // Resister an Listener that takes arguments
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener', arg);
// });

// // Raise an Event that pass arguments
// emitter.emit('messageLogged', { id: 1, url: 'https//log.io'} );


//******************* HTTP Module ***************

// Modern Way to Create Server

// const http = require('http');
// const server = http.createServer((req , res) => {
// if (req.url === '/')
// {
//     res.write('Welcome to Node JS');
//     res.end();
// }
// if (req.url === '/api/courses')
// {
//     res.write(JSON.stringify([1,2,3]));
//     res.end();
// }

// });

// common Method to Create Sever
// server.on('connection', (socket) => {
//     console.log('New connection');
// });

// server.listen(3000);
// console.log('Listening on Port 3000');



// That server cnnects both Methods.
// server.listen(3000);
// console.log('Listening on Port 3000');