// import { useRouter } from "next/router";
// const CardID = ({data}) => {
//     console.log(data._id);
//     const router = useRouter();
//     const deleteHandeler = async ()=>{
//         const res = await fetch(`api/delete/${data._id}` , {
//             method : "DELETE",
//         })
//         const data = await res.json();
//         if(data.status === "success") router.reload();
//     }
//     return (
//         <div className="w-full h-20 rounded-md bg-zinc-900 text-white p-2">
//             <p>{`${data.name} ${data.lastName}`}</p>
//             <div className="flex w-full items-center justify-between p-3">
//                 <button className=" border-2 w-20 rounded-md border-red-400 text-red-400  " onClick={deleteHandeler}>Delete</button>
//                 <button className=" border-2 w-20 rounded-md border-green-400 text-green-400">Edit</button>
//             </div>
//         </div>
//     );
// };

// export default CardID;
import { useRouter } from "next/router";

const CardID = ({ data }) => {

  const router = useRouter();

  const deleteHandler = async () => {
    try {
      const res = await fetch(`api/delete/${data._id}`, {
        method: "DELETE",
      });

      const responseData = await res.json();

      if (responseData.status === "success") {
        router.reload();
      } else {
        // Handle error response
        console.error('Error deleting customer:', responseData.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during deletion:', error);
    }
  };

  return (
    <div className="w-full h-20 rounded-md bg-zinc-900 text-white p-2">
      <p>{`${data.name} ${data.lastName}`}</p>
      <div className="flex w-full items-center justify-between p-3">
        <button 
        onClick={empty}
        className="">
            Edit
        </button>
        <button
          className="border-2 w-20 rounded-md border-red-400 text-red-400"
          onClick={deleteHandler}
        >
          Delete
        </button>
        <button className="border-2 w-20 rounded-md border-green-400 text-green-400">
          Edit
        </button>
      </div>
    </div>
  );
};

export default CardID;
