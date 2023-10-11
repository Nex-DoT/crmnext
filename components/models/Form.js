const Form = ({form , setForm}) => {
    console.log(form);
    return (
        <form className="w-full">
            <div className="w-full p-5">
                <div>
                    <h2 className="text-xl text-white m-2">Name</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="" />
                </div>
                <div>
                    <h2 className="text-xl text-white m-2">Last Name</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="" />
                </div>
                <div>
                    <h2 className="text-xl text-white m-2">Email</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="" />
                </div>
                <div>
                    <h2 className="text-xl text-white m-2">Phone</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="" />
                </div>
                <div>
                    <h2 className="text-xl text-white m-2">Address</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="" />
                </div>
                <div>
                    <h2 className="text-xl text-white m-2">Postal Code</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="" />
                </div>
            </div>
            
        </form>
    );
};

export default Form;