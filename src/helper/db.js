import mongoose from "mongoose";
export const connectDb = async () => {
  try {
   const{connection}= await mongoose.connect(process.env.MONGO_DB_URL, { dbName: "WorkManager" });
 
    console.log("Db .....connected")
    console.log("Connected with this host ......",connection.host)
    // console.log(connection)
} catch (error) {
    console.log("failed to connect with database")
    console.log(error)
}
};
