import React from 'react'
    import './Testing.css'

    export default function Testing() {
      return (
        <div className="testing-container">
          <h1 className="testing-title">测试模块</h1>
          <div className="testing-grid">
            <div className="testing-card">
              <div className="card-icon">📝</div>
              <h2>单元测试</h2>
              <p>检验每个单元的学习成果，巩固知识点</p>
              <button className="card-button">开始测试</button>
            </div>
            <div className="testing-card">
              <div className="card-icon">📅</div>
              <h2>期中/期末考试</h2>
              <p>全面评估语法掌握情况，查漏补缺</p>
              <button className="card-button">开始考试</button>
            </div>
            <div className="testing-card">
              <div className="card-icon">📊</div>
              <h2>模拟考试</h2>
              <p>模拟真实考试环境，提升应试能力</p>
              <button className="card-button">开始模拟</button>
            </div>
            <div className="testing-card">
              <div className="card-icon">🤖</div>
              <h2>AI智能测评</h2>
              <p>精准识别薄弱点，提供个性化建议</p>
              <button className="card-button">开始测评</button>
            </div>
          </div>
        </div>
      )
    }
