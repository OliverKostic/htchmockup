import React from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

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

const Chart2: React.FC = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        fill: true,
        backgroundColor: "rgba(185, 99, 255, 0.5)",
        borderColor: "rgba(185, 99, 255, 1)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.3,
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        fill: true,
        backgroundColor: "rgba(53, 235, 83, 0.5)",
        borderColor: "rgba(53, 235, 83, 1)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Area Chart",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Chart2;
