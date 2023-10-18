import EditCustomerPage from "@/components/templates/EditCustomerPage";
import Customer from "@/models/customers";
import connectDB from "@/utils/connectDB";
import { useRouter } from "next/router";
const EditCustomer = ({data}) => {
    const router = useRouter();
    const newDAta = data.find(item=> item._id === router.query.editCustomer)
    console.log(newDAta);
    return (
        <div>
            <EditCustomerPage data={newDAta}/>
        </div>
    );
};

export default EditCustomer;
export async function getServerSideProps() {
    try{
        await connectDB();
        const data = await Customer.find()
        return {
            props:{data : JSON.parse(JSON.stringify(data))}
        }
    }catch(e){
        console.log(e);
    }
}