import Image from "next/image";
import Header from "./ui/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-8">
      <div className="z-10 w-full max-w-[722px] items-center justify-between font-mono text-sm lg:flex">
        <Header />
      </div>   
    </main>
  );
}
