import express from "express"
import fetch from "node-fetch"
import  Medicine from '../models/Medicine.js';
const MedicineRouter = express.Router();

// Get all medicines
MedicineRouter.get('/', async (req, res) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      res.json(products);
    
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Add a new medicine
MedicineRouter.post('/', async (req, res) => {
  const medicine = new Medicine(req.body);
  try {
    const newMedicine = await medicine.save();
    res.status(201).json(newMedicine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default MedicineRouter;
