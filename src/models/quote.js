import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  name: String,
  email: {
    required: true,
    type: String,
  },
  description: String,
  budget: String,
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
  responded: {
    type: Boolean,
    default: false,
  }
});

const Quote = mongoose.model('quote', quoteSchema);

export default Quote;
