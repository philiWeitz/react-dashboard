import React, { FC } from 'react';
import Chart from 'chart.js';

export const BarChart: FC<{
  data: number[];
  labels: string[];
  title: string;
  id: string;
  onClick?: (dataIdx: number) => any;
}> = ({ data, labels, title, id, onClick }) => {
  const chart = new Chart(id, {
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

  const handleClick = (event: any) => {
    if (onClick) {
      const activePoints: any[] = chart.getElementsAtEvent(event);
      onClick(activePoints[0]._index);
    }
  };

  return <canvas id={id} onClick={handleClick} />;
};
