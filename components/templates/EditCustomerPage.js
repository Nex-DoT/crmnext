import React from 'react';
import Form from '../models/Form';
import { useState } from 'react';
import AddForm from '../models/AddForm';
import { useRouter } from 'next/router';
const EditCustomerPage = ({data , path}) => {
    const router = useRouter();
    const [edit , setEdit] = useState(data)
    console.log(edit);
    const addHandeler = ()=>{
        setEdit(
            {...edit,
            products: [...edit.products , {name: '',price:'',quantity:''}]}
        )
    }
    const cancelHandeler = ()=>{
    router.push('/')
 }
 const EditHandeler= async ()=>{
     const res = await fetch(`/api/edit/${router.query.editCustomer}`,{
         method: "PATCH",
         body: JSON.stringify({data: edit}),
         headers: {"content-type": "application/json"}
        });
        const data = await res.json();
        if(data.status === "success"){
            router.push('/');
        }
        
    }
    console.log(`api/edit/${router.query.editCustomer}`);
    return (
        <div className="flex flex-col items-center justify-between rounded-md border-2 w-2/4 pt-4 m-auto">
            <Form form={edit} setForm={setEdit}></Form>
            <AddForm form={edit} setForm={setEdit}/>
            <button className="border-2 rounded-md border-green-400 p-2 text-white w-2/4" onClick={addHandeler}>Add items</button>
            <div className="w-full flex items-center justify-between">
                    <button className="p-2 border rounded-md border-red-400 text-white m-4" onClick={cancelHandeler}>Cancel</button>
                    <button className="p-2 border rounded-md border-green-400 text-white m-4" onClick={EditHandeler}>Edit</button>
                </div>
        </div>
    );
};

export default EditCustomerPage;