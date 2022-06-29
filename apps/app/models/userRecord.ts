import mongoose from 'mongoose';

const UserRecordSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.EmailRecord ||
  mongoose.model('UserRecord', UserRecordSchema);
