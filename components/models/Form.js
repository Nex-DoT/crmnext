const Form = ({form , setForm , name}) => {
    console.log(form);
    const onChangeHandeler = (e) => {
            setForm({
                ...form,
                [e.target.name] : e.target.value,
            })
    };
    return (
        <form className="w-full">
            <div className="w-full p-5">
                <div>
                    <h2 className="text-xl text-white m-2">Name</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="name"value={form.name}  onChange={onChangeHandeler} />
                </div>
                <div>
                    <h2 className="text-xl text-white m-2">Last Name</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="lastName"value={form.lastName}  onChange={onChangeHandeler} />
                </div>
                <div>
                    <h2 className="text-xl text-white m-2">Email</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="email"value={form.email}  onChange={onChangeHandeler} />
                </div>
                <div>
                    <h2 className="text-xl text-white m-2">Phone</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="phone"value={form.phone} onChange={onChangeHandeler} />
                </div>
                <div>
                    <h2 className="text-xl text-white m-2">Address</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="address"value={form.address} onChange={onChangeHandeler} />
                </div>
                <div>
                    <h2 className="text-xl text-white m-2">Postal Code</h2>
                    <input className="border-2 rounded-md border-indigo-300 w-full bg-zinc-900 h-10 outline-none text-white p-2 text-sm" type="text" name="postalCode"value={form.postalCode} onChange={onChangeHandeler}/>
                </div>
            </div>
            
        </form>
    );
};

export default Form;