// Application State
let currentPage = 'home';
let currentLanguage = 'cpp';
let selectedProblem = null;
let selectedEditorChallengeId = editorChallenges[0]?.id || null;
let currentDsaLevel = 'all';
let authMode = 'login';
const API_BASE = '/api';
const AUTH_TOKEN_KEY = 'dsoAuthToken';
let currentUser = JSON.parse(localStorage.getItem('dsoCurrentUser') || sessionStorage.getItem('dsoCurrentUser') || 'null');
let currentToken = localStorage.getItem(AUTH_TOKEN_KEY) || sessionStorage.getItem(AUTH_TOKEN_KEY) || '';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  updateActiveNav();
  updateAuthUI();
  setupAuthModalClose();
  initializePage();
});

// Update active navigation
function updateActiveNav() {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.textContent.toLowerCase() === currentPage || 
       (currentPage === 'home' && link.textContent.toLowerCase() === 'home')) {
      link.classList.add('active');
    }
  });
}

function renderPageHeader(title, subtitle) {
  return `
    <header class="page-header">
      <h1 class="page-title">${escapeHtml(title)}</h1>
      ${subtitle ? `<p class="page-subtitle">${escapeHtml(subtitle)}</p>` : ''}
    </header>
  `;
}

// Initialize page-specific functionality
function initializePage() {
  if(currentPage === 'home') {
    renderHome();
  } else if(currentPage === 'dsa') {
    renderDSATopics();
  } else if(currentPage === 'practice') {
    renderPracticeProblems();
  } else if(currentPage === 'languages') {
    renderLanguages();
  } else if(currentPage === 'roadmap') {
    renderRoadmap();
  } else {
    renderHome();
  }
}

function renderHome() {
  const container = document.getElementById('app');
  if(!container) return;

  container.innerHTML = `
    <section class="hero">
      <h1>Learn DSA From Basics to Advanced</h1>
      <p>Production-ready explanations, interview patterns, and guided coding practice for students, professionals, and serious developers.</p>
      <div class="hero-actions">
        <button class="btn" onclick="navigate('roadmap')">Start Learning</button>
        <button class="btn btn-secondary" onclick="navigate('practice')">Open Practice Editor</button>
      </div>
    </section>

    <section class="home-visual-grid">
      <article class="home-visual-card home-visual-card-dsa" onclick="navigate('dsa')">
        <div class="home-visual-art home-art-graph">
          <svg viewBox="0 0 320 140" aria-hidden="true">
            <polyline points="20,110 70,85 120,92 170,58 220,70 275,35" />
            <circle cx="70" cy="85" r="5"></circle>
            <circle cx="120" cy="92" r="5"></circle>
            <circle cx="170" cy="58" r="5"></circle>
            <circle cx="220" cy="70" r="5"></circle>
            <circle cx="275" cy="35" r="5"></circle>
          </svg>
        </div>
        <h3>Deep DSA Tracks</h3>
        <p>From fundamentals to advanced patterns with complexity analysis and coding templates.</p>
        <span class="home-visual-link">Explore DSA</span>
      </article>

      <article class="home-visual-card home-visual-card-code" onclick="navigate('practice')">
        <div class="home-visual-art home-art-code">
          <svg viewBox="0 0 320 140" aria-hidden="true">
            <path d="M120 35 L75 70 L120 105" />
            <path d="M200 35 L245 70 L200 105" />
            <line x1="152" y1="112" x2="185" y2="28"></line>
          </svg>
        </div>
        <h3>Practice Like Interviews</h3>
        <p>Run test cases instantly, improve logic clarity, and build coding confidence under constraints.</p>
        <span class="home-visual-link">Practice Now</span>
      </article>

      <article class="home-visual-card home-visual-card-roadmap" onclick="navigate('roadmap')">
        <div class="home-visual-art home-art-roadmap">
          <svg viewBox="0 0 320 140" aria-hidden="true">
            <circle cx="48" cy="92" r="8"></circle>
            <circle cx="130" cy="70" r="8"></circle>
            <circle cx="210" cy="55" r="8"></circle>
            <circle cx="280" cy="35" r="8"></circle>
            <path d="M56 90 C82 88, 98 72, 122 70 C150 67, 170 60, 202 55 C226 50, 248 42, 272 36" />
          </svg>
        </div>
        <h3>Structured Growth Plan</h3>
        <p>Follow a phase-wise roadmap used by top interview candidates and competitive coders.</p>
        <span class="home-visual-link">View Roadmap</span>
      </article>
    </section>

    <section class="home-section">
      <h2>Developer Focused Learning Experience</h2>
      <div class="grid">
        <div class="card static-card">
          <h3>Concept + Implementation</h3>
          <p>Each concept includes practical code in C++, Java, and Python to help you write production-quality logic.</p>
        </div>
        <div class="card static-card">
          <h3>Complexity Driven</h3>
          <p>Every topic emphasizes time and space trade-offs so you can choose the right approach in real scenarios.</p>
        </div>
        <div class="card static-card">
          <h3>Interview Pattern Coverage</h3>
          <p>Sliding window, two pointers, hashing, recursion, graph traversal, DP, and other common patterns are included.</p>
        </div>
        <div class="card static-card">
          <h3>Clean Interface</h3>
          <p>Focused layout, readable typography, and theme support make long learning sessions comfortable.</p>
        </div>
      </div>
    </section>
    
    <section class="home-section">
      <h2>Why Learners Choose DSO Academy</h2>
      <div class="grid">
        <div class="card static-card">
          <h3>Progressive Difficulty</h3>
          <p>Move from basics to advanced without skipping foundations, using level-wise topic filters.</p>
        </div>
        <div class="card static-card">
          <h3>Practical Problem Bank</h3>
          <p>Apply each concept to curated problems and understand which pattern fits a question fastest.</p>
        </div>
        <div class="card static-card">
          <h3>Revision Friendly</h3>
          <p>Topic summaries and concise complexity notes help during placement and interview revision phases.</p>
        </div>
        <div class="card static-card">
          <h3>Career Ready Mindset</h3>
          <p>Learn not only how code works, but how to explain your approach clearly during interviews.</p>
        </div>
      </div>
    </section>
  `;
}

