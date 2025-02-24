import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import MedicineRouter from './routes/medicineRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/medicine',MedicineRouter );
app.use('/api/booking',bookingRouter );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
