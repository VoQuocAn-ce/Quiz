// ==============================================================================
// QUIZ ENGINE - THE ARCANUM OF SBA301
// Interactive Quiz Engine with Instant Feedback, Hints, Explanations & Audio
// ==============================================================================

class ArcaneAudio {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('sba301_audio_enabled') !== 'false';
  }

  init() {
    if (!this.ctx && typeof AudioContext !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('sba301_audio_enabled', this.enabled);
    return this.enabled;
  }

  playTone(freq, duration, type = 'sine', gainVal = 0.08) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playSelect() {
    this.playTone(580, 0.08, 'triangle', 0.05);
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      // Celestial harmonic major triad (Cyan chime)
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.06, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.35);
      });
    } catch (e) {}
  }

  playWrong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      // Deep ominous bass chord
      const now = this.ctx.currentTime;
      [180, 140].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.07, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.3);
      });
    } catch (e) {}
  }

  playVictory() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [440, 554.37, 659.25, 880, 1108.73];
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        gain.gain.setValueAtTime(0.08, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.1 + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.5);
      });
    } catch (e) {}
  }
}

// Particle Engine for Ethereal Background
class ParticlesBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initParticles();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    const count = Math.min(Math.floor(this.width / 24), 55);
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2.2 + 0.6,
        alpha: Math.random() * 0.6 + 0.2,
        speedY: Math.random() * 0.45 + 0.15,
        speedX: (Math.random() - 0.5) * 0.25,
        pulse: Math.random() * Math.PI
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (let p of this.particles) {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.pulse += 0.02;
      const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.15;

      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;

      const isLuminous = document.body.getAttribute('data-theme') !== 'abyss';
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = isLuminous ? `rgba(8, 145, 178, ${Math.max(0.15, currentAlpha)})` : `rgba(120, 227, 241, ${Math.max(0.1, currentAlpha)})`;
      this.ctx.shadowBlur = isLuminous ? 6 : 10;
      this.ctx.shadowColor = isLuminous ? '#0891b2' : '#78e3f1';
      this.ctx.fill();
    }
    requestAnimationFrame(() => this.animate());
  }
}

// Master Quiz Engine
class QuizEngine {
  constructor(options = {}) {
    this.quizMeta = options.quizMeta || null;
    this.questions = options.questions || [];
    this.currentIndex = 0;
    this.userAnswers = {}; // { qIndex: chosenOptionIndex }
    this.bookmarks = new Set();
    this.hintsVisible = new Set();
    this.audio = new ArcaneAudio();
    this.filterMistakesOnly = false;
    this.filteredIndices = [];

    this.container = options.container || document.getElementById('arena-view');
    this.onExit = options.onExit || (() => {});

    this.init();
  }

  init() {
    this.buildSkeleton();
    this.renderQuestion(0);
    this.renderMatrix();
  }