function renderDsaProfessionalDetails(topic) {
  const interviewPatterns = topic.interviewPatterns || [];
  const pitfalls = topic.commonPitfalls || [];
  const tips = topic.developerTips || [];
  const useCases = topic.realWorldUseCases || [];

  if(!interviewPatterns.length && !pitfalls.length && !tips.length && !useCases.length) {
    return '';
  }

  return `
    <div class="topic-pro-grid">
      ${interviewPatterns.length ? `
        <div class="topic-pro-card">
          <h4>Interview Patterns</h4>
          <ul class="feature-list">
            ${interviewPatterns.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${pitfalls.length ? `
        <div class="topic-pro-card">
          <h4>Common Pitfalls</h4>
          <ul class="feature-list">
            ${pitfalls.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${tips.length ? `
        <div class="topic-pro-card">
          <h4>Developer Tips</h4>
          <ul class="feature-list">
            ${tips.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${useCases.length ? `
        <div class="topic-pro-card">
          <h4>Real-world Use Cases</h4>
          <ul class="feature-list">
            ${useCases.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
    </div>
  `;
}

// Render DSA Topics
function renderDSATopics() {
  const container = document.getElementById('app');
  if(!container) return;

  let html = `
    ${renderPageHeader(
      'Data Structures & Algorithms',
      'Explore topics with multi-language implementations and time complexities.'
    )}
    <div class="search-box">
      <input type="text" id="dsaSearch" placeholder="Search DSA topics..." oninput="filterDSATopics()">
    </div>
    <section class="learning-path-grid">
      ${dsaLearningPath.map(level => `
        <article class="learning-stage ${currentDsaLevel === level.id ? 'active' : ''}" onclick="setDsaLevel('${level.id}')">
          <h3>${level.stage} Level</h3>
          <p>${level.goal}</p>
          <ul class="learning-list">
            ${level.topics.map(topic => `<li>${topic}</li>`).join('')}
          </ul>
        </article>
      `).join('')}
    </section>
    <div class="level-filter-actions">
      <button class="btn btn-secondary" onclick="setDsaLevel('all')">Show All Topics</button>
      <span class="filter-status">${currentDsaLevel === 'all' ? 'Viewing all levels' : `Viewing ${currentDsaLevel} topics`}</span>
    </div>
    <div id="dsaTopicsContainer"></div>
  `;
  
  container.innerHTML = html;
  displayDSATopics();
}

function displayDSATopics(filter = '') {
  const container = document.getElementById('dsaTopicsContainer');
  if(!container) return;

  const filtered = dsaTopics.filter(topic => 
    (currentDsaLevel === 'all' || topic.level === currentDsaLevel) &&
    (topic.title.toLowerCase().includes(filter.toLowerCase()) ||
    topic.description.toLowerCase().includes(filter.toLowerCase()) ||
    (topic.overview || '').toLowerCase().includes(filter.toLowerCase()))
  );

  if(filtered.length === 0) {
    container.innerHTML = '<div class="empty-state"><h3>No topics found</h3><p>Try a different search term</p></div>';
    return;
  }

  container.innerHTML = filtered.map(topic => `
    <div class="topic-card">
      <h3>${topic.title} <span class="topic-badge">${(topic.level || 'general').toUpperCase()}</span></h3>
      <p class="description">${topic.description}</p>
      <p>${topic.overview || ''}</p>
      <p><strong>Time Complexity:</strong> ${topic.complexity}</p>
      <div class="topic-details-grid">
        <div>
          <h4>Key Concepts</h4>
          <ul class="feature-list">
            ${(topic.keyPoints || ['Core operations and patterns']).map(point => `<li>${point}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4>Where It Is Used</h4>
          <ul class="feature-list">
            ${(topic.applications || ['Interview questions', 'Real-world coding tasks']).map(app => `<li>${app}</li>`).join('')}
          </ul>
        </div>
      </div>
      ${renderDsaProfessionalDetails(topic)}
      
      <div class="language-tabs">
        <button class="language-tab ${currentLanguage === 'cpp' ? 'active' : ''}" 
                onclick="switchLanguage('cpp', '${topic.id}')">C++</button>
        <button class="language-tab ${currentLanguage === 'java' ? 'active' : ''}" 
                onclick="switchLanguage('java', '${topic.id}')">Java</button>
        <button class="language-tab ${currentLanguage === 'python' ? 'active' : ''}" 
                onclick="switchLanguage('python', '${topic.id}')">Python</button>
      </div>
      
      <div class="code-example active" id="code-${topic.id}">
        <pre><code>${escapeHtml(topic.languages[currentLanguage] || topic.languages.cpp)}</code></pre>
      </div>
    </div>
  `).join('');
}

function setDsaLevel(levelId) {
  currentDsaLevel = levelId;
  renderDSATopics();
}

function filterDSATopics() {
  const searchInput = document.getElementById('dsaSearch');
  if(searchInput) {
    displayDSATopics(searchInput.value);
  }
}

function switchLanguage(lang, topicId) {
  currentLanguage = lang;
  const topic = dsaTopics.find(t => t.id === topicId);
  if(topic && topic.languages[lang]) {
    const codeElement = document.querySelector(`#code-${topicId} code`);
    if(codeElement) {
      codeElement.textContent = topic.languages[lang];
    }
    
    // Update active tab
    const codeWrapper = document.getElementById(`code-${topicId}`);
    if(codeWrapper && codeWrapper.parentElement) {
      codeWrapper.parentElement.querySelectorAll('.language-tab').forEach(tab => {
        tab.classList.toggle('active', tab.textContent.toLowerCase() === lang);
      });
    }
  }
}

// Render Practice Problems
function renderPracticeProblems() {
  const container = document.getElementById('app');
  if(!container) return;

  if(!selectedEditorChallengeId && editorChallenges.length > 0) {
    selectedEditorChallengeId = editorChallenges[0].id;
  }

  let html = `
    ${renderPageHeader(
      'Practice Problems',
      'Solve guided problems and practice inside the built-in code editor.'
    )}
    <div class="practice-layout">
      <section class="practice-column">
        <h3 class="section-title">Practice Problem Bank</h3>
        <div class="search-box">
          <input type="text" id="problemSearch" placeholder="Search problems..." oninput="filterProblems()">
        </div>
        <div id="problemsContainer"></div>
      </section>
      <section class="practice-column">
        <h3 class="section-title">Interactive JavaScript Editor</h3>
        ${renderEditorPanel()}
      </section>
    </div>
    ${selectedProblem ? renderProblemSolution() : ''}
  `;
  
  container.innerHTML = html;
  displayProblems();
}

function displayProblems(filter = '') {
  const container = document.getElementById('problemsContainer');
  if(!container) return;

  const filtered = practiceProblems.filter(problem => 
    problem.title.toLowerCase().includes(filter.toLowerCase()) ||
    problem.description.toLowerCase().includes(filter.toLowerCase())
  );

  if(filtered.length === 0) {
    container.innerHTML = '<div class="empty-state"><h3>No problems found</h3></div>';
    return;
  }

  container.innerHTML = filtered.map(problem => `
    <div class="problem-item" onclick="showProblemSolution('${problem.id}')">
      <div>
        <h4 class="problem-title">${problem.title}</h4>
        <p class="problem-description">${problem.description}</p>
      </div>
      <span class="difficulty difficulty-${problem.difficulty}">${problem.difficulty.toUpperCase()}</span>
    </div>
  `).join('');
}

function filterProblems() {
  const searchInput = document.getElementById('problemSearch');
  if(searchInput) {
    displayProblems(searchInput.value);
  }
}

function showProblemSolution(problemId) {
  selectedProblem = practiceProblems.find(p => p.id === problemId);
  renderPracticeProblems();
  // Scroll to solution
  setTimeout(() => {
    const solution = document.getElementById('problemSolution');
    if(solution) {
      solution.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
}

function renderProblemSolution() {
  if(!selectedProblem) return '';

  return `
    <div id="problemSolution" class="topic-card problem-solution-card">
      <h3>${selectedProblem.title} - Solution</h3>
      <p class="description">${selectedProblem.description}</p>
      
      <div class="language-tabs">
        <button class="language-tab ${currentLanguage === 'cpp' ? 'active' : ''}" 
                onclick="switchProblemLanguage('cpp')">C++</button>
        <button class="language-tab ${currentLanguage === 'java' ? 'active' : ''}" 
                onclick="switchProblemLanguage('java')">Java</button>
        <button class="language-tab ${currentLanguage === 'python' ? 'active' : ''}" 
                onclick="switchProblemLanguage('python')">Python</button>
      </div>
      
      <pre><code>${escapeHtml(selectedProblem.solution[currentLanguage] || selectedProblem.solution.cpp)}</code></pre>
    </div>
  `;
}

function renderEditorPanel() {
  const challenge = editorChallenges.find(item => item.id === selectedEditorChallengeId) || editorChallenges[0];
  if(!challenge) {
    return '<div class="empty-state"><h3>No editor challenges found</h3></div>';
  }

  return `
    <div class="editor-challenge-list">
      ${editorChallenges.map(item => `
        <button class="editor-challenge-btn ${item.id === challenge.id ? 'active' : ''}"
          onclick="selectEditorChallenge('${item.id}')">
          ${item.title} <span class="difficulty difficulty-${item.difficulty}">${item.difficulty.toUpperCase()}</span>
        </button>
      `).join('')}
    </div>
    <div class="editor-panel">
      <h4>${challenge.title}</h4>
      <p>${challenge.statement}</p>
      <textarea id="codeEditor" class="code-editor" spellcheck="false">${escapeHtml(challenge.starterCode)}</textarea>
      <div class="editor-actions">
        <button class="btn" onclick="runEditorCode()">Run Tests</button>
        <button class="btn btn-secondary" onclick="loadStarterCode()">Reset</button>
      </div>
      <pre id="editorOutput" class="editor-output">Click "Run Tests" to check your solution.</pre>
    </div>
  `;
}

function switchProblemLanguage(lang) {
  currentLanguage = lang;
  if(selectedProblem) {
    renderPracticeProblems();
  }
}

function selectEditorChallenge(challengeId) {
  selectedEditorChallengeId = challengeId;
  renderPracticeProblems();
}

function loadStarterCode() {
  const challenge = editorChallenges.find(item => item.id === selectedEditorChallengeId);
  const editor = document.getElementById('codeEditor');
  if(challenge && editor) {
    editor.value = challenge.starterCode;
  }
}

function runEditorCode() {
  const challenge = editorChallenges.find(item => item.id === selectedEditorChallengeId);
  const editor = document.getElementById('codeEditor');
  const output = document.getElementById('editorOutput');

  if(!challenge || !editor || !output) return;

  const userCode = editor.value;
  try {
    const wrappedCode = `
${userCode}
if (typeof ${challenge.functionName} !== 'function') {
  throw new Error("Function ${challenge.functionName} is not defined.");
}
return ${challenge.functionName};
`;
    const fnFactory = new Function(wrappedCode);
    const userFn = fnFactory();

    let passed = 0;
    const lines = challenge.tests.map((test, index) => {
      const actual = userFn(...test.input);
      const ok = deepEqual(actual, test.expected);
      if(ok) passed += 1;
      return `${ok ? 'PASS' : 'FAIL'} Test ${index + 1}: expected ${formatValue(test.expected)}, got ${formatValue(actual)}`;
    });

    output.textContent = `Result: ${passed}/${challenge.tests.length} tests passed\n\n${lines.join('\n')}`;
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

// Render Languages
function renderLanguages() {
  const container = document.getElementById('app');
  if(!container) return;

  container.innerHTML = `
    ${renderPageHeader(
      'Programming Languages',
      'Quick overview of what each language is best for.'
    )}
    <div class="grid">
      ${languages.map(lang => `
        <div class="card static-card">
          <h3>${lang.name}</h3>
          <p>${lang.description}</p>
          <p><strong>Level:</strong> ${lang.level}</p>
          <div class="language-features">
            <strong>Key Features:</strong>
            <ul class="feature-list">
              ${lang.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Render Roadmap
function renderRoadmap() {
  const container = document.getElementById('app');
  if(!container) return;

  container.innerHTML = `
    ${renderPageHeader(
      'DSA Learning Roadmap',
      'A simple, step-by-step path from beginner to advanced.'
    )}
    <div class="roadmap-container">
      ${roadmap.map((phase, index) => `
        <div class="roadmap-phase">
          <h3>${index + 1}. ${phase.phase}</h3>
          <ul>
            ${phase.topics.map(topic => `<li>${topic}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

// Utility function
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function formatValue(value) {
  if(typeof value === 'string') return `"${value}"`;
  return JSON.stringify(value);
}

function setupAuthModalClose() {
  const modal = document.getElementById('authModal');
  if(!modal) return;
  modal.addEventListener('click', (event) => {
    if(event.target === modal) {
      closeAuthModal();
    }
  });
}

function updateAuthUI() {
  const controls = document.getElementById('authControls');
  if(!controls) return;

  if(currentUser) {
    controls.innerHTML = `
      <span class="user-chip">Hi, ${escapeHtml(currentUser.name || 'Learner')}</span>
      <button class="btn btn-secondary auth-btn auth-btn-logout" onclick="logout()">Logout</button>
    `;
  } else {
    controls.innerHTML = `
      <button class="btn btn-secondary auth-btn auth-btn-login" onclick="openAuthModal('login')">Login</button>
      <button class="btn auth-btn auth-btn-register" onclick="openAuthModal('register')">Create Account</button>
    `;
  }
}

function openAuthModal(mode) {
  authMode = mode;
  const modal = document.getElementById('authModal');
  const title = document.getElementById('authTitle');
  const subtitle = document.getElementById('authSubtitle');
  const switchText = document.getElementById('authSwitchText');
  const submitButton = document.querySelector('.auth-submit');
  const nameInput = document.getElementById('authName');
  const usernameInput = document.getElementById('authUsername');
  const phoneInput = document.getElementById('authPhone');
  const confirmPasswordInput = document.getElementById('authConfirmPassword');
  const registerOnlyFields = document.querySelectorAll('.auth-register-only');
  const rememberCheckbox = document.getElementById('authRemember');
  const messageBox = document.getElementById('authMessage');

  if(!modal || !title || !subtitle || !switchText || !submitButton || !nameInput || !usernameInput || !phoneInput || !confirmPasswordInput || !rememberCheckbox || !messageBox) return;

  const isRegister = mode === 'register';
  title.textContent = isRegister ? 'Create Account' : 'Login';
  subtitle.textContent = isRegister ? 'Start learning DSA with a personalized experience.' : 'Continue your DSA learning journey.';
  submitButton.textContent = isRegister ? 'Create Account' : 'Login';
  nameInput.required = isRegister;
  usernameInput.required = isRegister;
  phoneInput.required = isRegister;
  confirmPasswordInput.required = isRegister;

  const nameLabel = document.querySelector('label[for="authName"]');
  if(nameLabel) nameLabel.style.display = isRegister ? 'block' : 'none';
  nameInput.style.display = isRegister ? 'block' : 'none';
  registerOnlyFields.forEach(field => {
    field.style.display = isRegister ? 'block' : 'none';
  });
  rememberCheckbox.checked = true;
  messageBox.textContent = '';
  messageBox.className = 'auth-message';

  switchText.innerHTML = isRegister
    ? `Already have an account? <button class="link-btn" onclick="openAuthModal('login')" type="button">Login</button>`
    : `New here? <button class="link-btn" onclick="openAuthModal('register')" type="button">Create account</button>`;

  const form = document.getElementById('authForm');
  if(form) form.reset();

  modal.classList.remove('hidden');
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if(modal) modal.classList.add('hidden');
}

function showAuthMessage(text, type = 'error') {
  const messageBox = document.getElementById('authMessage');
  if(!messageBox) return;
  messageBox.textContent = text;
  messageBox.className = `auth-message auth-message-${type}`;
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById('authName');
  const usernameInput = document.getElementById('authUsername');
  const phoneInput = document.getElementById('authPhone');
  const emailInput = document.getElementById('authEmail');
  const passwordInput = document.getElementById('authPassword');
  const confirmPasswordInput = document.getElementById('authConfirmPassword');
  const rememberCheckbox = document.getElementById('authRemember');

  if(!emailInput || !passwordInput || !nameInput || !usernameInput || !phoneInput || !confirmPasswordInput || !rememberCheckbox) return;

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  const name = nameInput.value.trim() || 'Learner';
  const username = usernameInput.value.trim().toLowerCase();
  const phone = phoneInput.value.trim();

  if(!email || !password) {
    showAuthMessage('Email and password are required.');
    return;
  }

  if(password.length < 6) {
    showAuthMessage('Password must be at least 6 characters.');
    return;
  }

  if(authMode === 'register') {
    if(name.length < 2) {
      showAuthMessage('Please enter your full name.');
      return;
    }
    if(!/^[a-z0-9_]{3,20}$/i.test(username)) {
      showAuthMessage('Username should be 3-20 characters using letters, numbers, or underscore.');
      return;
    }
    if(!/^\d{10}$/.test(phone)) {
      showAuthMessage('Phone number must be exactly 10 digits.');
      return;
    }
    if(password !== confirmPasswordInput.value) {
      showAuthMessage('Password and confirm password do not match.');
      return;
    }
  }

  try {
    const endpoint = authMode === 'register' ? `${API_BASE}/auth/register` : `${API_BASE}/auth/login`;
    const payload = authMode === 'register'
      ? { name, username, phone, email, password }
      : { email, password };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if(!response.ok) {
      showAuthMessage(data.message || 'Authentication failed.');
      return;
    }

    currentUser = data.user;
    currentToken = data.token || '';
    showAuthMessage(authMode === 'register' ? 'Account created successfully.' : 'Login successful.', 'success');

    if(rememberCheckbox.checked) {
      localStorage.setItem('dsoCurrentUser', JSON.stringify(currentUser));
      localStorage.setItem(AUTH_TOKEN_KEY, currentToken);
      sessionStorage.removeItem('dsoCurrentUser');
      sessionStorage.removeItem(AUTH_TOKEN_KEY);
    } else {
      sessionStorage.setItem('dsoCurrentUser', JSON.stringify(currentUser));
      sessionStorage.setItem(AUTH_TOKEN_KEY, currentToken);
      localStorage.removeItem('dsoCurrentUser');
      localStorage.removeItem(AUTH_TOKEN_KEY);
    }

    updateAuthUI();
    setTimeout(() => {
      closeAuthModal();
    }, 700);
  } catch (error) {
    showAuthMessage('Unable to connect to server. Please try again.');
  }
}

function logout() {
  localStorage.removeItem('dsoCurrentUser');
  localStorage.removeItem(AUTH_TOKEN_KEY);
  sessionStorage.removeItem('dsoCurrentUser');
  sessionStorage.removeItem(AUTH_TOKEN_KEY);
  currentUser = null;
  currentToken = '';
  updateAuthUI();
}

