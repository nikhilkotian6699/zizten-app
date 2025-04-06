export default function Header1() {
  return (
    <div className="flex justify-center bg-gray-900/80 backdrop-blur-md border-b border-gray-800 fixed top-[80px] left-0 w-full z-40">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-center items-center h-16">
        <nav className="flex space-x-16 text-sm font-medium text-white">
          <a href="#" className="hover:text-violet-400 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-violet-400 transition duration-300">
            Templates
          </a>
          <a href="#" className="hover:text-violet-400 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-violet-400 transition duration-300">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
