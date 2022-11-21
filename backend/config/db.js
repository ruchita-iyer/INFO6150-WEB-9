const mongoose = require("mongoose");


/*const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};*/
const connectDB = async () => {
mongoose.connect(
    process.env.MONGODB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true
    },

    (error) => {
        if(error) throw error;
        console.log("MongoDB connected");
    }
);
}

//export default connectDB;
module.exports=connectDB;