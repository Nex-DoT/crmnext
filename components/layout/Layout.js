import Link from "next/link";
const Layout = ({children}) => {
    return (
        <div>
           <header className="flex w-full items-center justify-around h-20 text-white bg-zinc-900">
               <h2 className="text-xl">Botostart CRM</h2>
               <Link className="bg-green-500 p-2 rounded-md" href="/add-customer">Add Customer</Link>
           </header>
           <main className=" bg-zinc-950">{children}</main>
           <footer className="flex  justify-center p-2 bg-zinc-900 text-white">
               Next.js course | CRM Project &copy;  
           </footer>            
        </div>
    );
};
export default Layout;