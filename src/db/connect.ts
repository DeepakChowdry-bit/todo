import mongoose, { ConnectOptions } from "mongoose";

const connect = async () => {
  const PORT = process.env.MONGO_URI || "";
  console.log(PORT);

  if (!PORT) {
    console.error("Connection string is empty");
    return;
  }

  try {
    // You can pass an empty object if no options are needed
    const options: ConnectOptions = {};

    await mongoose.connect(PORT, options);
    console.log("Connected to MongoDB successfully");
  } catch (e: unknown) {
    // Handle the unknown type here
    if (e instanceof Error) {
      console.error("Error connecting to MongoDB: ", e.message);
    } else {
      console.error("Unexpected error connecting to MongoDB", e);
    }
  }
};

export default connect;
