const Navbar = () => (
  <header className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur shadow z-50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <span className="text-secondary">[YourName]</span>
      </h1>
      <ul className="hidden md:flex space-x-8 text-base font-medium">
        <li><a href="#about" className="hover:text-highlight">About</a></li>
        <li><a href="#skills" className="hover:text-highlight">Skills</a></li>
        <li><a href="#projects" className="hover:text-highlight">Projects</a></li>
        <li><a href="#contact" className="hover:text-highlight">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
