const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.json())
app.use(express.urlencoded({extended: true }))


//ejs setup
app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

//routing

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
}
);