const express = require("express");
const router = express.Router();
const Restaurant = require("../controllers/restaurant.controllers");

//สร้าง restaurants ใหม่
//http://localhost:4000/restaurants
router.post("/restaurant",async (req,res)=>{
    try{
        const newRestaurant = req.body;
        const createRestaurant = await Restaurant.createRestaurant(newRestaurant);
        res.status(201).json(createRestaurant);
    }catch (error) {
        res.status(500).json({error:"Failed to create Restaurant"})
    }
});

//อัปเดต restaurants ใหม่
//http://localhost:4000/restaurants
module.exports = router;