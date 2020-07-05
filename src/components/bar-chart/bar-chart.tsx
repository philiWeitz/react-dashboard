import React, { FC, useEffect, useRef, useState } from 'react';
import Chart from 'chart.js';

export const BarChart: FC = () => {
  const chartRef = useRef(null);
  const [, setChart] = useState<any>(null);

  useEffect(() => renderChart(), [chartRef]);

  const renderChart = () => {
    const newChart = new Chart(chartRef.current!, {
      type: 'bar',
    });
    setChart(newChart);
  };

  return (
    <div>
      <span>Bar Chart</span>
      <canvas ref={chartRef} />
    </div>
  );
};
