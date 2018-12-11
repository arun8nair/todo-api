const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    const db = client.db('TodoApp');
    
    db.collection('Users').find({completed: true}).count().then((count) => {
        console.log('Todos')
        console.log(count);
    }, (err) => {
        console.log('Unable to find todos')
    })

    //client.close();
});