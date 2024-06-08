import express from 'express';
import dotenv from 'dotenv';
import contactRouters from './routes/contactRoutes.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use("/api/contacts", contactRouters);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
