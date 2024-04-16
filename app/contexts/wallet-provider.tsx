'use client'

import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import { FC, ReactNode, useMemo } from "react";
import { useCluster } from "./cluster-provider";
import dynamic from "next/dynamic";

const WalletModalProviderDynamic = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletModalProvider,
    { ssr: false }
);

export const WalletContextProvider: FC<{children: ReactNode}> = ({children}) => {
    const cluster = useCluster();
    const endpoint = useMemo(() => cluster, [cluster]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} autoConnect={true}>
                <WalletModalProviderDynamic>
                    {children}
                </WalletModalProviderDynamic>
            </WalletProvider>
        </ConnectionProvider>
    )
}