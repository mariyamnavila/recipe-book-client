import Cooking from "../Components/HomeLayout/Cooking";
import Featured from "../Components/HomeLayout/Featured";
import Header from "../Components/HomeLayout/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Featured></Featured>
            <Cooking></Cooking>
        </div>
    );
};

export default Home;