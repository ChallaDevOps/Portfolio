export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-cyan-400">
          DevOps Portfolio
        </h1>

        <div className="space-x-5">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
