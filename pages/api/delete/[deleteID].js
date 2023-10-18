// import connectDB from "@/utils/connectDB";
// import Customer from "@/models/customers";
// export default async function(req , res){
//     try{
//         await connectDB()
//     }catch(e){
//         res.status(500).json({  message: "Error connecting to DB" , status: "error"  });
//     }
//     if(req.method === "DELETE"){
//         const id = req.query.deleteId;
//         try{
//             Customer.deleteOne({_id: id});
//             res.status(200).json({ message: "Data deleted successfully" , status: "success"})
//         }catch(e){
//             console.log(e);
//             res.status(500).json({ message: "Error deleting customer" , status: "error" });
//         }

//     }
// }
import connectDB from "@/utils/connectDB";
import Customer from "@/models/customers";

export default async function (req, res) {
  try {
    await connectDB();
  } catch (e) {
    console.error('Error connecting to DB:', e); // Log the error message
    res.status(500).json({ message: "Error connecting to DB", status: "error" });
    return; // Stop further processing
  }

  if (req.method === "DELETE") {
    const id = req.query.deleteID;

    if (!id) { // Check if the 'deleteId' parameter is provided
      res.status(400).json({ message: "Missing required 'deleteId' parameter", status: "error" });
      return; // Stop further processing if the parameter is missing
    }

    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ message: "Data deleted successfully", status: "success" });
    } catch (e) {
      console.error('Error deleting customer:', e); // Log the error message
      res.status(500).json({ message: "Error deleting customer", status: "error" });
    }
  }
}
