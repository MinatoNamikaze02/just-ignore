import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Stats = () => {
  const [scores, setScores] = useState([]);
  const [retention, setRetention] = useState([]);

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem('scores')) || [];
    const savedRetention = JSON.parse(localStorage.getItem('retention')) || [];
    setScores(savedScores);
    setRetention(savedRetention);
  }, []);

  const data = {
    labels: scores.map((score, index) => `Test ${index + 1}`),
    datasets: [
      {
        label: 'Quantitative Reasoning',
        data: scores.map(score => score.QuantitativeReasoning),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Verbal Reasoning',
        data: scores.map(score => score.VerbalReasoning),
        fill: false,
        borderColor: 'rgba(153,102,255,1)',
      },
      {
        label: 'Retention Percentage',
        data: retention.map(r => r.percentage),
        fill: false,
        borderColor: 'rgba(255,159,64,1)',
        yAxisID: 'y-axis-2',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'GRE Scores',
        },
      },
      'y-axis-2': {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Retention Percentage',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  useEffect(() => {
    console.log("Scores:", scores);
    console.log("Retention:", retention);
  }, [scores, retention]);

  return (
    <div>
      <h1>GRE Scores and Retention</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default Stats;
