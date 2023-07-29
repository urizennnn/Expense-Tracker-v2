const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/home'))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/home')

const routes = require('./routes/routes'); // Update the require path

app.use('/', routes);

const PORT = 9348
app.listen(PORT, () => {
    console.log("Server has been hit")
    console.log(`Server is running on http://localhost:${PORT}`);
});
