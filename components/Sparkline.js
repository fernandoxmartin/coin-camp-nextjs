import { Line } from "react-chartjs-2";
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
      return "#e8503a";
    }
    return "#18BF65";
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
      height={200}
      redraw={true}
    />
  );
};

export const Sparkline_24h = ({ data, status }) => {
  const borderColor = (e) => {
    if (e < 0) {
      return "#e8503a";
    }
    return "#18BF65";
  };

  const fillColor = (e) => {
    if (e < 0) {
      return "#e8503a22";
    }
    return "#18BF6522";
  };

  const dataPoints = {
    labels: data,
    datasets: [
      {
        data: data,
        borderColor: borderColor(status),
        borderWidth: 4,
        fill: true,
        backgroundColor: fillColor(status),
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
      className="mb-4"
    />
  );
};
