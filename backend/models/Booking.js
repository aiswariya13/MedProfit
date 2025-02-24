import  mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  patientName: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
