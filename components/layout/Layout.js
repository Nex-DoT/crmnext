import Link from "next/link";
const Layout = ({children}) => {
    return (
        <div>
           <header className="flex w-full items-center justify-around h-20">
               <h2 className="text-xl">Botostart CRM</h2>
               <Link className="bg-green-500 p-2 rounded-md" href="/add-customer">Add Customer</Link>
           </header>
           <main className="w-full h-fullScreen min-h-screen">{children}</main>
           <footer className="flex  justify-center p-2 bg-gray-500">
               Next.js course | CRM Project &copy;  
           </footer>            
        </div>
    );
};
export default Layout;