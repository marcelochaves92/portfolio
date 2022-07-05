import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          className="cursor-pointer text-xl m-1 pt-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/marcelochaves92"
        >
          <FaGithub />
          <span className="sr-only">GitHub</span>
        </a>

        <a
          className="cursor-pointer text-xl m-1 pt-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://www.linkedin.com/in/marcelochaves92/"
        >
          <FaLinkedin />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          className="cursor-pointer text-xl m-1 pt-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
          href="mailto:me.9marceli@gmail.com"
        >
          <FaEnvelope />
          <span className="sr-only">Email</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with
          <span className="mr-2" role="link" aria-label="heart">
            {" "}
            💙
          </span>
          by
          <a
            className="text-blue-500 hover:underline cursor-pointer"
            href="https://www.linkedin.com/in/marcelochaves92"
          >
            {" "}
            Marcelo Chaves
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
