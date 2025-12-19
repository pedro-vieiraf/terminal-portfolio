import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-black text-white py-4 px-6">
      <Link href="/" className="text-xl font-bold text-primary">{'>_ pedro'}</Link>
      <nav className="flex gap-6">
        <Link href="/skills" className="h-fit hover:underline hover:underline-offset-2">
          /skills
        </Link>
        <Link href="/projects" className="h-fit hover:underline hover:underline-offset-2">
          /projects
        </Link>
        <Link href="/contact" className="h-fit hover:underline hover:underline-offset-2">
          /contact
        </Link>
      </nav>
    </header>
  );
}
