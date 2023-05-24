import { useState, useEffect } from "react";
import Web3 from "web3";

const contractAddress = "0x058733ecFf0EC820FeF767fa196108FF7e427E21";

export default function Connection() {
  const [account, setAccount] = useState(null);
  const [contractData, setContractData] = useState();
  const [token_Name, setTokenName] = useState(null);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState(0)

  
  useEffect(() => {
    const getAccount = async () => {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();

        console.log("Metamask Wallets", accounts);

        setAccount(accounts[0]);
      } catch (error) {
        if (error.message === "User denied account authorizatio")
          console.log("User denied account authorization");
        else if (error.message === "MetaMask is not enabled") {
          // add link to down
// add link to download metamask
          console.log(error);
        } else {
          console.log;
        }
      }
    };

    getAccount().catch(console.error);
  }, []);
  return (
<div className="container min-h-screen flex-col items-center justify-between p-24">
      {/* {!account ? (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          onClick={() => window.ethereum.enable()}
        >
          Connet To MetaMask
        </button>
      ) : null} */}
      <h1>walletConnect</h1>
      </div>
  )
}      