const express = require("express");
const cors = require ("cors");
const restaurantRouter = require("./router/restaurant.router");



const sql = require("./models/db")
const PORT = 4000;

//create service
const app = express();
//USe middleware
app.use(express());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/" , (req,res)=> {
    res.send("<h1>This is a restaurant  API </h1>");
    //RESTful API for restaurant
})

app.use("/", restaurantRouter);

app.listen(PORT, () =>{
    console.log("Server is running on http://localhost:" + PORT);
})