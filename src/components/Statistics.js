import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import './Statistics.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Statistics = () => {
  const pieData = {
    labels: ['Rescues', 'Rehabilitations', 'Reintegration'],
    datasets: [{
      data: [150, 120, 85],
      backgroundColor: [
        'rgba(211, 21, 69, 0.8)',
        'rgba(255, 107, 107, 0.8)',
        'rgba(255, 159, 159, 0.8)',
      ],
      borderColor: [
        'rgba(211, 21, 69, 1)',
        'rgba(255, 107, 107, 1)',
        'rgba(255, 159, 159, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const barData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Rescues',
        data: [45, 50, 55],
        backgroundColor: 'rgba(211, 21, 69, 0.8)',
      },
      {
        label: 'Rehabilitations',
        data: [35, 40, 45],
        backgroundColor: 'rgba(255, 107, 107, 0.8)',
      },
      {
        label: 'Reintegration',
        data: [25, 28, 32],
        backgroundColor: 'rgba(255, 159, 159, 0.8)',
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'white',
          font: {
            size: 14,
            family: "'Segoe UI', sans-serif",
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Overall Impact Distribution',
        color: 'white',
        font: {
          size: 18,
          family: "'Segoe UI', sans-serif",
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'white',
          font: {
            size: 14,
            family: "'Segoe UI', sans-serif",
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Yearly Progress',
        color: 'white',
        font: {
          size: 18,
          family: "'Segoe UI', sans-serif",
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'white',
          font: {
            size: 12,
            family: "'Segoe UI', sans-serif",
          },
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'white',
          font: {
            size: 12,
            family: "'Segoe UI', sans-serif",
          },
        },
      },
    },
  };

  return (
    <div className="statistics-container">
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-wrapper">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-wrapper">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </div>
      <div className="stats-summary">
        <div className="stat-box">
          <h3>Total Rescues</h3>
          <span className="stat-number">150</span>
          <span className="stat-label">Lives Saved</span>
        </div>
        <div className="stat-box">
          <h3>Total Rehabilitations</h3>
          <span className="stat-number">120</span>
          <span className="stat-label">Lives Transformed</span>
        </div>
        <div className="stat-box">
          <h3>Total Reintegration</h3>
          <span className="stat-number">85</span>
          <span className="stat-label">Success Stories</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics; 