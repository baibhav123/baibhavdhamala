/**
 * BAIBHAV DHAMALA — PORTFOLIO CLIENT LOGIC
 * Interactive particle canvas, project filtering, modals, contact handler, and active navigation.
 */

// Project Data Registry — Tailored to Baibhav Dhamala's Real Ventures & Achievements
export const PROJECTS_DATA = [
  {
    id: 'x2velzaris',
    category: 'ai',
    categoryLabel: 'Proprietary AI Model & Intelligence Infrastructure',
    title: 'X2 VELZARIS',
    tagline: 'Independent AI Model & Intelligence Infrastructure Project by Dhamala Tech',
    desc: 'X2 VELZARIS is an independently engineered AI model and intelligence infrastructure project by Dhamala Tech, built as the model foundation for the next generation of ChatX and Saarthi AI. Features a decoder-only Transformer architecture with GQA, RMSNorm, RoPE and SwiGLU, a local inference runtime, and a deterministic data preprocessing pipeline.',
    problem: 'Commercial AI applications frequently rely on external, closed-source black-box APIs without architectural ownership, verifiable data provenance, or explicit separation between model intelligence and agent orchestration.',
    solution: 'Designed and engineered the full intelligence stack from scratch: a custom decoder-only Transformer architecture, 16K BPE tokenizer, local inference runtime with streaming, deterministic data curation pipeline, and a production-grade ChatX ModelProvider interface with an active ~8M parameter baseline validated on Apple Silicon.',
    tags: [
      'Python',
      'PyTorch',
      'Transformer Architecture',
      'GQA',
      'RMSNorm',
      'RoPE',
      'SwiGLU',
      'BPE Tokenization',
      'LLM Inference',
      'AI Systems Architecture',
      'Data Engineering'
    ],
    stats: 'Active Baseline: ~8M params · 16K tokenizer · 2048 context · Apple Silicon CPU Inference',
    accentColor: '#00f0ff',
    icon: '🧠',
    customHtml: `
      <!-- Architecture Pipeline -->
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 13.5px; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 0.08em; margin-bottom: 10px;">Architecture Pipeline</h4>
        <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(0, 240, 255, 0.25); border-radius: 6px; padding: 14px; font-family: var(--font-mono); font-size: 11.5px; color: #fff; line-height: 1.8; overflow-x: auto;">
          <div style="color: var(--accent-cyan); font-weight: 600;">VELZARIS MODEL (Decoder-only Transformer · GQA · RMSNorm · RoPE · SwiGLU)</div>
          <div style="color: var(--text-muted); padding-left: 20px;">↓</div>
          <div style="color: #fff;">VELZARIS RUNTIME / API (Local C++ / PyTorch Inference Serving Engine)</div>
          <div style="color: var(--text-muted); padding-left: 20px;">↓</div>
          <div style="color: #60a5fa;">CHATX MODEL PROVIDER (Production Provider Interface &amp; Contract)</div>
          <div style="color: var(--text-muted); padding-left: 20px;">↓</div>
          <div style="color: #a855f7;">CHATX (Collaborative AI Workspace &amp; Chat Interface)</div>
          <div style="color: var(--text-muted); padding-left: 20px;">↓</div>
          <div style="color: #ec4899;">DHAMALA TECH API (Unified Gateway &amp; Enterprise Services)</div>
          <div style="color: var(--text-muted); padding-left: 20px;">↓</div>
          <div style="color: #34d399;">SAARTHI AI (Orchestration, Permissions, Tools &amp; Actions Engine)</div>
          <div style="color: var(--text-muted); padding-left: 20px;">↓</div>
          <div style="color: #fbbf24;">TOOLS • APPS • EXTERNAL ACTIONS</div>
        </div>
      </div>

      <!-- Current Technical Baseline -->
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <h4 style="font-size: 13.5px; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 0.08em; margin: 0;">Current Technical Baseline</h4>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-cyan); background: rgba(0, 240, 255, 0.12); padding: 3px 8px; border-radius: 4px; border: 1px solid rgba(0, 240, 255, 0.3);">Active R&amp;D Baseline</span>
        </div>
        <p style="font-size: 13px; color: var(--text-body); margin-bottom: 12px; line-height: 1.5;">
          VELZARIS is an active, callable model inference engine with a validated ChatX integration contract.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 12px;">
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 10px 12px; border-radius: 6px;">
            <span style="font-size: 11px; color: var(--text-muted); display: block; font-family: var(--font-mono);">Model Size</span>
            <strong style="font-size: 14px; color: #fff;">~8M Parameters</strong>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 10px 12px; border-radius: 6px;">
            <span style="font-size: 11px; color: var(--text-muted); display: block; font-family: var(--font-mono);">Tokenizer</span>
            <strong style="font-size: 14px; color: #fff;">16K Production Tokenizer</strong>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 10px 12px; border-radius: 6px;">
            <span style="font-size: 11px; color: var(--text-muted); display: block; font-family: var(--font-mono);">Context Window</span>
            <strong style="font-size: 14px; color: #fff;">2048-Token Local Context</strong>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 10px 12px; border-radius: 6px;">
            <span style="font-size: 11px; color: var(--text-muted); display: block; font-family: var(--font-mono);">Hardware Target</span>
            <strong style="font-size: 14px; color: #fff;">Apple Silicon CPU Inference</strong>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 10px 12px; border-radius: 6px;">
            <span style="font-size: 11px; color: var(--text-muted); display: block; font-family: var(--font-mono);">Generation Modes</span>
            <strong style="font-size: 14px; color: #fff;">Deterministic Greedy &amp; Streaming</strong>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 10px 12px; border-radius: 6px;">
            <span style="font-size: 11px; color: var(--text-muted); display: block; font-family: var(--font-mono);">Integration Contract</span>
            <strong style="font-size: 14px; color: #fff;">ChatX ModelProvider Ready</strong>
          </div>
        </div>
        <div style="padding: 10px 14px; background: rgba(0, 240, 255, 0.04); border-left: 3px solid var(--accent-cyan); border-radius: 0 4px 4px 0; font-family: var(--font-mono); font-size: 11.5px; color: var(--text-body);">
          <strong>Future Scaling Ladder:</strong> ~8M → 100M+ → 500M+ → 1B–3B → 7B+
        </div>
      </div>

      <!-- What I Built -->
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 13.5px; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 0.08em; margin-bottom: 10px;">What I Built</h4>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
          <li style="display: flex; gap: 10px; font-size: 13.5px; color: var(--text-body); line-height: 1.5;">
            <span style="color: var(--accent-cyan); flex-shrink: 0;">▹</span>
            <span><strong>Decoder-Only Transformer Architecture:</strong> Designed with Grouped-Query Attention (GQA), RMSNorm pre-normalization, Rotary Position Embeddings (RoPE), and SwiGLU activation functions.</span>
          </li>
          <li style="display: flex; gap: 10px; font-size: 13.5px; color: var(--text-body); line-height: 1.5;">
            <span style="color: var(--accent-cyan); flex-shrink: 0;">▹</span>
            <span><strong>Local Inference Runtime &amp; Serving Layer:</strong> Built a complete high-efficiency local serving engine supporting low-latency token streaming and deterministic decoding.</span>
          </li>
          <li style="display: flex; gap: 10px; font-size: 13.5px; color: var(--text-body); line-height: 1.5;">
            <span style="color: var(--accent-cyan); flex-shrink: 0;">▹</span>
            <span><strong>ChatX Model Provider Interface:</strong> Developed a production-oriented provider abstraction to smoothly integrate VELZARIS with the ChatX collaborative workspace.</span>
          </li>
          <li style="display: flex; gap: 10px; font-size: 13.5px; color: var(--text-body); line-height: 1.5;">
            <span style="color: var(--accent-cyan); flex-shrink: 0;">▹</span>
            <span><strong>Deterministic Data Pipeline:</strong> Engineered data curation and preprocessing with deduplication, contamination checks, language detection, quality filtering, and reproducible dataset generation.</span>
          </li>
          <li style="display: flex; gap: 10px; font-size: 13.5px; color: var(--text-body); line-height: 1.5;">
            <span style="color: var(--accent-cyan); flex-shrink: 0;">▹</span>
            <span><strong>Model Scaling Architecture:</strong> Designed end-to-end scaling architecture ranging from lightweight edge models to multi-billion-parameter systems.</span>
          </li>
          <li style="display: flex; gap: 10px; font-size: 13.5px; color: var(--text-body); line-height: 1.5;">
            <span style="color: var(--accent-cyan); flex-shrink: 0;">▹</span>
            <span><strong>Distributed Training Specifications:</strong> Implemented checkpointing, compute/memory budgeting, and distributed-training architecture specifications for future large-scale training.</span>
          </li>
          <li style="display: flex; gap: 10px; font-size: 13.5px; color: var(--text-body); line-height: 1.5;">
            <span style="color: var(--accent-cyan); flex-shrink: 0;">▹</span>
            <span><strong>Deterministic Evaluation &amp; Reproducibility:</strong> Added automated integrity checks, reproducibility testing, and historical artifact verification across development runs.</span>
          </li>
          <li style="display: flex; gap: 10px; font-size: 13.5px; color: var(--text-body); line-height: 1.5;">
            <span style="color: var(--accent-cyan); flex-shrink: 0;">▹</span>
            <span><strong>Decoupled Model Boundary:</strong> Designed system boundaries so VELZARIS strictly handles intelligence/inference while Saarthi AI handles orchestration, tools, and actions.</span>
          </li>
        </ul>
      </div>

      <!-- Engineering Highlights -->
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 13.5px; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 0.08em; margin-bottom: 10px;">Engineering Highlights</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px;">
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); padding: 12px; border-radius: 6px;">
            <strong style="color: #fff; font-size: 13px; display: block; margin-bottom: 4px;">🔬 Model Engineering</strong>
            <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5; margin: 0;">Transformer architecture, tokenizer integration, inference, generation and scaling.</p>
          </div>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); padding: 12px; border-radius: 6px;">
            <strong style="color: #fff; font-size: 13px; display: block; margin-bottom: 4px;">⚙️ AI Infrastructure</strong>
            <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5; margin: 0;">Runtime, serving contract, provider abstraction, deterministic evaluation and resource controls.</p>
          </div>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); padding: 12px; border-radius: 6px;">
            <strong style="color: #fff; font-size: 13px; display: block; margin-bottom: 4px;">📊 Data Engineering</strong>
            <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5; margin: 0;">Rights-aware sourcing, quality filtering, deduplication, contamination auditing, language handling and deterministic dataset packing.</p>
          </div>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); padding: 12px; border-radius: 6px;">
            <strong style="color: #fff; font-size: 13px; display: block; margin-bottom: 4px;">🏛️ AI Systems Architecture</strong>
            <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5; margin: 0;">Separated model intelligence from agent orchestration, permissions, tools and external actions.</p>
          </div>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); padding: 12px; border-radius: 6px; grid-column: 1 / -1;">
            <strong style="color: #fff; font-size: 13px; display: block; margin-bottom: 4px;">🛡️ Reliability &amp; Reproducibility</strong>
            <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5; margin: 0;">Cryptographic artifact verification, deterministic pipelines, regression testing and integrity preservation across development phases.</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'chatx',
    category: 'ai',
    categoryLabel: 'Flagship AI Workspace',
    title: 'ChatX AI Workspace — Multi-Model Reasoning & Analytics',
    tagline: 'Flagship collaborative environment with ChatX API v2 for text generation, research, and codebase debugging',
    desc: 'Flagship AI product of Dhamala Tech. ChatX is a fast, multi-model collaborative environment built for text generation, in-depth research, coding assistance, and advanced data analytics. In March 2026, Dhamala Tech launched ChatX API v2, introducing multi-step reasoning capabilities, multi-language processing, and real-time codebase debugging.',
    problem: 'Existing developer and research workflows require juggling disjointed tools without unified multi-model synthesis or fast inference.',
    solution: 'Built a sub-second, multi-model workspace with dedicated developer APIs, real-time vision, text synthesis, and automated code review pipelines.',
    tags: ['Dhamala Tech', 'Multi-Model AI', 'ChatX API v2', 'Python', 'Sub-Second Inference'],
    stats: 'API v2 Launched March 2026 · chatx.dhamalatech.com',
    accentColor: '#00f0ff',
    icon: '⚡',
  },
  {
    id: 'tutorx',
    category: 'ai',
    categoryLabel: 'EdTech AI Platform',
    title: 'TutorX AI Platform — Adaptive Learning for K-12',
    tagline: 'Personalized learning environment for Class 2 to 12 students with AI doubt-solving rooms',
    desc: 'Developed under Dhamala Tech, TutorX is an adaptive, personalized learning platform targeted toward K-12 students (Class 2 to 12) and educators. It features animated curriculum video lessons, automated interactive quizzes, 24/7 AI doubt-solving rooms, and real-time student mastery tracking.',
    problem: 'Classroom education struggles to adapt to individual student learning speeds, leaving conceptual gaps in foundational STEM subjects.',
    solution: 'Created an intelligent tutoring architecture that diagnoses student comprehension in real time and automatically adapts lesson depth and exercises.',
    tags: ['EdTech', 'Adaptive Learning', 'AI Tutoring', 'K-12 Education', 'Dhamala Tech'],
    stats: 'Class 2–12 Personalized Platform · dhamalatech.com/tutorx',
    accentColor: '#10b981',
    icon: '📚',
  },
  {
    id: 'sanketx',
    category: 'iot',
    categoryLabel: 'Next-Gen HCI System',
    title: 'SanketX — Voice & Gesture Tracking Interaction System',
    tagline: 'Hardware-software combination redefining human-computer interaction through real-time voice and gesture tracking',
    desc: 'Unveiled by Dhamala Tech in February 2026. SanketX is a breakthrough multimodal interaction system combining hardware sensors and computer vision software to track physical hand gestures and acoustic voice commands for zero-touch computing.',
    problem: 'Traditional peripheral input devices are limiting for immersive interfaces, laboratory settings, and accessibility-first environments.',
    solution: 'Engineered a low-latency gesture recognition pipeline integrated with automated speech recognition for intuitive multi-modal control.',
    tags: ['Computer Vision', 'Voice Control', 'Hardware-Software', 'HCI', 'Dhamala Tech'],
    stats: 'Unveiled February 2026 · Next-Gen HCI',
    accentColor: '#a855f7',
    icon: '🔮',
  },
  {
    id: 'trashtrackai',
    category: 'ai',
    categoryLabel: 'AI & Sustainability',
    title: 'TrashTrack AI — Intelligent Waste Classifier',
    tagline: 'Deep learning computer vision application for automated municipal waste segregation',
    desc: 'Engineered an artificial intelligence application during the prestigious AI for Youth Program (jointly certified by Intel and CBSE in June 2025). Uses convolutional image classification to identify and categorize recyclable, biodegradable, and hazardous waste in real time.',
    problem: 'Improper municipal waste sorting leads to massive environmental contamination and overwhelmed landfill infrastructure.',
    solution: 'Trained and deployed a lightweight computer vision model capable of real-time multi-class trash classification with confidence scoring and automated segregation recommendations.',
    tags: ['Python', 'Computer Vision', 'Intel AI for Youth', 'TensorFlow', 'FastAPI'],
    stats: 'Certified by Intel & CBSE · June 2025 AI for Youth Program',
    accentColor: '#00f0ff',
    icon: '♻️',
  },
  {
    id: 'kalpstudio',
    category: 'fullstack',
    categoryLabel: 'Digital Studio Agency',
    title: 'Kalp Studio — Digital Product Agency',
    tagline: 'Modern digital design and high-performance web agency operating under Dhamala Tech',
    desc: 'Founded by Baibhav Dhamala (Tech & Product Architecture) in business partnership. Kalp Studio builds fast, conversion-optimized, responsive web platforms for businesses to expand online without legacy agency overhead.',
    problem: 'Small and medium businesses frequently struggle with sluggish, overpriced, and bloated websites that fail to drive real customer sales or bookings.',
    solution: 'Engineered a modern web development framework delivering sub-second load times, accessible UI/UX, integrated booking pipelines, and seamless checkout flows.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Dhamala Tech'],
    stats: 'Official Agency: kalpstudio.dhamalatech.com · Founded by Baibhav Dhamala',
    accentColor: '#6366f1',
    icon: '🚀',
  },
  {
    id: 'techzibit',
    category: 'iot',
    categoryLabel: 'Tech Fest 1st Place',
    title: 'Smart Campus IoT & Environmental Telemetry',
    tagline: '1st Place Winning Innovation at Sri Sri Academy Tech Fest Techzibit 1.0',
    desc: 'Champion project designed for Techzibit 1.0 at Sri Sri Academy Siliguri. Built a connected microcontroller network capturing real-time environmental metrics (PM2.5, carbon levels, ambient acoustics) and visualizing campus telemetry across interactive digital monitors.',
    problem: 'Classrooms and school laboratories lacked automated environmental data tracking to ensure healthy ventilation and noise levels.',
    solution: 'Built an integrated sensor station utilizing microcontrollers and custom telemetry dashboards, securing 1st Place at Techzibit 1.0.',
    tags: ['C++', 'Arduino/ESP32', 'IoT Sensors', 'Telemetry', 'Award Winner'],
    stats: '1st Place Winner · Techzibit 1.0 at Sri Sri Academy Siliguri',
    accentColor: '#10b981',
    icon: '🏆',
  },
  {
    id: 'quantumorbit',
    category: 'stem',
    categoryLabel: 'Computational Physics',
    title: 'QuantumOrbit — Orbital Mechanics Simulator',
    tagline: 'Numerical gravitational simulation inspired by the ISRO Mission Workshop',
    desc: 'Formulated following certification from the national ISRO Mission Workshop by EsroMagica. An interactive computational physics simulator modeling celestial Keplerian trajectories, Hohmann transfer orbits, and multi-body gravitational mechanics.',
    problem: 'Classical astrophysics and orbital mechanics are difficult to conceptualize through static two-dimensional textbook figures.',
    solution: 'Implemented Runge-Kutta 4th Order (RK4) numerical integration to simulate relativistic planetary orbital mechanics at 60 frames per second.',
    tags: ['JavaScript', 'Canvas API', 'ISRO Workshop', 'Physics', 'RK4 Numerical'],
    stats: 'Certified by EsroMagica ISRO Mission Workshop · 60 FPS Sim',
    accentColor: '#a855f7',
    icon: '🪐',
  },
  {
    id: 'cricheroes',
    category: 'fullstack',
    categoryLabel: 'Sports Analytics',
    title: 'Cricket Analytics & Match Telemetry Hub',
    tagline: 'Statistical performance and match tracker for Sri Sri Academy Cricket Team',
    desc: 'A dedicated statistical analysis dashboard aggregating match telemetry, batting strike rates, bowling averages, and run distributions for Sri Sri Academy Siliguri in tournaments such as the 19th Surendra Agarwal Memorial Tournament and Doon Premier League.',
    problem: 'School cricket teams often lack centralized data visualization to diagnose match performance trends and player consistency.',
    solution: 'Designed an interactive analytics tool integrating CricHeroes match statistics into visual radar charts and wagon wheels.',
    tags: ['React', 'Chart.js', 'CricHeroes API', 'Sports Analytics'],
    stats: 'Tracking Surendra Agarwal Memorial & Doon Premier League Matches',
    accentColor: '#ff3366',
    icon: '🏏',
  },
  {
    id: 'algovision',
    category: 'ai',
    categoryLabel: 'CS & Algorithms',
    title: 'AlgoVision — Algorithm & Data Structure Visualizer',
    tagline: 'Interactive step-by-step visual exploration of graph traversals and sorting algorithms',
    desc: 'An educational computer science platform engineered to demystify complex algorithms through interactive step-by-step animations. Users construct custom weighted graphs and observe Dijkstra, A*, and sorting algorithms execute in real time.',
    problem: 'Abstract algorithmic logic is notoriously challenging for high school CS students without live visual step tracing.',
    solution: 'Designed an interactive grid and node graph canvas with step-by-step inspection, time complexity overlays, and speed controls.',
    tags: ['TypeScript', 'React', 'Canvas API', 'Algorithms', 'CS Education'],
    stats: 'Over 12 algorithms visualized with micro-step inspection',
    accentColor: '#00f0ff',
    icon: '⚡',
  },
];

// Initialize Background Particle Constellation
function initParticleCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const count = Math.min(Math.floor((width * height) / 16000), 75);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.4 ? 'rgba(0, 240, 255, ' : 'rgba(99, 102, 241, ',
      alpha: Math.random() * 0.5 + 0.2,
    });
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.alpha})`;
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      // Connect to mouse cursor
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 140) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.25 * (1 - mdist / 140)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// Setup Project Filtering
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;

      projectCards.forEach((card) => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Setup Skill Category Filtering
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skills-filter .filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;

      skillCards.forEach((card) => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Setup Project Case Study Modal
function initProjectModal() {
  const modal = document.getElementById('projectCaseModal');
  const closeBtn = document.getElementById('projectModalClose');
  const inspectBtns = document.querySelectorAll('.inspect-btn');

  function openProject(id) {
    const proj = PROJECTS_DATA.find((p) => p.id === id);
    if (!proj || !modal) return;

    document.getElementById('modalProjIcon').textContent = proj.icon;
    document.getElementById('modalProjCategory').textContent = proj.categoryLabel;
    document.getElementById('modalProjTitle').textContent = proj.title;
    document.getElementById('modalProjTagline').textContent = proj.tagline;
    document.getElementById('modalProjDesc').textContent = proj.desc;
    document.getElementById('modalProjProblem').textContent = proj.problem;
    document.getElementById('modalProjSolution').textContent = proj.solution;
    document.getElementById('modalProjStats').textContent = proj.stats;

    const customWrap = document.getElementById('modalProjCustom');
    if (customWrap) {
      customWrap.innerHTML = proj.customHtml || '';
    }

    const tagsWrap = document.getElementById('modalProjTags');
    tagsWrap.innerHTML = proj.tags
      .map((t) => `<span class="project-tag" style="color: #00f0ff; border-color: rgba(0,240,255,0.3);">${t}</span>`)
      .join('');

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  inspectBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.project;
      openProject(id);
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('is-active')) {
      closeModal();
    }
  });
}

// Setup Academic CV Drawer Modal
function initAcademicModal() {
  const modal = document.getElementById('academicModal');
  const openBtns = document.querySelectorAll('.open-academic-modal');
  const closeBtn = document.getElementById('academicModalClose');

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('is-active')) {
      closeModal();
    }
  });
}

