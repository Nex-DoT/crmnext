import { useState } from "react";
import { useRouter } from "next/router";
import Form from "../models/Form";
const AddCustomer = () => {
    const router = useRouter();
    const [form , setForm] = useState({
        name: "",
        lastName: "",
        email:"",
        phone:"",
        address:"",
        postalCode:"",
        date:"",
        products:[],
    })
 const cancelHandeler = ()=>{
    setForm({
        name: "",
        lastName: "",
        email:"",
        phone:"",
        address:"",
        postalCode:"",
        date:"",
        products:[],
    })
    router.push('/')
 }
 const SaveHandeler = async () => {
    const res = await fetch('/api/customer/' , {
        method: 'POST',
        body: JSON.stringify({data :form}),
        headers : { 'Content-Type':'application/json'}
    })
    const DATA = await res.json();
    console.log(DATA);
    if(DATA.status === 'success') router.push("/")

 }
    return (
        <>
            <div className="flex flex-col items-center justify-between rounded-md border-2 w-2/4 pt-4 m-auto">
                <h1 className="text-2xl text-white m-5">Create a New Customer</h1>
                <Form form={form} setForm={setForm}/>
                <div className="w-full flex items-center justify-between">
                    <button className="p-2 border rounded-md border-red-400 text-white m-4" onClick={cancelHandeler}>Cancel</button>
                    <button className="p-2 border rounded-md border-green-400 text-white m-4" onClick={SaveHandeler}>Save</button>
                </div>
            </div>
        </>
    );
};

export default AddCustomer;