import React from 'react';
import Form from '../models/Form';
import { useState } from 'react';
import AddForm from '../models/AddForm';
const EditCustomerPage = ({data}) => {
    const [edit , setEdit] = useState(data)
    console.log(edit);
    const addHandeler = ()=>{
        setEdit(
            {...edit,
            products: [...edit.products , {name: '',price:'',quantity:''}]}
        )
}
    return (
        <div className="flex flex-col items-center justify-between rounded-md border-2 w-2/4 pt-4 m-auto">
            <Form form={edit} setForm={setEdit}></Form>
            <AddForm form={edit} setForm={setEdit}/>
            <button className="border-2 rounded-md border-green-400 p-2 text-white w-2/4" onClick={addHandeler}>Add items</button>
        </div>
    );
};

export default EditCustomerPage;