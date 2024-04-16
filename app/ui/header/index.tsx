'use client'

import Image from "next/image";
import WalletButton from "./wallet-button";
import VoterPanel from "./VoterPanel";

function Header() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex flex-row justify-between w-full items-center">
                <div>
                    <Image src="/image/realm.png" width={96} height={32} alt="realm logo" />
                </div>
                <WalletButton />
            </div>
            <div className="">
                <Image src="/image/banner.png" width={722} height={242} alt="dao banner" />
            </div>
            <h2 className="font-semibold text-primary-text text-md">Voting Power</h2>
            <VoterPanel />
        </div>
    )
}

export default Header