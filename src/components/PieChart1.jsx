import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [],
  datasets: [
    {
      data: [500, 500],
      backgroundColor: ["blue", "white"],
      hoverOffset: 2,
    },
  ],
};
const PieChart1 = () => {
  return (
    <div>
    
      <div className="w-48 h-48">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default PieChart1;
