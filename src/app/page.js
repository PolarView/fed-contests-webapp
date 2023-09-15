import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center  flex-col p-4  overflow-x-hidden">
      <div className="w-[60%] p-4 m-10 flex flex-col items-center justify-between">
        <img src="/favicon-32x32.png" className="m-6 h-24 w-24" alt="Flowbite Logo" />
        <div className="lg:text-[60px] text-[40px]  text-center">
          Федерация скейтбординга контесты
        </div>
      </div>

      <div className="w-[90%] rounded p-4 md:w-[60%] lg:w-[45%] md:text-xl lg:text-3xl text-center font-semibold my-12 border border-gray-700 border-dotted">
        На этой странице вы можете отслеживать свои результаты, сначала в квалификации, затем в
        финале в реальном времени.
      </div>

      <div className="w-[90%] tracking-wide mt-10  mb-12 text-3xl md:text-4xl lg:text-6xl font-bold text-center">
        Квалификация
      </div>

      <div className="flex items-center justify-evenly flex-col w-[80%] h-[60%] my-16 gap-y-14">
        <div className="flex-1 text-center flex w-full text-3xl md:text-5xl lg:text-5xl items-center justify-center ">
          <Link href="/men-park-results">Парни парк</Link>
        </div>

        <Separator className=" bg-gray-300 w-[50%]" />

        <div className="flex-1 text-center flex w-full text-3xl md:text-5xl lg:text-5xl items-center justify-center ">
          <Link href="/women-park-results">Девушки парк</Link>
        </div>

        <Separator className=" bg-gray-300 w-[50%]" />

        <div className="flex-1 text-center flex w-full text-3xl md:text-5xl lg:text-5xl items-center justify-center">
          <Link href="/men-street-results">Парни улица</Link>
        </div>

        <Separator className=" bg-gray-300 w-[50%]" />

        <div className="flex-1 text-center flex w-full text-3xl md:text-5xl lg:text-5xl items-center justify-center">
          <Link href="/women-street-results">Девушки улица</Link>
        </div>
      </div>

      <div className="w-[90%] mt-10  tracking-wide mb-12 text-3xl md:text-4xl lg:text-6xl font-bold text-center">
        Финал
      </div>

      <div className="flex items-center justify-evenly flex-col w-[80%] h-[60%] my-16 gap-y-14">
        <div className="flex-1 text-center flex w-full text-3xl md:text-5xl lg:text-5xl items-center justify-center ">
          <Link href="/men-park-results-final">Парни парк</Link>
        </div>

        <Separator className=" bg-gray-300 w-[50%]" />

        <div className="flex-1 text-center flex w-full text-3xl md:text-5xl lg:text-5xl items-center justify-center ">
          <Link href="/women-park-results-final">Девушки парк</Link>
        </div>

        <Separator className=" bg-gray-300 w-[50%]" />

        <div className="flex-1 text-center flex w-full text-3xl md:text-5xl lg:text-5xl items-center justify-center">
          <Link href="/men-street-results-final">Парни улица</Link>
        </div>

        <Separator className=" bg-gray-300 w-[50%]" />

        <div className="flex-1 text-center flex w-full text-3xl md:text-5xl lg:text-5xl items-center justify-center">
          <Link href="/women-street-results-final">Девушки улица</Link>
        </div>
      </div>

      <footer className="p-4 w-[80%] bg-white md:px-6 md:py-8 my-10 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            target="_blank"
            className="flex items-center flex-col md:flex-row mb-4 sm:mb-0">
            <img src="/favicon-32x32.png" className="m-4 h-8" alt="Logo" />
            <span className="self-center text-sm lg:text-xl font-semibold whitespace-nowrap dark:text-white">
              Федерация Скейтбординга Москвы
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
              <a href="/">О нас</a>
            </li>
            <li className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
              <a
                href="/"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
                Политика конфедециальности
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Все права защищены.
        </span>
      </footer>
    </main>
  );
}
