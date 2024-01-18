import mongoose from 'mongoose';

const ShipMethodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  estimatedDelivery: { type: String, required: true },
  cost: { type: Number, required: true },
  freeThreshold: { type: Number }, // Added field for free shipping threshold
});
export default mongoose.models.ShipMethod ||mongoose.model('ShipMethod', ShipMethodSchema );

