const AddItem = ({data}) => {
    console.log(data);
    return (
        <div className=" border-2 mt-4 mb-4 w-full rounded-md border-cyan-200 p-2">
            <div className="w-full m-2 flex items-center justify-center">
                <h2 className="text-white">Name :</h2>
                <input className="w-3/4 ml-2 rounded-md bg-zinc-900 border-blue-300 border-2" type="text" />
            </div>
            <div className="flex items-center justify-between p-6">
                <div className="flex">
                     <h2 className="text-white">Price :</h2>
                     <input className="w-20 ml-2 rounded-md bg-zinc-900 border-blue-300 border-2" type="number" />
                </div>
                <div className="flex ml-2">
                   <h2 className="text-white">Quantity :</h2>
                   <input className="w-20 ml-2 rounded-md bg-zinc-900 border-blue-300 border-2" type="number" />
                </div>
            </div>
        </div>
    );
};

export default AddItem;