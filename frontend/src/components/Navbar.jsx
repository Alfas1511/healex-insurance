export default function Navbar() {
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Healex</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            Plans
          </a>
          <a href="#" className="hover:text-gray-200">
            About
          </a>
          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
        </div>

        <a
          href="https://wa.me/917356245467"
          className="bg-white text-primary font-semibold px-4 py-2 rounded-lg"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
