'use client'

import Header from "../ui/header";
import { Proposals } from "../ui/proposals";
import { Footer } from "../ui/footer";
import { useDaoMeta } from "../providers/dao-provider";
import { RealmMetaType } from "../hooks/useRealm";
import { GradientBackground } from "../ui/background";

function DaoUi() {
  const realmMeta = useDaoMeta() as RealmMetaType
  return (
      <main className="flex min-h-screen flex-col items-center px-4 md:px-24 py-8"
        style={{backgroundImage: `linear-gradient(to bottom, ${realmMeta.gradientOne}, ${realmMeta.gradientTwo})`}}
      >
        <GradientBackground />
        <Header />
        <Proposals /> 
        <Footer />
      </main>
  );
}

export default DaoUi