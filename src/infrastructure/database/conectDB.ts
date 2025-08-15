import mongoose from 'mongoose';

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('✅ MongoDB conectado');
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error);
    process.exit(1);
  }
}
