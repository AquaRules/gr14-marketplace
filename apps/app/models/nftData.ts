import mongoose from 'mongoose';

const NFTDataSchema = new mongoose.Schema({
  tokenId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
  },
  chain: {
    type: Number,
  },
  selling_price: {
    type: String,
  },
  lend_price: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.NFTData ||
  mongoose.model('NFTData', NFTDataSchema);
