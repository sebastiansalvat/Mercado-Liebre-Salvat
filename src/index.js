const express = require('express');
const app = express();
const path = require ('path');
//Server
app.listen(3000,() => console.log("Server on http://localhost:3000"));

//Public Access
app.use(express.static(path.resolve(__dirname, "../public")));

//Websites Routes
app.use(require('./routes/web'));