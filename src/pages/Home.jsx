import React from 'react'
    import { Link } from 'react-router-dom'
    import './Home.css'

    export default function Home() {
      return (
        <div className="home-container">
          <div className="hero-section">
            <h1 className="hero-title">欢迎来到语法学习系统</h1>
            <p className="hero-subtitle">通过游戏化学习和AI智能测评，轻松掌握语法知识</p>
            <div className="cta-buttons">
              <Link to="/learning" className="cta-button primary">开始学习</Link>
              <Link to="/testing" className="cta-button secondary">立即测试</Link>
            </div>
          </div>

          <div className="features-section">
            <h2 className="features-title">核心功能</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎮</div>
                <h3>游戏化学习</h3>
                <p>通过趣味游戏掌握语法知识，让学习不再枯燥</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>AI智能测评</h3>
                <p>精准识别语法薄弱点，提供个性化学习建议</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>全面知识库</h3>
                <p>覆盖中小学所有语法知识点，系统化学习</p>
              </div>
            </div>
          </div>

          <div className="testimonials-section">
            <h2 className="testimonials-title">用户评价</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p>"这个系统让我的孩子爱上了语法学习，成绩提升显著！"</p>
                <div className="testimonial-author">- 张妈妈</div>
              </div>
              <div className="testimonial-card">
                <p>"AI测评非常准确，帮我找到了语法学习的薄弱环节。"</p>
                <div className="testimonial-author">- 李同学</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
