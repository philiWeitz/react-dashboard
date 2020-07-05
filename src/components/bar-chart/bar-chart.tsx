import React, { FC, useEffect, useState } from 'react';
import Chart from 'chart.js';

export const BarChart: FC<{
  data: number[];
  labels: string[];
  title: string;
  id: string;
  onClick?: (dataIdx: number) => any;
}> = ({ data, labels, title, id, onClick }) => {
  const [chart, setChart] = useState<Chart | null>(null);

  useEffect(() => {
    if (chart) {
      chart.data.datasets![0].data = data;
      chart.data.labels = labels;
    }

    const barChart = new Chart(id, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: title,
            data,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
    });
    setChart(barChart);
  }, [data]);

  const handleClick = (event: any) => {
    if (onClick) {
      const activePoints: any[] | undefined = chart?.getElementsAtEvent(event);

      if (activePoints && activePoints.length > 0) {
        onClick(activePoints[0]._index);
      }
    }
  };

  return <canvas id={id} onClick={handleClick} />;
};
