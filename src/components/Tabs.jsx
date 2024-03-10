import React from "react";

const Matrics = ({ title, score, rate }) => {
  return (
    <div className="bg-[#252120] border border-gray-800 px-4 py-2 rounded-md">
      <p className="text-[#796F69] text-sm">{title}</p>
      <div className="flex items-center gap-2 py-2">
        <p className="text-[#f1e1d4] text-md font-semibold">{score}</p>
        <p className="text-[#59F0BE] text-sm font-semibold">{score}</p>
      </div>
    </div>
  );
};

const Tabs = ({ setShowModal }) => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-[#f1e1d4] hs-tab-active:text-[#f1e1d4] py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-[#f1e1d4] focus:outline-none focus:text-[#f1e1d4] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
            id="tabs-with-underline-item-1"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
            role="tab"
            onClick={() => setShowModal(true)}
          >
            Metrics
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-[#f1e1d4] hs-tab-active:text-[#f1e1d4] py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-[#f1e1d4] focus:outline-none focus:text-[#f1e1d4] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-2"
            data-hs-tab="#tabs-with-underline-2"
            aria-controls="tabs-with-underline-2"
            role="tab"
            onClick={() => setShowModal(true)}
          >
            Staking
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-[#f1e1d4] hs-tab-active:text-[#f1e1d4] py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-[#f1e1d4] focus:outline-none focus:text-[#f1e1d4] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-3"
            data-hs-tab="#tabs-with-underline-3"
            aria-controls="tabs-with-underline-3"
            role="tab"
            onClick={() => setShowModal(true)}
          >
            Governance
          </button>
        </nav>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 py-6">
        <Matrics title="TVL" score="$19.72M" />
        <Matrics title="Total Addresses Count" score="2.16% (7d)" />
        <Matrics title="Staking APR" score="0.02% (24h)" />
      </div>
    </div>
  );
};

export default Tabs;
