require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const verify_route = require('./routes/verify.routes');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(verify_route);

app.get('/success', (req, res) => {
    res.send('Verification Successful');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, 'localhost', (err) => {
    if (!err) {
        console.log(`Service is running on port ${PORT}`);
    } else {
        console.error(err);
    }
});
