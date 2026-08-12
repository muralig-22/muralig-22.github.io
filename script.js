/* =========================================================
   ICONS — minimal inline line-icon set
   ========================================================= */
const ICONS = {
  home:   '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H9.5a1 1 0 0 0 1-1v-4h3v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-9"/></svg>',
  user:   '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>',
  layers: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z"/><path d="m3.5 12 8.5 4.5 8.5-4.5"/><path d="m3.5 16.5 8.5 4.5 8.5-4.5"/></svg>',
  brief:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/></svg>',
  folder: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2.5h8.5A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18Z"/></svg>',
  award:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.5"/><path d="m8.2 13.5-1.7 6 5.5-2.3 5.5 2.3-1.7-6"/></svg>',
  file:   '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z"/><path d="M14 3.5v4h4"/></svg>',
  mail:   '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
  arrowL: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M11 6l-6 6 6 6"/></svg>',
  arrowR: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  down:   '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v13M6 12l6 6 6-6"/><path d="M4 20h16"/></svg>',
  phone:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4.5h3.5l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V18a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5Z"/></svg>',
  linked: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10.5v6M7.5 7.7v.01M11.5 16.5v-3.6a2.2 2.2 0 0 1 4.4 0v3.6M11.5 10.5v6"/></svg>',
  github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.55-3.03-1.2-3.03-1.2-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.44 0-.98.35-1.78.92-2.4-.09-.23-.4-1.15.09-2.4 0 0 .75-.24 2.46.92a8.5 8.5 0 0 1 4.48 0c1.7-1.16 2.45-.92 2.45-.92.5 1.25.18 2.17.09 2.4.58.62.92 1.42.92 2.4 0 3.45-2.1 4.2-4.1 4.43.32.28.61.83.61 1.68v2.49c0 .24.15.52.61.43A9 9 0 0 0 12 3Z"/></svg>',
  cpu:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
  wifi:   '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5a13 13 0 0 1 16 0"/><path d="M7 13a8.5 8.5 0 0 1 10 0"/><path d="M10 16.5a4 4 0 0 1 4 0"/><circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none"/></svg>',
  tool:   '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 6.5 3 3L8 19H5v-3Z"/><path d="M17 4.5 19.5 7 18 8.5l-2.5-2.5Z"/></svg>',
  board:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h4M7 12h10M7 16h7"/></svg>',
  trophy: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v5a4 4 0 0 1-8 0Z"/><path d="M8 5.5H5a2 2 0 0 0 2 4M16 5.5h3a2 2 0 0 1-2 4"/><path d="M12 13v3.5M9 20.5h6M9.5 20.5c0-2 .8-3 2.5-3s2.5 1 2.5 3"/></svg>',
};

/* =========================================================
   DATA
   ========================================================= */
