import React from 'react'
    import { Bar, Line, Pie } from 'react-chartjs-2'
    import { Chart as ChartJS } from 'chart.js/auto'
    import './Analytics.css'

    export default function Analytics() {
      const performanceData = {
        labels: ['语法1', '语法2', '语法3', '语法4', '语法5'],
        datasets: [
          {
            label: '掌握程度',
            data: [85, 59, 80, 81, 56],
            backgroundColor: 'rgba(75,192,192,0.4)',
          }
        ]
      }

      const progressData = {
        labels: ['第1周', '第2周', '第3周', '第4周'],
        datasets: [
          {
            label: '学习进度',
            data: [20, 45, 70, 90],
            borderColor: 'rgba(153,102,255,1)',
            fill: false,
          }
        ]
      }

      const topicDistributionData = {
        labels: ['名词', '动词', '形容词', '副词', '其他'],
        datasets: [
          {
            label: '知识点分布',
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
              'rgba(255,99,132,0.4)',
              'rgba(54,162,235,0.4)',
              'rgba(255,206,86,0.4)',
              'rgba(75,192,192,0.4)',
              'rgba(153,102,255,0.4)'
            ],
          }
        ]
      }

      return (
        <div className="analytics-container">
          <h1 className="analytics-title">数据分析</h1>
          <div className="analytics-grid">
            <div className="analytics-card">
              <h2>知识点掌握情况</h2>
              <div className="chart-container">
                <Bar data={performanceData} />
              </div>
            </div>
            <div className="analytics-card">
              <h2>学习进度趋势</h2>
              <div className="chart-container">
                <Line data={progressData} />
              </div>
            </div>
            <div className="analytics-card">
              <h2>知识点分布</h2>
              <div className="chart-container">
                <Pie data={topicDistributionData} />
              </div>
            </div>
          </div>
        </div>
      )
    }
