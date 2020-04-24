const express = require('express');
const mongo = require('mongodb');

const router = express.Router();


//Thses methods are for Users








//These methods are for todos


//Get Todos
router.get('/', async (req, res) =>{
    const posts = await connectToDatabase();

    //queery goes in the brackets
    res.send(await posts.find({}).toArray());
})



//Add Todos

router.post('/', async (req, res) => {
    res.send("add todo method");
    const posts = await connectToDatabase();

    await posts.insertOne({
        task: req.body.task,
        user: req.body.user,
    });
    res.status(201).send();
})


//Delete Todos
router.delete('/:id', async (req, res)=>{
    const posts = await connectToDatabase();

    
    //inside the braces
    await posts.deleteOne({_id: new mongo.ObjectID(req.params.id)});
    res.status(200).send();
})




//Edit Todos
router.put('/:id', async (req, res) => {
    const posts = await connectToDatabase();

    await posts.updateOne({_id: new mongo.ObjectID(req.params.id)}, {$set: {'task': req.body.task}});
})


async function connectToDatabase(){
    console.log("todoconnection");
    const user = await mongo.MongoClient.connect('mongodb+srv://todoUser:todoPass@todosdatabase-e3w2o.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

    return user.db('todoDatabase').collection('posts');
}

module.exports = router;