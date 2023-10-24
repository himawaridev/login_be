// KHAI BAO THU VIEN VA DUONG DAN

require('dotenv').config();  // khai bao dotenv tu file config
const path = require('path');  // khai bao duong dan tep va ca thu muc
const express = require('express');  // import thu vien express tu npm
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./route/web')


// khai bao cong port localhost

const app = express(); // app cua express
const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME;


// KHAI BAO app DUNG CHO CONG PORT

app.use(express.json());  // for json
app.use(express.urlencoded({ extended: true}));  // for form data




// IMPORT configViewEngine TU FILE viewEngine

configViewEngine(app); //viewEngine.js


     

// KHAI BAO DUONG DAN DEN TRANG HOME DUOC PORT

app.use("/", webRouter); // web.js








// PORT CONG TREN LOCALHOST 

app.listen(port, hostname, () => {
    console.log(`Starting listen on port ${port}`);  
});