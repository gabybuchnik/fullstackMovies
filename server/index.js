const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.listen(port, () => { console.log(`you are listening to post ${port}`) });