const DATA = {
  name: "Murali G",
  email: "muraliganesan22@gmail.com",
  phone: "+91 7010662550",
  linkedin: "https://linkedin.com/in/murali-g-g22",
  github: "https://github.com/muralig-22",

  summary: "Embedded Systems Engineer with hands-on experience developing embedded solutions on STM32, ESP32, and ARM Cortex-M microcontrollers. Practiced in Embedded C, FreeRTOS, peripheral driver development (ADC, SPI, I2C, UART, DMA, Timers), PCB bring-up, and system validation — with real product experience in biomedical devices and IoT.",

  stats: [
    { val: "8.2", lbl: "CGPA", icon: "award", color: "primary" },
    { val: "₹6L", lbl: "Hackathon Award", icon: "trophy", color: "amber" },
    { val: "9+", lbl: "Protocols & Interfaces", icon: "wifi", color: "teal" },
    { val: "5", lbl: "Major Projects", icon: "folder", color: "rose" },
  ],

  education: [
    { degree: "B.E. Biomedical Engineering (Hons.)", org: "Bannari Amman Institute of Technology", period: "2022 – 2026", meta: "CGPA 8.2" },
    { degree: "Higher & Secondary Education", org: "Nirmala Matriculation Higher Secondary School", period: "2019 – 2022", meta: "HSC 83.3% · SSLC 96.4%" },
  ],

  languages: [
    { name: "English", level: "Professional working proficiency" },
    { name: "Tamil", level: "Native proficiency" },
  ],

  skills: [
    { title: "Embedded Firmware & Systems", icon: "cpu", items: ["Embedded C", "Python", "Linux", "FreeRTOS", "STM32 (ARM Cortex-M)", "ESP32 / ESP32-S3", "Interrupts & Registers", "Debugging", "Test & QA"] },
    { title: "Communication Protocols", icon: "wifi", items: ["UART", "SPI", "I2C", "BLE", "Wi-Fi", "TCP/IP", "MQTT", "CAN", "LoRaWAN"] },
    { title: "Embedded Hardware", icon: "board", items: ["Hardware Integration", "PCB Bring-up & Debugging", "Schematic Capture (Altium)", "Signal Validation (LTspice)"] },
    { title: "Tools", icon: "tool", items: ["STM32CubeIDE", "STM32CubeMX", "Git", "VS Code", "LTspice", "Altium Designer", "Oscilloscope", "Logic Analyzer"] },
  ],

  experience: [
    {
      role: "Embedded Hardware Intern",
      org: "Qneuro India Pvt. Ltd.",
      period: "07/2025 – Present · Chennai",
      bullets: [
        "Developed and debugged embedded firmware on ARM Cortex-M microcontrollers for real-time EEG signal acquisition and biomedical data processing.",
        "Designed and implemented peripheral drivers using ADC, SPI, I2C, UART, DMA, GPIO, Timers, and interrupt-driven architectures.",
        "Developed an Automatic Gain Control (AGC) algorithm to dynamically calibrate IR and Red LED intensity based on skin tone, improving PPG signal quality.",
        "Implemented Bluetooth Low Energy (BLE) communication for reliable wireless transmission of biomedical sensor data.",
        "Worked on Linux-based Raspberry Pi systems for embedded integration, TCP/IP communication, and camera streaming applications.",
        "Assisted in PCB bring-up, hardware validation, circuit debugging, and embedded hardware integration.",
        "Conducted firmware testing, calibration, and validation using oscilloscopes, logic analyzers, and structured test procedures.",
      ],
    },
  ],

  achievements: [
    { title: "Winner — MSME Idea Hackathon 5.0", org: "Government of India · 2026", desc: "Recognized and awarded ₹6 Lakhs for the project “Predictive Machine Health and Control Hub.”" },
    { title: "TN Skills Level 2 Competition", org: "Naan Mudhalvan TNSDC · 2024", desc: "Health and Social Care category." },
    { title: "Finalist — BITHack 23", org: "2023", desc: "Hardware edition, for the Home Automation System project." },
  ],

  certificates: [
    { name: "Radio Frequency Applications", issuer: "Microchip Technology Inc." },
    { name: "PCB Design — Altium Designer", issuer: "Altium®" },
    { name: "Introduction to IoT and Digital Transformation", issuer: "Cisco Networking Academy" },
    { name: "Machine Learning Algorithms", issuer: "Great Learning" },
  ],

  projects: {
    "steering-wheel": {
      title: "Healthcare Steering Wheel",
      tag: "Biomedical · Automotive · Driver Monitoring",
      summary: "A steering-wheel-embedded biosensing system that reads a driver's physiological signals during normal grip contact, aimed at flagging fatigue or cardiac irregularity before they become road hazards.",
      stack: ["PPG", "ESP32", "MAX30102", "BLE", "Signal Processing"],
      body: [
        "Concept: integrate optical PPG sensing directly into the steering wheel rim so heart rate and perfusion trends can be monitored passively, without any wearable, during normal driving contact.",
        "Sensor placement and grip-contact reliability are the core hardware challenges — the design targets consistent optical coupling across a range of hand positions and pressures.",
        "On-device filtering removes motion and vibration artifacts introduced by the vehicle before the signal reaches a fatigue/anomaly scoring stage.",
        "Wireless link (BLE) forwards processed readings to a dashboard or companion app for trend logging and alerting.",
      ],
      isPlaceholder: true,
    },
    "machine-health": {
      title: "Predictive Machine Health and Control Hub",
      tag: "Industrial IoT · Predictive Maintenance · 2025",
      summary: "A real-time sensor data acquisition system on ESP32 and STM32 for early fault detection in industrial equipment — winner of the MSME Idea Hackathon 5.0.",
      stack: ["ESP32", "STM32", "UART", "Cloud Telemetry", "Vibration/Temp/Pressure/Current Sensing"],
      body: [
        "Built a real-time sensor data acquisition pipeline across ESP32 and STM32 platforms for early fault detection in industrial equipment.",
        "Acquired and processed data from vibration, temperature, pressure, and current sensors to continuously monitor machine health.",
        "Implemented UART-based communication between STM32 and ESP32, enabling reliable data transfer to a web-based dashboard for real-time visualization and analysis.",
        "Integrated cloud communication protocols for remote monitoring and predictive maintenance analytics.",
        "Recognized with the MSME Idea Hackathon 5.0 award (₹6 Lakhs) by the Government of India.",
      ],
    },
    "ble-daq": {
      title: "BLE Biomedical DAQ",
      tag: "BLE GATT · STM32WB5MMG · Biosignal Transmission",
      summary: "A custom BLE GATT service on the dual-core STM32WB5MMG for reliable wireless transmission of biomedical sensor data from an acquisition front-end to a host device.",
      stack: ["STM32WB5MMG", "BLE GATT", "M4/M0+ Dual-Core", "Command-Response Protocol"],
      body: [
        "Designed a custom GATT service with a command-response scheme (device init, version query, device name) to bring up wireless control over the acquisition front-end.",
        "Evaluated single- versus two-characteristic GATT design trade-offs for command/response separation, balancing simplicity against throughput and central-side complexity.",
        "Leveraged the STM32WB5MMG's dual-core M4/M0+ architecture to keep BLE stack timing isolated from the biosignal acquisition and processing loop.",
        "Focused on connection reliability and low-latency streaming suited to continuous biomedical sensor data rather than bursty command traffic.",
      ],
    },
    "dma-system": {
      title: "STM32 DMA System",
      tag: "STM32 · DMA · Multi-Peripheral Acquisition",
      summary: "A DMA-driven peripheral architecture on STM32 that offloads ADC, SPI, I2C, UART, and timer-driven data movement from the CPU for real-time, interrupt-driven biosignal acquisition.",
      stack: ["STM32", "DMA", "ADC/SPI/I2C/UART", "Interrupt-Driven Architecture"],
      body: [
        "Designed and implemented peripheral drivers across ADC, SPI, I2C, UART, DMA, GPIO, and Timers to move data without blocking the CPU during high-rate acquisition.",
        "Used interrupt-driven, DMA-backed transfers to keep the acquisition loop deterministic — critical for maintaining consistent sample timing in biosignal capture.",
        "Applied this architecture in real-time EEG signal acquisition and biomedical data processing work, where CPU headroom was needed for on-device filtering and AGC.",
        "Validated timing and data integrity using oscilloscopes and logic analyzers as part of structured test procedures.",
      ],
    },
    "custom-pcb": {
      title: "Custom PCB",
      tag: "PCB Design · KiCad · JLCPCB",
      summary: "An IR-based breathing / respiration sensor PCB built around the STM32F429I Discovery board, taken from schematic to fabrication-ready Gerbers through a structured 10-day KiCad workflow.",
      stack: ["KiCad", "STM32F429I", "TSAL6200", "BPW34 / SFH203", "JLCPCB"],
      hasTabs: true,
      hardware: [
        "Emitter/receiver pair: TSAL6200 IR emitter paired with a BPW34 or SFH203 photodiode, positioned to sense chest-band or airflow-modulated IR transmission for respiration sensing.",
        "Schematic captured in KiCad with the STM32F429I Discovery board as the processing host, following a structured 10-day design-to-fab workflow.",
        "Fabrication targeted JLCPCB, with design choices (trace width, via sizing, layer stack) made to match their standard capabilities and keep turnaround fast.",
        "Analog front-end considerations included transimpedance gain staging and noise isolation around the photodiode signal path before it reaches the MCU's ADC.",
      ],
      firmware: [
        "Firmware on the STM32F429I handles synchronized IR emitter drive and photodiode sampling, timed to reject ambient light interference.",
        "Signal conditioning stage filters the raw respiration waveform before peak/trough detection extracts breathing rate.",
        "Structured around the same peripheral-driver approach used elsewhere in this portfolio — ADC sampling, timer-based emitter modulation, and interrupt-driven capture.",
        "Designed to be extensible toward the same DMA-based acquisition architecture used in the STM32 DMA System project.",
      ],
    },
  },
};

