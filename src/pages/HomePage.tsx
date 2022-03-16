import { Link } from "react-router-dom";
import { GradientContainer } from "../components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <GradientContainer>
            <div>
                <h1 className="p-4 font-heading text-6xl font-extrabold text-primary-black">
                    Project Kanban Board
                </h1>

                <p className="text-center text-gray-600">
                    Made with React, TailwindCSS, TypeScript
                </p>
            </div>

            <button
                onClick={() => navigate("/board")}
                className="my-10 rounded-full bg-primary-black py-4 px-8 font-bold text-white transition-all hover:bg-primary-black/90"
            >
                <Link to="/board">Explore Now</Link>
            </button>
        </GradientContainer>
    );
};

export default HomePage;
