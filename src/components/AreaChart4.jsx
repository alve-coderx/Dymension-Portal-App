import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#F05959",
      backgroundColor: "#733636",
    },
  ],
};

const AreaChart4 = () => {
  return (
    <div className="bg-[#252120] rounded-md p-3 border border-slate-800">
      <div>
        <p className="text-slate-400 text-lg">New Addresses (7d)</p>
        <div className="flex items-center gap-2 py-2">
          <p className="text-[#f1e1d4] text-md font-semibold">18,323</p>
          <p className="text-[#F05959] text-sm font-semibold">30.68% (7d)</p>
        </div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default AreaChart4;
