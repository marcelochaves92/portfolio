import { FaAngular, FaVuejs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skill = ({ title, icon }) => {
    return (
        <div className="select-none cursor-pointer transition transform hover:scale-105 hover:shadow-2xl flex flex-col w-full md:w-40 p-10 m-6 overflow-hidden bg-white shadow-lg rounded-xl sm:w-52">
            {icon}
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                {title}
            </p>
        </div>
    );
};

function Skills() {
    return (
        <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
            <p className="text-2xl text-center text-black sm:text-4xl pt-4 font-bold">
                Tech I Use
            </p>

            <div className="flex flex-wrap justify-center pt-2">
                <Skill
                    icon={<FaAngular color="#dc2626" className="mx-5 text-4xl" />}
                    title="Angular"
                />

                <Skill
                    icon={<FaVuejs color="#194d33" className="mx-auto text-4xl" />}
                    title="Vue.js"
                />

                <Skill
                    icon={<FaReact color="#2196F3" className="mx-auto text-4xl" />}
                    title="React"
                />

                <Skill
                    icon={<FaNodeJs color="#65a30d" className="mx-auto text-4xl" />}
                    title="Node.js"
                />

                <Skill
                    icon={<SiTailwindcss color="#2196F3" className="mx-auto text-4xl" />}
                    title="Tailwind CSS"
                />
            </div>
        </div>
    );
}

export default Skills;
