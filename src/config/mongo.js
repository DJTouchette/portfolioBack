import mongoose from 'mongoose';

function connectMongo() {
  mongoose.connect(process.env.MONGO_URI);
}

export default connectMongo;
