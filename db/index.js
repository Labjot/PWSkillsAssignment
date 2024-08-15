import mongoose from "mongoose"


const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log("Connected to MongoDB successfully. ",connectionInstance.connection.host)

    } catch (error) {
        console.log("Error while connecting to MongoDB", error)
        process.exit(1)
    }
}

export { connectDB }