import { mongoose } from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://kanae:ababab@cluster0.9iifgcv.mongodb.net/nextAppDataBase?retryWrites=true&w=majority'
    )
    console.log('Success: Connected to MongoDB')
  } catch (error) {
    console.log('Failure: Unconnected to MongoDB', error)
    throw new Error()
  }
}

export default connectDB
