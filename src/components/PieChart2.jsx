import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [],
  datasets: [
    {
      data: [200, 500,300],
      backgroundColor: ["#25A418", "#F05959","#E3A131"],
      hoverOffset: 2,
    },
  ],
};
const PieChart2 = () => {
  return (
    <div>
      <div className="w-48 h-48">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default PieChart2;
