const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const passport = require("passport");
const session = require("express-session");

const app = express();


//test page
app.get('/', (req,res) => {
  res.send("hello Express!!!!!");
});

//Port setting
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));