"use client";
import "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Sparkline({ sparkline_data, change_percentage }) {
  const sparkline_color = change_percentage > 0 ? "#25E78A" : "#EF4444";

  const data = {
    labels: sparkline_data,
    datasets: [
      {
        data: sparkline_data,
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: `${sparkline_color}`,
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  };

  const config = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderJoinStyle: "round",
      },
    },
  };

  return (
    <Line data={data} options={config} width={400} height={150} redraw={true} />
  );
}
