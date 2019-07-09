const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;
const movieRouter = require('./routes/movies');

app.use(express.json());
app.use(cors());
app.use('/home', movieRouter);

app.listen(port, () => { console.log(`you are listening to post ${port}`) });