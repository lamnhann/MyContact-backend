import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRouters from './routes/contactRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO)
    .then(()=> {
        console.log('MongoDb connected');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB')
    });

const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/contacts", contactRouters);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
