// Import packages
const express = require("express");
require('dotenv').config()
const cors = require('cors')
const { default: mongoose } = require('mongoose')

// * variables
const home = require("./routes");
const user = require("./routes/user");
const login = require("./routes/user/login");
const list = require("./routes/list");
const add = require("./routes/list/add");
const remove = require("./routes/list/remove");
const watched = require("./routes/list/watched");
const register = require("./routes/user/register");
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

// Middlewares
const app = express();
app.use(express.json());

// * Eneable json read
app.use(express.json())
app.use(cors())

// * Routes
app.get("/", home);
app.get("/user/:id", user)
app.post("/user/register", register)
app.post("/user/login", login)
app.get("/list/:id", list)
app.patch("/list/add", add)
app.patch("/list/remove", remove)
app.patch("/list/watched/", watched)

// * connection
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@watch-next-api.klszmgz.mongodb.net/users?retryWrites=true&w=majority`).then(() => {
    console.log('Conectado ao MongoDB!')

    const port = process.env.PORT || 9001;
    const msg = console.log(`Listening to port ${port}`)
    app.listen(port, () => msg);

}).catch((err) => console.log(err))