const projectOrder = ["steering-wheel", "machine-health", "ble-daq", "dma-system", "custom-pcb"];

const colorMap = {
  primary: { bg: "var(--primary-soft)", fg: "var(--primary-dark)" },
  teal:    { bg: "var(--teal-soft)",    fg: "#0F8E80" },
  amber:   { bg: "var(--amber-soft)",   fg: "#B47816" },
  rose:    { bg: "var(--rose-soft)",    fg: "#C23855" },
};

/* =========================================================
   NAV
   ========================================================= */
const navItems = [
  { route: "home", label: "Home", icon: "home" },
  { route: "about", label: "About", icon: "user" },
  { route: "skills", label: "Skills", icon: "layers" },
  { route: "experience", label: "Experience", icon: "brief" },
  { route: "projects", label: "Projects", icon: "folder" },
  { route: "achievements", label: "Achievements", icon: "award" },
  { route: "resume", label: "Resume", icon: "file" },
  { route: "contact", label: "Contact", icon: "mail" },
];

function renderNav() {
  const sideNav = document.getElementById("sideNav");
  let html = "";
  navItems.forEach(item => {
    html += `<a href="#${item.route}" class="nav-item" data-route="${item.route}">${ICONS[item.icon]}<span>${item.label}</span></a>`;
    if (item.route === "projects") {
      html += `<div class="sub-nav">${projectOrder.map(key => `
        <a href="#projects/${key}" class="nav-item" data-route="projects/${key}"><span>${DATA.projects[key].title}</span></a>
      `).join("")}</div>`;
    }
  });
  sideNav.innerHTML = html;
}

