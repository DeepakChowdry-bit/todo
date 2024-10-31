import mongoose from "mongoose";

const connect = async () => {
  const PORT = process.env.MONGO_COMPASS || "";
  console.log(PORT)
  if (!PORT) {
    console.error("Connection string is empty");
    return;
  }
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(PORT);
    console.log("Connected to MongoDB successfully");
  } catch (e: any) {
    console.error("Error connecting to mongodb : ", e.message);
  }
};

export default connect;
