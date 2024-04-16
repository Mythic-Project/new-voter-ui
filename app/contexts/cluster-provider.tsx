'use client'

import {ReactNode, createContext, useContext } from "react";
import {useAtomValue} from "jotai";
import {atomWithStorage} from "jotai/utils";
import {clusterApiUrl} from "@solana/web3.js";

const defaultCluster = clusterApiUrl('devnet');
const cluster = atomWithStorage('cluster', defaultCluster);

const Context = createContext(defaultCluster);

export const useCluster = () => useContext(Context);

export const ClusterProvider = ({children}: {children: ReactNode}) => {
    const value = useAtomValue(cluster);

    return (
        <Context.Provider value={value}>{children}</Context.Provider>
    )
}