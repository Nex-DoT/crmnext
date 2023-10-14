import AddItem from "../templates/AddItem";
const AddForm = ({form , setForm}) => {
    console.log(form);
    return (
        <div className="w-full p-6">
            <h1 className="text-3xl text-white m-auto">Add Products</h1>
            {form.products.map((item)=><AddItem></AddItem>)}
        </div>
    );
};

export default AddForm;