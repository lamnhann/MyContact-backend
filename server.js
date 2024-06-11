import express from 'express';
import dotenv from 'dotenv';
import contactRouters from './routes/contactRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRouters);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