  buildSkeleton() {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="arena-top-nav">
        <button class="btn-back-portal" id="btn-exit-arena">
          <span>&larr;</span> Trở về Thư viện Quiz
        </button>
        <div class="arena-title-wrap">
          <div class="arena-quiz-title" id="arena-title">${this.quizMeta ? this.quizMeta.title : 'SBA301 Arcane Trial'}</div>
          <div class="arena-quiz-sub" id="arena-sub">${this.quizMeta ? this.quizMeta.chapters : 'Spring Boot & ReactJS'}</div>
        </div>
        <div class="arena-controls">
          <button class="btn-tool" id="btn-toggle-theme-arena" title="Đổi màu sáng/tối">
            <span id="arena-theme-icon">☀️</span> <span id="arena-theme-text">Sáng</span>
          </button>
          <button class="btn-tool" id="btn-toggle-sound" title="Bật/Tắt âm thanh phép thuật">
            <span id="sound-icon">${this.audio.enabled ? '🔊' : '🔇'}</span> Sound
          </button>
          <button class="btn-tool" id="btn-finish-quiz" title="Nộp bài và xem tổng kết">
            <span>🏁</span> Hoàn thành
          </button>
        </div>
      </div>

      <div class="arena-layout">
        <!-- Main Question Card Column -->
        <div class="arena-main-col">
          <div class="question-card" id="q-card">
            <!-- Dynamic Content -->
          </div>

          <div class="arena-footer-toolbar">
            <button class="btn-nav" id="btn-prev-q">&larr; Câu trước</button>
            <div style="font-size: 13px; color: var(--cyan-primary); font-family: var(--font-fantasy);" id="q-counter-text">
              1 / ${this.questions.length}
            </div>
            <button class="btn-nav" id="btn-next-q">Câu tiếp theo &rarr;</button>
          </div>
        </div>

        <!-- Side Runic Matrix Column -->
        <div class="arena-side-col">
          <div class="matrix-card">
            <div class="matrix-header">
              <span>Runic Matrix</span>
              <span id="matrix-answered-count" style="color: var(--cyan-primary); font-size: 12px;">0/${this.questions.length}</span>
            </div>
            <div class="matrix-grid" id="matrix-grid">
              <!-- Runes rendered here -->
            </div>
            <div class="matrix-legend">
              <div class="legend-item"><div class="legend-dot dot-active"></div> Đang làm hiện tại</div>
              <div class="legend-item"><div class="legend-dot dot-correct"></div> Trả lời chính xác</div>
              <div class="legend-item"><div class="legend-dot dot-wrong"></div> Trả lời chưa đúng</div>
              <div class="legend-item"><div class="legend-dot dot-gold"></div> Đánh dấu xem lại (★)</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Result Summary Modal -->
      <div class="modal-overlay" id="summary-modal-overlay">
        <div class="summary-modal">
          <div class="summary-icon" id="sum-icon">🏆</div>
          <div class="summary-title" id="sum-title">Nghi thức Hoàn thành!</div>
          <div class="summary-rank" id="sum-rank">Grand Archmage of Spring & React</div>
          
          <div class="summary-stats-row">
            <div class="summary-stat-box">
              <div class="summary-stat-num" id="sum-score" style="color: var(--cyan-primary);">0/0</div>
              <div class="summary-stat-label">Điểm số</div>
            </div>
            <div class="summary-stat-box">
              <div class="summary-stat-num" id="sum-percent" style="color: var(--success-emerald);">0%</div>
              <div class="summary-stat-label">Độ chính xác</div>
            </div>
            <div class="summary-stat-box">
              <div class="summary-stat-num" id="sum-wrong" style="color: var(--danger-crimson);">0</div>
              <div class="summary-stat-label">Cần ôn tập</div>
            </div>
          </div>

          <div class="summary-actions">
            <button class="btn-nav" id="btn-sum-retry"><span>🔄</span> Làm lại từ đầu</button>
            <button class="btn-nav" id="btn-sum-review-wrong"><span>🔍</span> Xem lại câu sai</button>
            <button class="btn-enter-quest" style="width: auto;" id="btn-sum-portal"><span>🏰</span> Về Cổng Chọn Quiz</button>
          </div>
        </div>
      </div>
    `;

    // Hook listeners
    document.getElementById('btn-exit-arena').onclick = () => this.onExit();
    document.getElementById('btn-prev-q').onclick = () => this.navigatePrev();
    document.getElementById('btn-next-q').onclick = () => this.navigateNext();
    document.getElementById('btn-finish-quiz').onclick = () => this.showSummary();
    document.getElementById('btn-sum-portal').onclick = () => {
      document.getElementById('summary-modal-overlay').classList.remove('active');
      this.onExit();
    };
    document.getElementById('btn-sum-retry').onclick = () => {
      document.getElementById('summary-modal-overlay').classList.remove('active');
      this.resetQuiz();
    };
    document.getElementById('btn-sum-review-wrong').onclick = () => {
      document.getElementById('summary-modal-overlay').classList.remove('active');
      this.filterMistakes();
    };

    const themeBtn = document.getElementById('btn-toggle-theme-arena');
    if (themeBtn) {
      const updateThemeUI = (t) => {
        const isLuminous = t !== 'abyss';
        document.getElementById('arena-theme-icon').textContent = isLuminous ? '☀️' : '🌙';
        document.getElementById('arena-theme-text').textContent = isLuminous ? 'Sáng' : 'Tối';
      };
      updateThemeUI(document.body.getAttribute('data-theme') || 'luminous');
      themeBtn.onclick = () => {
        const current = document.body.getAttribute('data-theme') || 'luminous';
        const next = current === 'abyss' ? 'luminous' : 'abyss';
        document.body.setAttribute('data-theme', next);
        localStorage.setItem('sba301_theme', next);
        updateThemeUI(next);
        const pIcon = document.getElementById('theme-icon');
        const pLabel = document.getElementById('theme-label');
        if (pIcon && pLabel) {
          pIcon.textContent = next === 'abyss' ? '🌙' : '☀️';
          pLabel.textContent = next === 'abyss' ? 'Giao diện Tối' : 'Giao diện Sáng (Cyan)';
        }
      };
    }

    const soundBtn = document.getElementById('btn-toggle-sound');
    soundBtn.onclick = () => {
      const enabled = this.audio.toggle();
      document.getElementById('sound-icon').textContent = enabled ? '🔊' : '🔇';
      soundBtn.classList.toggle('active', enabled);
    };
  }

  getCurrentIndices() {
    if (this.filterMistakesOnly && this.filteredIndices.length > 0) {
      return this.filteredIndices;
    }
    return this.questions.map((_, i) => i);
  }

  renderQuestion(qIndex) {
    const list = this.getCurrentIndices();
    if (qIndex < 0 || qIndex >= list.length) return;
    this.currentIndex = qIndex;
    const realQIndex = list[qIndex];
    const q = this.questions[realQIndex];
    if (!q) return;

    const isAnswered = this.userAnswers.hasOwnProperty(realQIndex);
    const chosenOpt = isAnswered ? this.userAnswers[realQIndex] : null;
    const isBookmarked = this.bookmarks.has(realQIndex);
    const isHintOpen = this.hintsVisible.has(realQIndex);

    // Format question text and code blocks
    let formattedText = q.question.replace(/```([a-z]*)\n([\s\S]*?)```/g, '<pre class="code-block"><code>$2</code></pre>');
    formattedText = formattedText.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    const card = document.getElementById('q-card');
    card.innerHTML = `
      <div class="question-card-header">
        <div class="q-badge-num">
          <span>⚡ QUESTION ${realQIndex + 1}/${this.questions.length}</span>
          <span class="q-topic-tag">${q.topic}</span>
        </div>
        <button class="btn-bookmark ${isBookmarked ? 'active' : ''}" id="btn-toggle-bm" title="Đánh dấu câu hỏi này">
          ★
        </button>
      </div>

      <div class="question-text">${formattedText}</div>

      <!-- Options List -->
      <div class="options-stack" id="options-container">
        ${q.options.map((opt, optIndex) => {
          const glyph = String.fromCharCode(65 + optIndex); // A, B, C, D
          let optClass = 'option-item';
          let inlineExpHTML = '';

          if (isAnswered) {
            optClass += ' locked';
            if (optIndex === q.correct) {
              optClass += optIndex === chosenOpt ? ' selected-correct' : ' reveal-correct';
              inlineExpHTML = `
                <div class="option-inline-explanation correct">
                  <div class="inline-exp-header">
                    <span>✅ GIẢI THÍCH ĐÁP ÁN ĐÚNG:</span>
                  </div>
                  <div class="inline-exp-content">${q.explanations[q.correct]}</div>
                </div>
              `;
            } else if (optIndex === chosenOpt) {
              optClass += ' selected-wrong';
              inlineExpHTML = `
                <div class="option-inline-explanation wrong">
                  <div class="inline-exp-header">
                    <span>❌ TẠI SAO PHƯƠNG ÁN NÀY CHƯA ĐÚNG:</span>
                  </div>
                  <div class="inline-exp-content">${q.explanations[chosenOpt]}</div>
                </div>
              `;
            }
          }

          let formattedOpt = opt.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
          return `
            <div class="${optClass}" data-opt="${optIndex}">
              <div class="option-main-row">
                <div class="option-glyph">${glyph}</div>
                <div class="option-label">${formattedOpt}</div>
              </div>
              ${inlineExpHTML}
            </div>
          `;
        }).join('')}
      </div>

      <!-- Hint Section -->
      <div class="hint-toggle-bar">
        <button class="btn-hint-toggle" id="btn-toggle-hint">
          <span>🔮</span> ${isHintOpen ? 'Ẩn Gợi ý' : 'Hiển thị Gợi ý (Hint)'}
        </button>
        <div class="hint-content-box ${isHintOpen ? 'active' : ''}" id="hint-box">
          <strong>🔮 Gợi ý từ Slide:</strong> ${q.hint}
        </div>
      </div>

      <!-- Detailed Explanation Card (Revealed upon answering) -->
      <div class="explanation-card ${isAnswered ? 'active' : ''}" id="exp-card">
        <div class="explanation-header">
          <span>📜</span> PHÂN TÍCH CHI TIẾT ĐÁP ÁN (KHO BÁU KIẾN THỨC)
        </div>
        
        <div class="exp-correct-box">
          <div class="exp-correct-title">
            <span>✅</span> Đáp án Đúng: ${String.fromCharCode(65 + q.correct)} - Tại sao Đúng?
          </div>
          <div class="exp-correct-body">
            ${q.explanations[q.correct]}
          </div>
        </div>

        <div class="exp-wrong-box">
          <div class="exp-wrong-title">
            <span>❌</span> Phân tích tại sao các đáp án còn lại SAI:
          </div>
          ${q.options.map((_, optIdx) => {
            if (optIdx === q.correct) return '';
            return `
              <div class="exp-wrong-item">
                <strong>Phương án ${String.fromCharCode(65 + optIdx)}:</strong> ${q.explanations[optIdx]}
              </div>
            `;
          }).join('')}
        </div>

        <div class="exp-takeaway-box">
          <div class="exp-takeaway-title">
            <span>📖</span> TRỌNG TÂM KIẾN THỨC TỪ SLIDE
          </div>
          <div class="exp-takeaway-body">
            ${q.keyTakeaway}
          </div>
        </div>
      </div>
    `;

    // Update Counter Text & Nav Buttons
    document.getElementById('q-counter-text').textContent = `Câu ${qIndex + 1} / ${list.length}`;
    document.getElementById('btn-prev-q').disabled = qIndex === 0;
    document.getElementById('btn-next-q').disabled = qIndex === list.length - 1;

    // Attach Event Listeners
    document.getElementById('btn-toggle-bm').onclick = () => {
      if (this.bookmarks.has(realQIndex)) {
        this.bookmarks.delete(realQIndex);
      } else {
        this.bookmarks.add(realQIndex);
      }
      this.renderQuestion(this.currentIndex);
      this.renderMatrix();
    };

    document.getElementById('btn-toggle-hint').onclick = () => {
      if (this.hintsVisible.has(realQIndex)) {
        this.hintsVisible.delete(realQIndex);
      } else {
        this.hintsVisible.add(realQIndex);
        this.audio.playSelect();
      }
      this.renderQuestion(this.currentIndex);
    };

    // Option Clicks
    if (!isAnswered) {
      const optionNodes = card.querySelectorAll('.option-item');
      optionNodes.forEach(node => {
        node.onclick = () => {
          const chosen = parseInt(node.getAttribute('data-opt'), 10);
          this.handleOptionSelect(realQIndex, chosen);
        };
      });
    }
  }

  handleOptionSelect(realQIndex, chosenOpt) {
    if (this.userAnswers.hasOwnProperty(realQIndex)) return;
    this.userAnswers[realQIndex] = chosenOpt;
    const q = this.questions[realQIndex];

    if (chosenOpt === q.correct) {
      this.audio.playCorrect();
    } else {
      this.audio.playWrong();
    }

    this.saveProgress();
    this.renderQuestion(this.currentIndex);
    this.renderMatrix();
  }

  renderMatrix() {
    const grid = document.getElementById('matrix-grid');
    if (!grid) return;
    const list = this.getCurrentIndices();
    const answeredCount = Object.keys(this.userAnswers).length;
    document.getElementById('matrix-answered-count').textContent = `${answeredCount}/${this.questions.length}`;

    grid.innerHTML = list.map((realQIdx, listIdx) => {
      let runeClass = 'matrix-rune';
      if (listIdx === this.currentIndex) runeClass += ' active';
      if (this.userAnswers.hasOwnProperty(realQIdx)) {
        const isRight = this.userAnswers[realQIdx] === this.questions[realQIdx].correct;
        runeClass += isRight ? ' correct' : ' wrong';
      }
      if (this.bookmarks.has(realQIdx)) {
        runeClass += ' bookmarked';
      }
      return `
        <button class="${runeClass}" data-jump="${listIdx}">
          ${realQIdx + 1}
        </button>
      `;
    }).join('');

    grid.querySelectorAll('.matrix-rune').forEach(btn => {
      btn.onclick = () => {
        const jumpIdx = parseInt(btn.getAttribute('data-jump'), 10);
        this.audio.playSelect();
        this.renderQuestion(jumpIdx);
        this.renderMatrix();
      };
    });
  }

  navigatePrev() {
    if (this.currentIndex > 0) {
      this.audio.playSelect();
      this.renderQuestion(this.currentIndex - 1);
      this.renderMatrix();
    }
  }

  navigateNext() {
    const list = this.getCurrentIndices();
    if (this.currentIndex < list.length - 1) {
      this.audio.playSelect();
      this.renderQuestion(this.currentIndex + 1);
      this.renderMatrix();
    }
  }

  saveProgress() {
    if (!this.quizMeta) return;
    const quizId = this.quizMeta.id;
    let score = 0;
    const answeredTotal = Object.keys(this.userAnswers).length;
    Object.entries(this.userAnswers).forEach(([qIdx, opt]) => {
      if (this.questions[qIdx] && opt === this.questions[qIdx].correct) {
        score++;
      }
    });

    const percent = Math.round((score / this.questions.length) * 100);
    const existing = JSON.parse(localStorage.getItem('sba301_all_progress') || '{}');
    const prevBest = (existing[quizId] && existing[quizId].highestScore) ? existing[quizId].highestScore : 0;

    existing[quizId] = {
      score: score,
      answeredTotal: answeredTotal,
      total: this.questions.length,
      percentage: percent,
      highestScore: Math.max(score, prevBest),
      lastUpdated: new Date().toISOString()
    };

    localStorage.setItem('sba301_all_progress', JSON.stringify(existing));
  }

  showSummary() {
    let score = 0;
    let wrongCount = 0;
    const wrongIndices = [];

    this.questions.forEach((q, idx) => {
      if (this.userAnswers.hasOwnProperty(idx)) {
        if (this.userAnswers[idx] === q.correct) {
          score++;
        } else {
          wrongCount++;
          wrongIndices.push(idx);
        }
      } else {
        wrongCount++;
        wrongIndices.push(idx);
      }
    });

    const percent = Math.round((score / this.questions.length) * 100);
    this.filteredIndices = wrongIndices;

    // Rank titles
    let rank = 'Apprentice Alchemist';
    let icon = '📜';
    if (percent === 100) {
      rank = 'Grand Archmage of Java & React';
      icon = '👑';
      this.audio.playVictory();
    } else if (percent >= 85) {
      rank = 'Master Sorcerer of Spring Realm';
      icon = '⚔️';
      this.audio.playVictory();
    } else if (percent >= 70) {
      rank = 'Adept Mage of REST & Hooks';
      icon = '💎';
      this.audio.playSelect();
    } else if (percent >= 50) {
      rank = 'Scholar of the Citadel';
      icon = '🔮';
      this.audio.playSelect();
    } else {
      this.audio.playWrong();
    }

    document.getElementById('sum-icon').textContent = icon;
    document.getElementById('sum-title').textContent = percent >= 70 ? 'Nghi Thức Đắc Thắng!' : 'Hoàn Thành Thử Thách!';
    document.getElementById('sum-rank').textContent = rank;
    document.getElementById('sum-score').textContent = `${score}/${this.questions.length}`;
    document.getElementById('sum-percent').textContent = `${percent}%`;
    document.getElementById('sum-wrong').textContent = `${wrongCount}`;

    document.getElementById('summary-modal-overlay').classList.add('active');
  }

  resetQuiz() {
    this.userAnswers = {};
    this.bookmarks.clear();
    this.hintsVisible.clear();
    this.filterMistakesOnly = false;
    this.renderQuestion(0);
    this.renderMatrix();
  }

  filterMistakes() {
    if (this.filteredIndices.length === 0) {
      alert('Tuyệt hảo! Bạn không có câu sai nào cần ôn tập.');
      return;
    }
    this.filterMistakesOnly = true;
    this.renderQuestion(0);
    this.renderMatrix();
  }
}

// Make accessible globally
window.ArcaneAudio = ArcaneAudio;
window.ParticlesBackground = ParticlesBackground;
window.QuizEngine = QuizEngine;
