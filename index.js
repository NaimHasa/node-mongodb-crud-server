const express = require('express')
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;

//Middleware

app.use(cors());
app.use(express.json())




const uri = "mongodb+srv://NodeMongoCrud:BNIi7c0QIuDo9tLp@cluster0.kyler4s.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        const userCollection = client.db('NodeMongoCurd').collection('users');
        app.post('/users', async (req, res) => {
            const user = req.body;
            // console.log(user);

            const result = await userCollection.insertOne(user)
            res.send(result);
        })


    } finally {
        // Ensures that the client will close when you finish/error

    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Node Server is Raning')
})

app.listen(port, () => {
    console.log(`Node server running on Port: ${port}`);

})

