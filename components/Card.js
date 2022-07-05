import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Avatar from "../public/images/me.jpg";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="max-w-full mx-auto shadow-xl rounded-full drop-shadow-sm overflow-hidden">
          <Image width={128} height={128} src={Avatar} alt="Profile photo" />
        </div>

        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">Marcelo Chaves</p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Front End Developer
          </p>

          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 pt-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/marcelochaves92"
            >
              <FaGithub />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              className="text-xl m-1 pt-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.linkedin.com/in/marcelochaves92/"
            >
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              className="text-xl m-1 pt-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
              href="mailto:9marceli@gmail.com"
            >
              <FaEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
