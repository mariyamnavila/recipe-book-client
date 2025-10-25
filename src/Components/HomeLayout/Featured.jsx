import { Fade } from "react-awesome-reveal";

const Featured = () => {
    return (
        <div className="max-w-7xl py-20">
            <div className="flex-col text-center space-y-2">
                <Fade direction="up" fraction={.8} cascade damping={0.3}>
                    <h3 className="text-5xl font-semibold text-primary ">FEATURED CREATIONS</h3>
                    <p className="font-medium text-secondary ">A distinguished selection of culinary masterpieces, each designed to transform simple ingredients into an unforgettable dining experience.</p>
                </Fade>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Featured;