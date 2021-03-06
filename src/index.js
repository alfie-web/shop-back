const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const db = require('./core/db');
const createRoutes = require('./routes');



const testDBConnection = async () => {
	try {
		await db.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

testDBConnection();


const app = express();
const PORT = process.env.APP_PORT || 5555;

createRoutes(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
