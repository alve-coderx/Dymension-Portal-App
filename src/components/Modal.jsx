import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import metamask from "../assets/metamask.svg";
import walletcoonnect from "../assets/walletcoonnect.svg";
import trust from "../assets/trust.jpg";
import kapir from "../assets/kapir.jpg";
import rabby from "../assets/rabby.jpg";
import leap from "../assets/leap.jpg";

const Modal = ({
  setWalletCn,
  setShowModal,
  setImportWallet,
  setCurrentWallet,
}) => {
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed top-0 inset-0 p-1 z-50 outline-0 ">
      <div className="lg:w-[440px] w-full  py-4 px-2 rounded-md  bg-[#252120] drop-shadow-2xl border border-gray-700">
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
            <p className="text-gray-600 text-sm font-semibold">
              Recommended for best security
            </p>
          </div>
          <div className="grid grid-cols-1 my-2 gap-4">
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
                setCurrentWallet(kapir);
              }}
            >
              <img src={kapir} alt="kaik" className="w-7" />
              <p className="text-md font-[600]">Kepir </p>
            </div>
            <div
              className="text-gray-300 font-[300] flex gap-2 items-center cursor-pointer bg-[#3B3634] rounded-md p-3"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(rabby);
              }}
            >
              <img src={rabby} alt="kaik" className="w-7 rounded-full" />
              <p className="text-md font-[600]">Rabby </p>
            </div>
            <div
              className="text-gray-300 font-[300] flex gap-2 items-center cursor-pointer bg-[#3B3634] rounded-md p-3"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(leap);
              }}
            >
              <img src={leap} alt="kaik" className="w-7 rounded-full" />
              <p className="text-md font-[600]">Leap </p>
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
              <p className="text-md font-[600]">Trust </p>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Modal;
