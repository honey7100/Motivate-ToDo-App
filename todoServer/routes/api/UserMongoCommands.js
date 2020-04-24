const express = require('express');
const mongo = require('mongodb');

const router = express.Router();

//Thses methods are for Users

router.get('/', async (req, res)=>{
    const users = await connectionToUserDatabase();

    //queery goes in the brackets
    res.send(await users.find({}).toArray());
})
//Add user
router.post('/', async (req, res) =>{
    const users = await connectionToUserDatabase();
    console.log("its lit");

        await users.insertOne({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
        });
        res.status(201).send();
    
})

async function connectionToUserDatabase(){
    const user = await mongo.MongoClient.connect('mongodb+srv://todoUser:todoPass@todosdatabase-e3w2o.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

    return user.db('todoDatabase').collection('users'); 
}

module.exports = router;

