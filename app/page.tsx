import Image from "next/image";
import Header from "./ui/header";
import { Proposals } from "./ui/proposals";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-24 py-8">
      <Header />
      <Proposals /> 
    </main>
  );
}
