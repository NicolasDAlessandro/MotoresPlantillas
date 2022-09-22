const express = require('express');
const { propfind } = require('./routers/app.routers');
const apiRoutes = require('./routers/app.routers');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.set('views', './views');
app.set('view engine', 'ejs');

const connectedServer = app.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.error('Error: ', error);
});

