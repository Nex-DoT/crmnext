import {mongoose , mongo} from "mongoose";


async function connectDB  () {
    if(mongoose.connection[0]) return;
    await mongoose.connect(process.env.BASE_URL) ;
    console.log("Connected to DB");
};

export default connectDB;