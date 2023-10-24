// KHAI BAO DUONG DAN CHO SERVER.JS
const path = require('path');  
const express = require('express');
const configViewEngine = (app) => {
    app.set("views", path.join("./Backend", "./views"));
    app.set("view engine", "ejs");
    app.use(express.static(path.join("./src", "./public")));
}

module.exports = configViewEngine;

