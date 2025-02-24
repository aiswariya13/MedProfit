import  mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const Medicine = mongoose.model('Medicine', medicineSchema);
export default Medicine;
