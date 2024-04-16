import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/style/globals.css";
import { ClusterProvider } from "./contexts/cluster-provider";
import { WalletContextProvider } from "./contexts/wallet-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAO UI",
  description: "Your DAO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClusterProvider>
          <WalletContextProvider>
            {children}
          </WalletContextProvider>
        </ClusterProvider>
      </body>
    </html>
  );
}
