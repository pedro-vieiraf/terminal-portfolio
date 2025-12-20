import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-black text-white py-4 px-6">
      <Link href="/" className="text-xl font-bold text-primary">
        <span className="hidden md:inline">{'>_ pedro'}</span>
        <span className="md:hidden">{'>_'}</span>
      </Link>

      <nav className="flex gap-4 md:gap-6 text-sm md:text-base">
        <Link href="/skills" className="hover:underline hover:underline-offset-2">
          /skills
        </Link>
        <Link href="/projects" className="hover:underline hover:underline-offset-2">
          /projects
        </Link>
        <Link href="/contact" className="hover:underline hover:underline-offset-2">
          /contact
        </Link>
      </nav>
    </header>
  );
}
