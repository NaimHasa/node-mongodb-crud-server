const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

app.get('/', (req, res) => {
    res.send('Node Server is Raning')
})

app.listen(port, () => {
    console.log(`Node server running on Port: ${port}`);

})

