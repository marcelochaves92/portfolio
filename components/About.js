import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

function About() {
    return (
        <div className="max-w-4xl mt-20 mx-auto">
            <p className="text-2xl text-black md:text-4xl font-bold text-center">
                Hey 👋
            </p>
            <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
                I'm a passionate web developer. I love creating projects and solutions
                for people in my life.
            </p>

            <ScrollIntoView selector="#tech">
                <div className="mx-auto p-20">
                    <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
                </div>
            </ScrollIntoView>
        </div>
    );
}

export default About;
