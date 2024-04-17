'use client'

import Image from "next/image";
import WalletButton from "./wallet-button";
import VoterPanel from "./VoterPanel";
import { Heading } from "../headings";

function Header() {
    return (
        <div className="w-full flex flex-col gap-8 max-w-[722px]">
            <div className="flex flex-row justify-between w-full items-center">
                <div>
                    <Image src="/image/realm.png" width={96} height={32} alt="realm logo" />
                </div>
                <WalletButton />
            </div>
            <div className="">
                <Image src="/image/banner.png" width={722} height={242} alt="dao banner" />
            </div>
            <Heading title="Voting Power" />
            <VoterPanel />
        </div>
    )
}

export default Header