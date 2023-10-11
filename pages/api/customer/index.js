import Customer from "@/models/customers";
import connectDB from "@/utils/connectDB";

export default async function handeler(req , res){
    try{
        await connectDB()

    }catch(err){
        console.log(err);   
        res.status(500).json({status: "fail" , message: `fail to connect to DB ${err}`})
    }

    if(req.method==='POST' ){
        const someData = req.body.data;
    if(!someData.name || !someData.lastName || !someData.email) return res.status(400).json({status:"failed", message: "Invalid data"});
        try{
            const young = Customer.create(someData);
            res.status(201).json({status:"success", message:"Data created successfully"}); 
        }catch(err){
            console.log(err);
            res.status(400).json({status:"failed", message:"creating data failed"}); 
        }
    }
}