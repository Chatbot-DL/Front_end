import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-purple-900">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold tracking-tighter text-white">Your Logo</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#">
              <span className="text-white hover:text-gray-200 transition-colors cursor-pointer">Home</span>
            </Link>
            <Link href="#">
              <span className="text-white hover:text-gray-200 transition-colors cursor-pointer">About</span>
            </Link>
            <Link href="#">
              <span className="text-white hover:text-gray-200 transition-colors cursor-pointer">Services</span>
            </Link>
            <Link href="#">
              <span className="text-white hover:text-gray-200 transition-colors cursor-pointer">Contact</span>
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
