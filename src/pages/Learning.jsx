import React from 'react'
    import './Learning.css'

    export default function Learning() {
      return (
        <div className="learning-container">
          <h1 className="learning-title">学习模块</h1>
          <div className="learning-grid">
            <div className="learning-card">
              <div className="card-icon">📚</div>
              <h2>语法知识库</h2>
              <p>通过图文并茂的方式，系统学习语法知识点</p>
              <button className="card-button">开始学习</button>
            </div>
            <div className="learning-card">
              <div className="card-icon">🎮</div>
              <h2>语法闯关游戏</h2>
              <p>在趣味游戏中巩固语法知识，提升学习兴趣</p>
              <button className="card-button">开始游戏</button>
            </div>
            <div className="learning-card">
              <div className="card-icon">🎥</div>
              <h2>语法微课</h2>
              <p>通过短小精悍的视频，快速掌握重点语法</p>
              <button className="card-button">观看视频</button>
            </div>
            <div className="learning-card">
              <div className="card-icon">📝</div>
              <h2>语法练习</h2>
              <p>通过多种题型练习，巩固所学语法知识</p>
              <button className="card-button">开始练习</button>
            </div>
          </div>
        </div>
      )
    }
