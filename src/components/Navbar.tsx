import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="nav">
      <Link href="/" className="brand">
        <Image src="/icon.svg" alt="GenZ Owais" width={28} height={28} />
        <span>GenZ Owais</span>
      </Link>

      <nav className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
