/* ==========================================================================
   Taipower Exam Master - Dedicated Custom Site & iOS 26.6 Theme Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  let currentYear = 'ALL';
  let currentTab = 'subjectB';
  let savedIds = JSON.parse(localStorage.getItem('saved_exams') || '[]');
  let isIOS26 = true;
  let customSiteName = localStorage.getItem('custom_site_name') || '考神專屬 · 台電職員考題大師';

  // DOM Elements
  const contentArea = document.getElementById('appContent');
  const yearChips = document.querySelectorAll('.chip-btn');
  const tabNavItems = document.querySelectorAll('.subject-nav .nav-item');
  const searchInput = document.getElementById('searchInput');
  const viewToggleBtns = document.querySelectorAll('.view-btn');
  const ios26ToggleBtn = document.getElementById('ios26ToggleBtn');
  const editSiteNameBtn = document.getElementById('editSiteNameBtn');
  const displaySiteName = document.getElementById('displaySiteName');
  const islandSiteText = document.getElementById('islandSiteText');
  const pageTitle = document.getElementById('pageTitle');
  const versionBadge = document.getElementById('versionBadge');

  init();

  function init() {
    applyCustomSiteName(customSiteName);
    bindEvents();
    renderContent();
    updateClock();
    setInterval(updateClock, 1000);
  }

  function applyCustomSiteName(name) {
    customSiteName = name;
    localStorage.setItem('custom_site_name', name);
    if (displaySiteName) displaySiteName.textContent = name;
    if (pageTitle) pageTitle.textContent = `${name} | iOS 26.6 旗艦網站`;
    if (islandSiteText) islandSiteText.textContent = `iOS 26.6 | ${name.substring(0, 8)}`;
  }

  function updateClock() {
    const timeEl = document.getElementById('statusTime');
    if (!timeEl) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    timeEl.textContent = `${hours}:${mins}`;
  }

  function bindEvents() {
    // Custom Site Name Edit Button
    if (editSiteNameBtn) {
      editSiteNameBtn.addEventListener('click', () => {
        const inputName = prompt('請輸入您專屬的網站名稱：', customSiteName);
        if (inputName && inputName.trim() !== '') {
          applyCustomSiteName(inputName.trim());
          updateIsland(`已將網站命名為：${inputName.trim()}`);
        }
      });
    }

    // iOS 26.6 Theme Toggle
    if (ios26ToggleBtn) {
      ios26ToggleBtn.addEventListener('click', () => {
        isIOS26 = !isIOS26;
        if (isIOS26) {
          document.body.classList.add('ios26-theme');
          versionBadge.textContent = 'iOS 26.6 VIP';
          ios26ToggleBtn.innerHTML = '<span>✨</span> iOS 26.6 全息主題';
          updateIsland('已載入 iOS 26.6 全息模式');
        } else {
          document.body.classList.remove('ios26-theme');
          versionBadge.textContent = 'iOS 18 Classic';
          ios26ToggleBtn.innerHTML = '<span>📱</span> 切換至 iOS 26.6';
          updateIsland('已切換至 iOS 經典模式');
        }
      });
    }

    // Year filter click
    yearChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        yearChips.forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        currentYear = e.target.getAttribute('data-year');
        renderContent();
        updateIsland(`年份: ${currentYear === 'ALL' ? '全部' : currentYear + '年'}`);
      });
    });

    // Tab nav click
    tabNavItems.forEach(tab => {
      tab.addEventListener('click', (e) => {
        tabNavItems.forEach(t => t.classList.remove('active'));
        const target = e.currentTarget;
        target.classList.add('active');
        currentTab = target.getAttribute('data-tab');
        renderContent();
        updateIsland(`分頁: ${target.textContent.trim()}`);
      });
    });

    // Search input
    searchInput.addEventListener('input', () => {
      renderContent();
    });

    // View toggle (Device Frame vs Fullscreen)
    viewToggleBtns.forEach(btn => {
      if (btn.id === 'ios26ToggleBtn' || btn.id === 'editSiteNameBtn') return;
      btn.addEventListener('click', (e) => {
        viewToggleBtns.forEach(b => {
          if (b.id !== 'ios26ToggleBtn' && b.id !== 'editSiteNameBtn') b.classList.remove('active');
        });
        const target = e.currentTarget;
        target.classList.add('active');
        const view = target.getAttribute('data-view');
        if (view === 'fullscreen') {
          document.body.classList.add('fullscreen-mode');
        } else {
          document.body.classList.remove('fullscreen-mode');
        }
      });
    });
  }

  function updateIsland(msg) {
    if (islandSiteText) {
      islandSiteText.textContent = msg;
    }
  }

  function renderContent() {
    const query = searchInput.value.toLowerCase().trim();
    contentArea.innerHTML = '';

    if (currentTab === 'subjectB') {
      renderSubjectB(query);
    } else if (currentTab === 'subjectA') {
      renderSubjectA(query);
    } else if (currentTab === 'flashcards') {
      renderFlashcards(query);
    } else if (currentTab === 'saved') {
      renderSaved(query);
    }
  }

  // Render Subject B (Calculations)
  function renderSubjectB(query) {
    let list = EXAM_DATA.subjectB;

    if (currentYear !== 'ALL') {
      list = list.filter(item => item.year === currentYear);
    }

    if (query) {
      list = list.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.question.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query)
      );
    }

    if (list.length === 0) {
      contentArea.innerHTML = renderEmptyState('尚無符合條件的科目 B 大題');
      return;
    }

    list.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'card animate-fade-in';
      card.style.animationDelay = `${index * 0.08}s`;

      const isSaved = savedIds.includes(item.id);

      card.innerHTML = `
        <div class="card-header-tag">
          <span class="tag-badge ${item.subjectTag}">${item.subject}</span>
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="card-year">${item.year} 年考題</span>
            <span class="save-btn" data-id="${item.id}" style="cursor:pointer; font-size:1.1rem; color:${isSaved ? '#f59e0b' : '#64748b'};">
              ${isSaved ? '★' : '☆'}
            </span>
          </div>
        </div>
        <div class="card-title">${item.title}</div>
        <div class="card-desc">${item.question}</div>
        
        ${item.diagram ? `<div class="diagram-box">${item.diagram}</div>` : ''}

        <div class="step-accordion">
          ${item.steps.map((step, idx) => `
            <div class="step-item ${idx === 0 ? 'expanded' : ''}">
              <div class="step-header">${step.title}</div>
              <div class="step-body">
                <div>${step.content}</div>
                ${step.formula ? `<div class="formula-highlight">${step.formula}</div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="answer-badge">
          <span>解題精確結果：</span> ${item.answer}
        </div>
      `;

      // Accordion toggle click
      const stepHeaders = card.querySelectorAll('.step-header');
      stepHeaders.forEach(sh => {
        sh.addEventListener('click', (e) => {
          const stepItem = e.target.closest('.step-item');
          stepItem.classList.toggle('expanded');
        });
      });

      // Save toggle click
      const saveBtn = card.querySelector('.save-btn');
      saveBtn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        toggleSave(id, e.target);
      });

      contentArea.appendChild(card);
    });
  }

  // Render Subject A (Quiz Mode)
  function renderSubjectA(query) {
    let list = EXAM_DATA.subjectA;

    if (currentYear !== 'ALL') {
      list = list.filter(item => item.year === currentYear);
    }

    if (query) {
      list = list.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.question.toLowerCase().includes(query)
      );
    }

    if (list.length === 0) {
      contentArea.innerHTML = renderEmptyState('尚無符合條件的科目 A 選擇題');
      return;
    }

    list.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'card animate-fade-in';
      card.style.animationDelay = `${index * 0.08}s`;

      card.innerHTML = `
        <div class="card-header-tag">
          <span class="tag-badge ${item.subjectTag}">${item.subject}</span>
          <span class="card-year">${item.year} 年考題</span>
        </div>
        <div class="card-title">${item.title}</div>
        <div class="card-desc">${item.question}</div>
        
        <div class="options-group">
          ${item.options.map((opt, optIdx) => `
            <div class="option-btn" data-opt="${optIdx}">
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>

        <div class="quiz-explanation" style="display:none; margin-top:12px; padding:12px; background:rgba(30,41,59,0.6); border-radius:12px; border-left:3px solid var(--accent-cyan); font-size:0.83rem; color:#cbd5e1;">
          <strong style="color:var(--accent-cyan)">解析說明：</strong> ${item.explanation}
        </div>
      `;

      // Option click event
      const optionBtns = card.querySelectorAll('.option-btn');
      const expBox = card.querySelector('.quiz-explanation');

      optionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const selectedIdx = parseInt(e.currentTarget.getAttribute('data-opt'));
          optionBtns.forEach(b => b.classList.remove('correct', 'wrong'));
          
          if (selectedIdx === item.correctIndex) {
            e.currentTarget.classList.add('correct');
          } else {
            e.currentTarget.classList.add('wrong');
            optionBtns[item.correctIndex].classList.add('correct');
          }
          expBox.style.display = 'block';
        });
      });

      contentArea.appendChild(card);
    });
  }

  // Render Flashcards
  function renderFlashcards(query) {
    let list = EXAM_DATA.flashcards;
    if (query) {
      list = list.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    }

    list.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'card animate-fade-in';
      card.style.animationDelay = `${index * 0.08}s`;

      card.innerHTML = `
        <div class="card-header-tag">
          <span class="tag-badge tag-power">${item.category}</span>
          <span class="card-year">iOS 26.6 核心公式</span>
        </div>
        <div class="card-title">${item.title}</div>
        <div class="formula-highlight" style="font-size:0.95rem; margin:10px 0;">
          ${item.formula}
        </div>
        <div class="card-desc" style="margin-bottom:0;">${item.desc}</div>
      `;
      contentArea.appendChild(card);
    });
  }

  // Render Saved
  function renderSaved(query) {
    if (savedIds.length === 0) {
      contentArea.innerHTML = renderEmptyState('您尚未收藏任何考題，可在卡片右上角點擊星號收藏！');
      return;
    }

    const savedItems = EXAM_DATA.subjectB.filter(item => savedIds.includes(item.id));
    if (savedItems.length === 0) {
      contentArea.innerHTML = renderEmptyState('未找到已收藏的考題');
      return;
    }

    savedItems.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'card animate-fade-in';
      card.innerHTML = `
        <div class="card-header-tag">
          <span class="tag-badge ${item.subjectTag}">${item.subject}</span>
          <span class="card-year">${item.year} 年考題 ★已收藏</span>
        </div>
        <div class="card-title">${item.title}</div>
        <div class="card-desc">${item.question}</div>
        <div class="answer-badge">解答：${item.answer}</div>
      `;
      contentArea.appendChild(card);
    });
  }

  function toggleSave(id, iconEl) {
    const idx = savedIds.indexOf(id);
    if (idx > -1) {
      savedIds.splice(idx, 1);
      iconEl.textContent = '☆';
      iconEl.style.color = '#64748b';
    } else {
      savedIds.push(id);
      iconEl.textContent = '★';
      iconEl.style.color = '#f59e0b';
    }
    localStorage.setItem('saved_exams', JSON.stringify(savedIds));
  }

  function renderEmptyState(text) {
    return `
      <div style="text-align:center; padding:50px 20px; color:var(--text-muted);">
        <div style="font-size:2.5rem; margin-bottom:10px;">🔍</div>
        <div style="font-size:0.9rem;">${text}</div>
      </div>
    `;
  }
});
