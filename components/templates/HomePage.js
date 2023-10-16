import CardID from "../models/CardID";
const HomePage = ({customer}) => {
    return (
        <div className="w-2/4 flex justify-center items-center flex-wrap  h-screen">
            {customer.map((item , index) => <CardID key={index} data={item}/>)}
        </div>
    );
};

export default HomePage;