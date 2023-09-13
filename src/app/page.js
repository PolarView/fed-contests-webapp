import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-10">
      <div className="flex-1 flex w-full text-5xl items-center justify-center border border-solid border-black">
        <Link href="/men-park-results">Парни парк</Link>
      </div>

      <div className="flex-1 flex w-full text-5xl items-center justify-center border border-solid border-black">
        <Link href="/women-park-results">Девушки парк</Link>
      </div>
      <div className="flex-1 flex w-full text-5xl items-center justify-center border border-solid border-black">
        <Link href="/men-street-results">Парни улица</Link>
      </div>
      <div className="flex-1 flex w-full text-5xl items-center justify-center border border-solid border-black">
        <Link href="/women-street-results">Девушки улица</Link>
      </div>
    </main>
  );
}
