const Restaurant = require("../models/restaurant.model")

//Instrt Data
Restaurant.createRestaurant = async(newRestaurant)=>{
    console.log("true");
    try {
        const  createRestaurant = await Restaurant.create(newRestaurant);
        console.log("created restaurants:", createRestaurant.toJSON());
        return createRestaurant.toJSON();
    } catch (error) {
        console.log("err", err);
        throw err;
    }
}

module.exports = Restaurant;