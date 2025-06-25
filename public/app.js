const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.set("views engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(public.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine("ejs", ejsMate);
