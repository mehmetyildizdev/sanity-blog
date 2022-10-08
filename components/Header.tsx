import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="/assets/logo.png"
            alt=""
          ></img>
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="bg-green-600 px-4 py-1 rounded-full">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-400">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-400">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
