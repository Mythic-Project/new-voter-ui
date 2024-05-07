import Header from "../ui/header";
import { Proposals } from "../ui/proposals";
import { Footer } from "../ui/footer";

function DaoUi() {
    return (
        <main className="flex min-h-screen flex-col items-center px-4 md:px-24 py-8 bg-gradient-to-b from-[#181731] to-[#170227]">
          <Header />
          <Proposals /> 
          <Footer />
        </main>
    );
}

export default DaoUi