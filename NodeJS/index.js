//1. To create package.json file, change the directory to 01 folder and write npm init -y command to create a pacage.json with default values. 

//2. Create a nodejs_architecture.txt file in the same folder and wrote some text about nodejs.

//3. Create a index.js and use the fs module to read the content of nodejs_architecture.txt and print the content to the console. 
const fs = require("fs");

fs.readFile("/config/workspace/01/nodejs_architecture.txt", function(err, data){
    if(err){
        console.log("Error in reading the file content.");
    }
    else{
        console.log(data.toString());
    }
});

//4. Use the fs module to append additional data to it. Add some more text about Node.js to the file and print the content to the console.

fs.appendFile("/config/workspace/01/nodejs_architecture.txt", " Here are some reasons why it’s a great choice:Speed: Node.js is exceptionally fast due to its non-blocking I/O and event-driven architecture. It allows handling multiple requests simultaneously without waiting for each one to complete1.Scalability: Node.js can scale to handle millions of users. Its lightweight and efficient design make it suitable for both small projects and large-scale applications2.", function(err){
    if(err){
        console.log("Error occured while appending the data.");
    }
    else{
        fs.readFile("/config/workspace/01/nodejs_architecture.txt", function(err, data){
            console.log(data.toString());
        });
    }
});


//5. Delete the nodejs_architecture.txt file. On deletion print "File deleted Successfully" to the console. 

fs.unlink("/config/workspace/01/nodejs_architecture.txt", function(err){
    if(err){
        console.log("Error occured while deleting the file.");
    }
    else{
        console.log("File Deleted Successfully.");
    }
});

//6. Assume a situation where our server restricts access to its configuration via the user interface. The only way to obtain the OS and release information is through programmatic approach. In this challenge, you are expected to use OS module and print the os name and the os release version to the console.

const os = require("os");

console.log("Operating System name: ",os.type());
console.log("OS release: ",os.release());

//7. You are required to use Node.js and built in http module to create a server that displays the text "I am happy to learn full stack web development from pw skills" on the browser screen. The goal is to utilize the http module to create an http server, set the port, appropriate content type, and send the message as a response to clients server, allowing it to display on the browser. 

const http = require("http");

const server = http.createServer((req,res) => {
    res.write("<h3> I am Happy to Learn Full Stack Web Development From Pw Skills!");
});

server.listen(5005);
console.log("It is running on port 5005");

//8. Using the events module, we will create a custom event named "subscribe". When this event is triggered, it should display a message in teh console indicating that the user has subscribed. 
const events = require("events");

const eventEmmitter = new events.EventEmitter();

let myeventHandler = function(channel){
    console.log(`Thanks for subscribing ${channel}.`)
}

eventEmmitter.addListener("subscribe", myeventHandler);

eventEmmitter.emit("subscribe", "College College")


//9. Create an event handler and call it. Later remove the event handler and observer what happens when we call it. 
let follow = function(user){
    console.log(`You are now following ${user}.`)
}

// Adding an event
eventEmmitter.addListener("followed", follow)
eventEmmitter.emit("followed", "lovejot_98");

// Removing an event
eventEmmitter.removeListener("followed", follow);
// Calling the event after removing it but it wont through an error
eventEmmitter.emit("followed", "DMU")

//10. Determine the current maximum number of event listeners associated with an event and then set the maximum of event listeners to 5. You task is to limit the number of listeners to 5. 
console.log("The default maximum number of event listeners are: ",eventEmmitter.getMaxListeners());

//Sets the max listeners to 5
eventEmmitter.setMaxListeners(5);

//Now the max listeners will be 5
console.log("The default maximum number of event listeners are: ",eventEmmitter.getMaxListeners());
