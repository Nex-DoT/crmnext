import AddItem from "../templates/AddItem";
const AddForm = ({form , setForm}) => {
    console.log(form);
    return (
        <div className="w-full p-6">
            <h1 className="text-3xl text-white m-auto">Add Products</h1>
            {form.products.map((item , index)=><AddItem form={form} key={index} index={index} setForm={setForm}></AddItem>)}
        </div>
    );
};

export default AddForm;