// Setup Navigation Scroll & Active Highlighting
function initNavigation() {
  const nav = document.getElementById('siteNav');
  const navLinks = document.querySelectorAll('.nav-links a');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const hamburger = document.getElementById('hamburgerBtn');

  // Sticky shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav?.classList.add('is-scrolled');
    } else {
      nav?.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // Mobile drawer toggle
  hamburger?.addEventListener('click', () => {
    mobileDrawer?.classList.toggle('is-open');
  });

  mobileDrawer?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('is-open');
    });
  });

  // Active section observer
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('is-active');
            } else {
              link.classList.remove('is-active');
            }
          });
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px' }
  );

  sections.forEach((sec) => observer.observe(sec));
}

// Setup Contact Form Handling
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alert = document.getElementById('formAlert');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;

    btn.disabled = true;
    btn.textContent = 'Sending Message...';

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = 'Message Sent Successfully!';
      btn.style.background = '#10b981';
      alert?.classList.add('is-success');
      form.reset();

      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        alert?.classList.remove('is-success');
      }, 4000);
    }, 800);
  });
}

// Bootstrap Portfolio
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initProjectFilters();
  initSkillFilters();
  initProjectModal();
  initAcademicModal();
  initNavigation();
  initContactForm();
});

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initParticleCanvas();
  initProjectFilters();
  initSkillFilters();
  initProjectModal();
  initAcademicModal();
  initNavigation();
  initContactForm();
}