/* =========================================================
   RENDERERS
   ========================================================= */
function renderHome() {
  return `
  <section class="view">
    <div class="card hero-card">
      <div class="eyebrow">Portfolio Overview</div>
      <h1>Building the hardware that <span class="accent">reads the body.</span></h1>
      <p class="lede">${DATA.summary}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#projects">${ICONS.folder} View Projects</a>
        <a class="btn" href="#resume">${ICONS.down} Resume</a>
        <a class="btn" href="#contact">${ICONS.mail} Get in Touch</a>
      </div>
    </div>

    <div class="stat-row">
      ${DATA.stats.map(s => `
        <div class="card stat-card">
          <div class="stat-icon" style="background:${colorMap[s.color].bg}; color:${colorMap[s.color].fg};">${ICONS[s.icon]}</div>
          <div class="stat-val">${s.val}</div>
          <div class="stat-lbl">${s.lbl}</div>
        </div>`).join("")}
    </div>

    <div class="dash-grid">
      <div class="card panel">
        <h3>Core Focus Areas</h3>
        <div class="panel-sub">Breadth of tools &amp; competencies by domain</div>
        <div class="chart-wrap"><canvas id="radarChart"></canvas></div>
      </div>
      <div class="card panel">
        <h3>Current Role</h3>
        <div class="panel-sub">${DATA.experience[0].org} · ${DATA.experience[0].period}</div>
        <ul style="display:flex; flex-direction:column; gap:12px; margin-top:6px;">
          ${DATA.experience[0].bullets.slice(0,4).map(b => `<li style="font-size:13.5px; color:var(--text-2); padding-left:18px; position:relative;"><span style="position:absolute;left:0;top:8px;width:6px;height:6px;border-radius:50%;background:var(--teal);"></span>${b}</li>`).join("")}
        </ul>
        <a class="btn" style="margin-top:18px;" href="#experience">Full experience ${ICONS.arrowR}</a>
      </div>
    </div>

    <div class="quick-links">
      <a class="card quick-link" href="#projects">
        <div class="ql-icon">${ICONS.folder}</div>
        <h4>Explore Projects</h4>
        <p>5 builds across biomedical sensing, PCB design, and IoT.</p>
      </a>
      <a class="card quick-link" href="#skills">
        <div class="ql-icon">${ICONS.layers}</div>
        <h4>Technical Skills</h4>
        <p>Firmware, protocols, hardware bring-up, and tooling.</p>
      </a>
      <a class="card quick-link" href="#contact">
        <div class="ql-icon">${ICONS.mail}</div>
        <h4>Let's Connect</h4>
        <p>Open to firmware &amp; embedded roles in healthcare/IoT.</p>
      </a>
    </div>
  </section>`;
}

