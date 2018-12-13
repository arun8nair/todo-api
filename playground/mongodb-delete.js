const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    const db = client.db('TodoApp');
    
    db.collection('Users').deleteMany({name: 'Arun Nair'}).then((result) => {
        console.log('Deleting Todos')
        console.log(result);
    }, (err) => {
        console.log('Unable to find todos')
    })

    db.collection('Users').deleteOne({completed: true}).then((result) => {
        console.log('Deleting Todo')
        console.log(result);
    }, (err) => {
        console.log('Unable to find todos')
    })

    db.collection('Users').findOneAndDelete({completed: false}).then((result) => {
        console.log('Deleting Todo')
        console.log(result);
    }, (err) => {
        console.log('Unable to find todos')
    })

    //client.close();
});