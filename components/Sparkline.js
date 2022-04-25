import React, { useRef } from "react";

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

export const Sparkline_7d = ({ data, status }) => {
  const dataPrices = data.price;

  const borderColor = (e) => {
    if (e < 0) {
      return "#FF3838";
    }
    return "#19CD09";
  };

  const dataPoints = {
    labels: dataPrices,
    datasets: [
      {
        data: dataPrices,
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: borderColor(status),
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
    <Line
      data={dataPoints}
      options={config}
      width={400}
      height={150}
      redraw={true}
    />
  );
};

export const Sparkline_24h = ({ data, status, w, h }) => {
  const borderColor = (e) => {
    if (e < 0) {
      return "#FF3838";
    }
    return "#19CD09";
  };

  const fillColor = (e) => {
    if (e < 0) {
      return "#FF383822";
    }
    return "#19CD0922";
  };

  const dataPoints = {
    labels: data,
    datasets: [
      {
        data: data,
        borderColor: borderColor(status),
        borderWidth: 4,
        fill: "start",
        backgroundColor: fillColor(status),
        tension: 0.5,
      },
    ],
  };

  const config = {
    responsive: true,
    maintainAspectRatio: false,
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
    <Line
      data={dataPoints}
      options={config}
      width={w}
      height={h}
      redraw={true}
      className="mb-4"
    />
  );
};