function renderAbout() {
  return `
  <section class="view">
    <div class="section-head"><div><div class="eyebrow">About</div><h2>Grounded in hardware, driven by biomedical signal work.</h2></div></div>
    <div class="about-grid">
      <div class="card about-card">
        <p>I'm a final-year <strong>Biomedical Engineering</strong> student at Bannari Amman Institute of Technology, currently working as an <strong>Embedded Hardware Intern at Qneuro India Pvt. Ltd.</strong> in Chennai, where I build ARM Cortex-M firmware for real-time EEG signal acquisition.</p>
        <p>My work sits at the intersection of <strong>hardware and signal integrity</strong> — peripheral driver development, PCB bring-up, and wireless connectivity (BLE, Wi-Fi, TCP/IP) across STM32, ESP32, and Raspberry Pi platforms, almost always in service of getting a clean physiological signal off a sensor and onto a screen.</p>
        <p>I'm currently targeting <strong>firmware and embedded systems engineering roles</strong> in healthcare or IoT product companies, where that combination of low-level hardware fluency and biomedical context can do the most good.</p>
        <div class="lang-row">
          ${DATA.languages.map(l => `<div class="lang-chip"><b>${l.name}</b>${l.level}</div>`).join("")}
        </div>
      </div>
      <div class="edu-list">
        ${DATA.education.map(e => `
          <div class="card edu-card">
            <h4>${e.degree}</h4>
            <div class="org">${e.org}</div>
            <div class="meta"><span>${e.period}</span><span>${e.meta}</span></div>
          </div>`).join("")}
      </div>
    </div>
  </section>`;
}

function renderSkills() {
  return `
  <section class="view">
    <div class="section-head"><div><div class="eyebrow">Skills</div><h2>The stack, from silicon to signal.</h2><p class="sub">Firmware, protocols, hardware bring-up, and the tools that hold it together.</p></div></div>

    <div class="card skills-chart-card">
      <h3 style="margin-bottom:2px;">Tools per Domain</h3>
      <div class="panel-sub" style="margin-bottom:18px;">Number of technologies listed under each category</div>
      <div class="chart-wrap" style="height:220px;"><canvas id="skillsBarChart"></canvas></div>
    </div>

    <div class="skill-grid">
      ${DATA.skills.map(cat => `
        <div class="card skill-card">
          <div class="cat-head">
            <div class="cat-icon" style="background:var(--primary-soft); color:var(--primary-dark);">${ICONS[cat.icon]}</div>
            <div><h3 style="margin-bottom:2px;">${cat.title}</h3><span class="count">${cat.items.length} tools</span></div>
          </div>
          <div class="chip-wrap">${cat.items.map(i => `<span class="chip">${i}</span>`).join("")}</div>
        </div>`).join("")}
    </div>
  </section>`;
}

