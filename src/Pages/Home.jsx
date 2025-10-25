import Cooking from "../Components/HomeLayout/Cooking";
import Featured from "../Components/HomeLayout/Featured";
import Header from "../Components/HomeLayout/Header";
import Popular from "../Components/HomeLayout/Popular";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Featured></Featured>
            <Cooking></Cooking>
            <Popular></Popular>
        </div>
    );
};

export default Home;