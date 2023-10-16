const CardID = ({data}) => {
    return (
        <div className="w-full h-20 rounded-md  bg-zinc-900 text-white p-2">
            <p>{`${data.name} ${data.lastName}`}</p>
            <div className="flex w-full items-center justify-between p-3">
                <button className=" border-2 w-20 rounded-md border-red-400 text-red-400  ">Delete</button>
                <button className=" border-2 w-20 rounded-md border-green-400 text-green-400">Edit</button>
            </div>
        </div>
    );
};

export default CardID;