function renderExperience() {
  return `
  <section class="view">
    <div class="section-head"><div><div class="eyebrow">Experience</div><h2>Where the firmware meets the bench.</h2></div></div>
    <div class="timeline">
      ${DATA.experience.map(e => `
        <div class="timeline-item">
          <div class="card timeline-card">
            <div class="role">${e.role}</div>
            <div class="org-row"><span class="org">${e.org}</span><span class="period">${e.period}</span></div>
            <ul>${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
          </div>
        </div>`).join("")}
    </div>
  </section>`;
}

function renderProjects() {
  return `
  <section class="view">
    <div class="section-head"><div><div class="eyebrow">Projects</div><h2>Five builds, one throughline: signal off the sensor, cleanly.</h2></div></div>
    <div class="project-grid">
      ${projectOrder.map(key => {
        const p = DATA.projects[key];
        return `
        <a class="card project-card" href="#projects/${key}">
          <span class="tag">${p.tag}</span>
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
          <span class="go">Open project ${ICONS.arrowR}</span>
        </a>`;
      }).join("")}
    </div>
  </section>`;
}

function renderProjectDetail(key) {
  const p = DATA.projects[key];
  if (!p) return renderProjects();
  const tags = p.stack.map(s => `<span class="chip">${s}</span>`).join("");

  let bodyHTML = "";
  if (p.hasTabs) {
    bodyHTML = `
      <div class="tab-bar">
        <button class="tab-btn active" data-tab="hardware">Hardware</button>
        <button class="tab-btn" data-tab="firmware">Firmware</button>
      </div>
      <div class="tab-panel active" data-panel="hardware"><ul>${p.hardware.map(b => `<li>${b}</li>`).join("")}</ul></div>
      <div class="tab-panel" data-panel="firmware"><ul>${p.firmware.map(b => `<li>${b}</li>`).join("")}</ul></div>`;
  } else {
    bodyHTML = `<ul>${p.body.map(b => `<li>${b}</li>`).join("")}</ul>`;
  }

  return `
  <section class="view">
    <a class="back-link" href="#projects">${ICONS.arrowL} Back to projects</a>
    <div class="card project-detail-card">
      <div class="project-detail-head"><div><div class="eyebrow">${p.tag}</div><h2>${p.title}</h2></div></div>
      <div class="project-tags">${tags}</div>
      <div class="project-body">
        <p>${p.summary}</p>
        ${bodyHTML}
        ${p.isPlaceholder ? `<div class="placeholder-note">Draft content — replace with your real build notes, sensor choices, and results for this project.</div>` : ""}
      </div>
    </div>
  </section>`;
}

function renderAchievements() {
  return `
  <section class="view">
    <div class="section-head"><div><div class="eyebrow">Achievements</div><h2>Recognition &amp; certifications.</h2></div></div>
    <div class="ach-grid">
      <div>
        <div class="sub-h">Awards</div>
        <div class="ach-list">
          ${DATA.achievements.map(a => `
            <div class="card ach-item">
              <div class="ai-icon">${ICONS.trophy}</div>
              <div><h4>${a.title}</h4><div class="org">${a.org}</div><p>${a.desc}</p></div>
            </div>`).join("")}
        </div>
      </div>
      <div>
        <div class="sub-h">Certificates</div>
        <div class="card cert-list">
          ${DATA.certificates.map(c => `
            <div class="cert-item"><span class="cname">${c.name}</span><span class="cissuer">${c.issuer}</span></div>`).join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function renderResume() {
  return `
  <section class="view">
    <div class="section-head"><div><div class="eyebrow">Resume</div><h2>Full CV, one click away.</h2></div></div>
    <div class="card resume-panel">
      <div class="icon">${ICONS.file}</div>
      <h3>Download the full resume</h3>
      <p>Get the complete, up-to-date resume as a PDF.</p>
      <a class="btn btn-primary" href="Murali_Resume.pdf" download>${ICONS.down} Download Resume (PDF)</a>
      <div class="resume-summary"><h4>Quick Summary</h4><p>${DATA.summary}</p></div>
    </div>
  </section>`;
}

function renderContact() {
  return `
  <section class="view">
    <div class="section-head"><div><div class="eyebrow">Contact</div><h2>Let's talk hardware.</h2><p class="sub">Open to firmware and embedded systems roles in healthcare and IoT. Reach out directly — no forms, no backend.</p></div></div>
    <div class="contact-grid">
      <div class="contact-cards">
        <a class="card contact-card" href="mailto:${DATA.email}"><div class="cicon">${ICONS.mail}</div><div><div class="clabel">Email</div><div class="cvalue">${DATA.email}</div></div></a>
        <a class="card contact-card" href="tel:${DATA.phone.replace(/\s/g,'')}"><div class="cicon">${ICONS.phone}</div><div><div class="clabel">Phone</div><div class="cvalue">${DATA.phone}</div></div></a>
        <a class="card contact-card" href="${DATA.linkedin}" target="_blank" rel="noopener"><div class="cicon">${ICONS.linked}</div><div><div class="clabel">LinkedIn</div><div class="cvalue">linkedin.com/in/murali-g-g22</div></div></a>
        <a class="card contact-card" href="${DATA.github}" target="_blank" rel="noopener"><div class="cicon">${ICONS.github}</div><div><div class="clabel">GitHub</div><div class="cvalue">github.com/muralig-22</div></div></a>
      </div>
      <div class="card info-card">
        <h3>At a glance</h3>
        <div class="info-row"><span class="k">Status</span><span class="v">Open to firmware / embedded roles</span></div>
        <div class="info-row"><span class="k">Location</span><span class="v">Chennai, Tamil Nadu, India</span></div>
        <div class="info-row"><span class="k">Focus</span><span class="v">Healthcare &amp; IoT embedded systems</span></div>
        <div class="info-row"><span class="k">Response time</span><span class="v">Within 24 hours</span></div>
      </div>
    </div>
  </section>`;
}

/* =========================================================
   ROUTER
   ========================================================= */
const routes = {
  home: renderHome, about: renderAbout, skills: renderSkills, experience: renderExperience,
  projects: renderProjects, achievements: renderAchievements, resume: renderResume, contact: renderContact,
};

const content = document.getElementById("content");

function footerHTML() {
  return `<footer class="site-footer">
    <span>© ${new Date().getFullYear()} Murali G — built with HTML, CSS &amp; JS, deployed on GitHub Pages.</span>
    <span>Last updated ${new Date().toLocaleDateString('en-IN', { year:'numeric', month:'short', day:'numeric' })}</span>
  </footer>`;
}

let activeCharts = [];
function destroyCharts(){ activeCharts.forEach(c => c.destroy()); activeCharts = []; }

function initCharts(routeName) {
  destroyCharts();
  if (typeof Chart === "undefined") return;

  const gridColor = "rgba(20,30,55,0.06)";
  const textColor = "#7B8AA3";

  if (routeName === "home") {
    const el = document.getElementById("radarChart");
    if (el) {
      const chart = new Chart(el, {
        type: "radar",
        data: {
          labels: DATA.skills.map(s => s.title),
          datasets: [{
            label: "Tools",
            data: DATA.skills.map(s => s.items.length),
            backgroundColor: "rgba(74,99,232,0.14)",
            borderColor: "#4A63E8",
            pointBackgroundColor: "#4A63E8",
            borderWidth: 2,
          }],
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            r: {
              angleLines: { color: gridColor }, grid: { color: gridColor },
              pointLabels: { color: "#45526B", font: { size: 11, family: "Inter" } },
              ticks: { display: false, backdropColor: "transparent" },
            },
          },
        },
      });
      activeCharts.push(chart);
    }
  }

  if (routeName === "skills") {
    const el = document.getElementById("skillsBarChart");
    if (el) {
      const chart = new Chart(el, {
        type: "bar",
        data: {
          labels: DATA.skills.map(s => s.title),
          datasets: [{
            data: DATA.skills.map(s => s.items.length),
            backgroundColor: ["#4A63E8", "#14B8A6", "#F0A93E", "#E8637A"],
            borderRadius: 6, maxBarThickness: 46,
          }],
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: textColor, font: { size: 11.5, family: "Inter" } } },
            y: { grid: { color: gridColor }, ticks: { color: textColor, stepSize: 2, font: { size: 11 } }, beginAtZero: true },
          },
        },
      });
      activeCharts.push(chart);
    }
  }
}

function render() {
  const hash = (location.hash || "#home").replace("#", "");
  const parts = hash.split("/");
  let html;
  let routeName = parts[0];

  if (parts[0] === "projects" && parts[1]) {
    html = renderProjectDetail(parts[1]);
  } else if (routes[parts[0]]) {
    html = routes[parts[0]]();
  } else {
    html = renderHome();
    routeName = "home";
  }

  content.innerHTML = html + footerHTML();
  updateActiveNav(hash);
  window.scrollTo({ top: 0, behavior: "auto" });
  bindTabs();
  closeMobileNav();
  requestAnimationFrame(() => initCharts(routeName));
}

function updateActiveNav(hash) {
  document.querySelectorAll("[data-route]").forEach(a => {
    a.classList.toggle("active", a.dataset.route === hash);
  });
}

function bindTabs() {
  content.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      content.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b === btn));
      content.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.dataset.panel === target));
    });
  });
}

/* mobile nav */
const sidebar = document.getElementById("sidebar");
const navToggle = document.getElementById("navToggle");
const navScrim = document.getElementById("navScrim");
navToggle.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  navScrim.classList.toggle("show", open);
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});
navScrim.addEventListener("click", closeMobileNav);
function closeMobileNav() {
  sidebar.classList.remove("open");
  navScrim.classList.remove("show");
  navToggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => { renderNav(); render(); });
