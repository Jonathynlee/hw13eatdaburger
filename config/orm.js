const connection = require("./connection");


const orm = {
    getBurgersEaten:function(cb){
        connection.query("SELECT * FROM burgersEaten;",(err, result)=>{
            if (err){
                throw err;
            }
            else{
                cb(result)
            }
        })

    }, 
    getBurgersToEat:function(cb){
        connection.query("SELECT * FROM burgerstoeat;",(err, result)=>{
            if (err){
                throw err;
            }
            else{
                cb(result)
            }
        })

    },
     eatABurger:function(burger, cb){
        connection.query("DELETE FROM burgerstoeat WHERE id=?", [burger.id], (err, result)=>{
            if (err) throw err;
            
        });
        connection.query("INSERT INTO burgersEaten (innerText) VALUES (\'"+burger.innerText+"\')", (err, result)=>{
            if (err) throw err;
            else cb(result);
        });
     }, 
     addABurger:function(innerText, cb){
        connection.query("INSERT INTO burgersToEat (innerText) VALUES (\'"+innerText+"\')", (err, result)=>{
            if (err) throw err;
            else cb(result);
        });
     }

}

module.exports = orm;