require('dotenv').config();
const express = require('express');
const apiRouter = require('./routes/api.routes');
const serverConfig = require('./config/serverConfig');

const PORT = process.env.PORT ?? 3000;

const app = express();

//
serverConfig(app)


//
app.use('/api', apiRouter);




app.listen(PORT, () => {
  console.log(`Server starter at ${PORT} port`);
});


