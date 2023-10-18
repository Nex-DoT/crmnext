import Customer from "@/models/customers";
import connectDB from "@/utils/connectDB";

export default async function handeler(req, res){
    try{
        await connectDB();
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Error connecting to DB" , status: "failed"});
    }
    if(req.method === "PATCH"){
        const id = req.query.customerID ;
        const data = req.body.data ;
        
        try{
            const customer = await Customer.findOne({_id : id});
            customer.name = data.name ;
            customer.lastName = data.lastName ;
            customer.email = data.email ;
            customer.phone = data.phone ;
            customer.postalCode = data.postalCode ;
            customer.products = data.products ;
            customer.address = data.address ;
            customer.date = data.date ;
            customer.updateAt = Date.now() ;
            customer.save()
            res.status(200).json({message: "DT Update" , status:"success" })
        }catch(e){
            console.log(e);
        }
    }
}