import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-purple-900">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/landing">
              <span className="text-xl font-bold tracking-tighter text-white cursor-pointer hover:text-gray-200 transition-colors">
                Chatbot
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="https://github.com/Chatbot-DL">
              <FaGithub className="h-10 w-10 text-white cursor-pointer hover:text-gray-200 transition-colors" />
            </Link>
          </div>
          <div className="md:hidden">
            {/* Mobile Menu Button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
