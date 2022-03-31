import { Line } from "react-chartjs-2";
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, } from "chart.js";

ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

export const Sparkline = ({data, status, w, h}) => {

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
          },
        ],
      
      };

    const config = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      scales: {
        y: {
          display: false,

        },
        x: {
          display: false,
        }
      },
      elements: {
        point: {
          radius: 0,
        },
        line: {
          borderJoinStyle: 'round',
        }
      }
      };

  return <Line data={dataPoints} options={config} width={400} height={200}/>
}


