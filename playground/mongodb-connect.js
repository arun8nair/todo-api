const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        name: 'Arun Nair',
        age: 25,
        location: 'Kochi, Kerala'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo');
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    })

    client.close();
});