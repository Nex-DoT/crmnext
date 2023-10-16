import connectDB from "@/utils/connectDB";
import Customer from "@/models/customers";
import HomePage from "@/components/templates/HomePage";
function Index({customer}) {
  return (
      <div className="flex items-center justify-center">
          <HomePage customer={customer}/>
      </div>
  )
}
export default Index;
export async function getServerSideProps(){
  try{
      await connectDB();
      const customer = await Customer.find()
      return{
        props:{ customer : JSON.parse(JSON.stringify(customer))}
        
      }
  }catch(e){
    console.log(e);
  }
}
