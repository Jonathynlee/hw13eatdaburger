const express = require("express");
const Orm = require("../config/orm")
const connection = require("../config/connection")
const router = express.Router();
let burgersEaten = [];
let burgersToEat = [];
let allBurgers = {burgersEaten, burgersToEat};
function updateBurgers(cb) {
    Orm.getBurgersEaten(function(result){
        burgersEaten = result;
        //Nested Request for Burgers to eat
        Orm.getBurgersToEat(function(result){
            burgersToEat = result;

            allBurgers = {burgersEaten, burgersToEat};
            console.log(allBurgers)
            cb();
            
        })
    });
    

}


router.get("/", async function (req, res) {
    updateBurgers(function(){
        res.render("index", allBurgers);
    }
    ); // Array of Burgers Eaten
   
 
    console.log("Someone Connected!")
    
})

router.get("/burgersEaten", function (req, res) {
    console.log("Accessing Eaten Burgers")
    Orm.getBurgersEaten(function (result) {
        res.json(result)
    });


})

router.get("/burgersToEat", function (req, res) {
    console.log("Accessing Burgers to Eat")
    Orm.getBurgersToEat(function (result) {
        res.json(result)
    });


})

router.put("/eatABurger", function (req, res) {
    console.log("Someone Has Eaten a Burger!")
    console.log(req.body)
    Orm.eatABurger(req.body, function (result) {
        updateBurgers(function(){
            res.render("index", allBurgers);
        })
    });


})
router.post("/addABurger", function (req, res) {
    console.log("Someone Has Added a Burger!")
    console.log(req.body.innerText)
    Orm.addABurger(req.body.innerText, function () {
        updateBurgers(function(){
            res.render("index", allBurgers);
        })
    });

    
})




module.exports = router;