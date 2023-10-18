import EditCustomerPage from "@/components/templates/EditCustomerPage";
import Customer from "@/models/customers";
import connectDB from "@/utils/connectDB";
import { useRouter } from "next/router";
const EditCustomer = ({data}) => {
    const router = useRouter();
    const path = router.query.editCustomer;
    const newDAta = data.find(item=> item._id === path)
    console.log(newDAta);
    return (
        <div>
            <EditCustomerPage data={newDAta} route={path}/>
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