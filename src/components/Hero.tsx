import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/logo.svg"
        alt="GenZ Owais Logo"
        width={120}
        height={120}
        priority
      />
      <h1>Full Stack Engineer</h1>
      <p>Building fast, scalable, modern web applications.</p>
    </section>
  );
}
