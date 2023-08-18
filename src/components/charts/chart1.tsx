import { Bar } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useAtom } from "jotai";
import { chartPositionAtom } from "../../context/global";
import { useEffect, useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

export default function Chart1() {
  const [chartPosition, setChartPosition] = useAtom(chartPositionAtom);

  useEffect(() => {
    if (!chartRef.current) return;
    chartRef.current.resetZoom();
    chartRef.current.scales.x.options.min = chartPosition.x;
    chartRef.current.scales.y.options.min = chartPosition.y;
    chartRef.current.update();
  }, [chartPosition]);

  const chartRef = useRef<any>();

  const handleChangeChartPosition = () => {
    if (!chartRef.current) return;

    const position = {
      x: chartRef.current.scales.x.min || 0,
      y: chartRef.current.scales.y.min || 0,
    };

    setChartPosition(position);
  };

  const beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const data = {
    labels: meses,
    datasets: [
      // Linhas do gráfico
      {
        label: "Benefícios",
        data: beneficios,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99,132)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackGroundColor: "rgba(255,99,132)",
      },
    ],
  };

  return (
    <div style={{ width: "40rem", height: "20rem" }}>
      <Bar
        ref={chartRef}
        data={data}
        options={{
          responsive: true,
          animation: false,
          plugins: {
            legend: {
              display: false,
            },
            zoom: {
              pan: {
                enabled: true,
                mode: "xy",
                onPan: handleChangeChartPosition,
              },
            },
          },
        }}
      />
    </div>
  );
}
