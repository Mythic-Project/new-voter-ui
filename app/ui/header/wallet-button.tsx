import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function WalletButton() {
    const {publicKey} = useWallet()

    return (
        <div className="">
            <WalletMultiButton style={{background: "##171923", color: "white", fontWeight: 400, fontSize: "13px"}}>
                    {publicKey ? 
                        undefined : 
                        "Connect Wallet"
                    }
                </WalletMultiButton>
        </div>   
    )
}

export default WalletButton