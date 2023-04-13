import Link from 'next/link';

function Navbar() {
  return (
    <div className="text-center text-xl bg-purple-950 py-4">
      <Link href="/" className="mr-6 hover:text-green-600">
        Home
      </Link>
      <Link href="/about" className="hover:text-green-600">
        About
      </Link>
    </div>
  );
}

export default Navbar;
