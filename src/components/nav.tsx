import Link from "next/link";

export default function GlobalNav() {
  return (
    <div className="h-14 min-w-full top-0 fixed flex items-center justify-end  text-slate-800  z-10">
      <div className="w-1/2 flex justify-around px-32">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>{" "}
      </div>
    </div>
  );
}
