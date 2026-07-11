// install cors and express
// CORS : Cross origin resource service

let express = require('express');
let cors = require('cors');

let app = express()
let port = 9000

app.use(cors());

app.get('/ping', (req,res) => {
    res.send({
        message: "hELLO Word2Vec!, This is a running port"
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
