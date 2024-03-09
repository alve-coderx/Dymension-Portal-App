import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import metamask from "../assets/metamask.svg";
import walletcoonnect from "../assets/walletcoonnect.svg";
import ledger from "../assets/ledger.svg";
import trust from "../assets/trust.svg";
import trazor from "../assets/trazor.PNG";
import phantom from "../assets/phantom.png";

const Modal = ({
  setWalletCn,
  setShowModal,
  setImportWallet,
  setCurrentWallet,
}) => {
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed top-0 inset-0  z-50 outline-0 ">
      <div className="lg:w-[640px] w-[22.6rem]  py-4 lg:px-4 md:px-9 px-4 rounded-md  bg-[#252120] drop-shadow-2xl border border-slate-700">
        <>
          <div className="flex items-start justify-between text-white font-[600] text-lg border-b border-gray-600 py-5">
            <div>
              <p className="text-white ">Connect a wallet</p>
              <p className="text-gray-500 mt-3   text-sm">
                Connect and interact with Dymension Portal.
              </p>
            </div>
            <AiOutlineClose
              onClick={() => setShowModal(false)}
              className="font-[700] cursor-pointer text-white "
            />
          </div>
          <div className="py-2">
            <p className="text-[#f1e1d4] text-md font-semibold">Wallet</p>
            <p className="text-gray-600 text-sm font-semibold">Recommended for best security</p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 my-10 gap-8">
            <div
              className="text-gray-300 font-[300] flex gap-2 items-center cursor-pointer bg-[#3B3634] rounded-md p-3"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(metamask);
              }}
            >
              <img src={metamask} alt="kaik" className="w-7" />
              <p className="text-md font-[600]">Metamask </p>
            </div>
            <div
              className="text-gray-300 font-[300] flex gap-2 items-center cursor-pointer bg-[#3B3634] rounded-md p-3"
              onClick={() => {
                setShowModal(false);
                setWalletCn(true);
                setCurrentWallet(walletcoonnect);
              }}
            >
              <img src={walletcoonnect} alt="kaik" className="w-7" />
              <p className="text-md font-[600]">WalletConnect</p>
            </div>
            <div
              className="text-gray-300 font-[300] flex gap-2 items-center cursor-pointer bg-[#3B3634] rounded-md p-3"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(trazor);
              }}
            >
              <img src={trazor} alt="kaik" className="w-7" />
              <p className="text-md font-[600]">Trazor Wallet </p>
            </div>
            <div
              className="text-gray-300 font-[300] flex gap-2 items-center cursor-pointer bg-[#3B3634] rounded-md p-3"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(ledger);
              }}
            >
              <img src={ledger} alt="kaik" className="w-7 rounded-full" />
              <p className="text-md font-[600]">Ledger Wallet </p>
            </div>
            <div
              className="text-gray-300 font-[300] flex gap-2 items-center cursor-pointer bg-[#3B3634] rounded-md p-3"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(trust);
              }}
            >
              <img src={trust} alt="kaik" className="w-7 rounded-full" />
              <p className="text-md font-[600]">Trust Wallet </p>
            </div>
            <div
              className="text-gray-300 font-[300] flex gap-2 items-center cursor-pointer bg-[#3B3634] rounded-md p-3"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(phantom);
              }}
            >
              <img src={phantom} alt="kaik" className="w-7 rounded-full" />
              <p className="text-md font-[600]">Phantom Wallet </p>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Modal;
