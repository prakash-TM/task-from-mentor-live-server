// Require would make available the
// express package to be used in
// our code



// a is imported from the json.js file.
//import a from "./json.js"
import tab from "./table.js";

import express from "express";

// Creates an express object
const app = express();

// It listens to HTTP get request.
// Here it listens to the root i.e '/'
app.get("/getData", (req, res) => { // getDta is the extension like localhost:3000/getData

    // Using send function we send
    // response to the client
    // Here we are sending html
    res.send(tab);

});

// It configures the system to listen
// to port 3000. Any number can be
// given instead of 3000, the only
// condition is that no other server
// should be running at that port
app.listen(3000, () => {

    // Print in the console when the
    // servers starts to listen on 3000
    console.log("Listening to port 3000");
});

// the access link is localhost:3000/getData
// this link used at the task-login-page. file name is index1.html