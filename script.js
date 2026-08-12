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
    { val: "8.2", lbl: "CGPA" },
    { val: "₹6L", lbl: "Hackathon Award" },
    { val: "5+", lbl: "Protocols Shipped" },
    { val: "4", lbl: "Major Projects" },
  ],

  education: [
    {
      degree: "B.E. Biomedical Engineering (Hons.)",
      org: "Bannari Amman Institute of Technology",
      period: "2022 – 2026",
      meta: "CGPA 8.2",
    },
    {
      degree: "Higher & Secondary Education",
      org: "Nirmala Matriculation Higher Secondary School",
      period: "2019 – 2022",
      meta: "HSC 83.3% · SSLC 96.4%",
    },
  ],

  languages: [
    { name: "English", level: "Professional working proficiency" },
    { name: "Tamil", level: "Native proficiency" },
  ],

  skills: [
    {
      title: "Embedded Firmware & Systems",
      items: ["Embedded C", "Python", "Linux", "FreeRTOS", "STM32 (ARM Cortex-M)", "ESP32 / ESP32-S3", "Interrupts & Registers", "Debugging", "Test & QA"],
    },
    {
      title: "Communication Protocols",
      items: ["UART", "SPI", "I2C", "BLE", "Wi-Fi", "TCP/IP", "MQTT", "CAN", "LoRaWAN"],
    },
    {
      title: "Embedded Hardware",
      items: ["Hardware Integration", "PCB Bring-up & Debugging", "Schematic Capture (Altium)", "Signal Validation (LTspice)"],
    },
    {
      title: "Tools",
      items: ["STM32CubeIDE", "STM32CubeMX", "Git", "VS Code", "LTspice", "Altium Designer", "Oscilloscope", "Logic Analyzer"],
    },
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
    {
      title: "Winner — MSME Idea Hackathon 5.0",
      org: "Government of India · 2026",
      desc: "Recognized and awarded ₹6 Lakhs for the project “Predictive Machine Health and Control Hub.”",
    },
    {
      title: "TN Skills Level 2 Competition",
      org: "Naan Mudhalvan TNSDC · 2024",
      desc: "Health and Social Care category.",
    },
    {
      title: "Finalist — BITHack 23",
      org: "2023",
      desc: "Hardware edition, for the Home Automation System project.",
    },
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

/* =========================================================
   RENDERERS
   ========================================================= */
function heroWaveSVG() {
  return `
  <svg viewBox="0 0 720 110" preserveAspectRatio="none">
    <line class="grid-line" x1="0" y1="55" x2="720" y2="55"></line>
    <path class="trace" d="M0,55 L160,55 L178,55 L190,10 L204,100 L216,30 L228,55 L260,55 L620,55 L636,40 L650,70 L664,55 L720,55" />
    <circle class="dot" cx="190" cy="10" r="4"></circle>
  </svg>`;
}

function renderHome() {
  return `
  <section class="view hero">
    <div class="eyebrow">Signal locked — welcome</div>
    <h1>Building the hardware<br>that <span class="accent">reads the body.</span></h1>
    <p class="lede">${DATA.summary}</p>
    <div class="hero-wave">${heroWaveSVG()}</div>
    <div class="hero-actions">
      <a class="btn btn-primary" href="#projects">View Projects</a>
      <a class="btn" href="#resume">Resume</a>
      <a class="btn" href="#contact">Get in Touch</a>
    </div>
    <div class="readout-row">
      ${DATA.stats.map(s => `
        <div class="readout">
          <div class="val">${s.val}</div>
          <div class="lbl">${s.lbl}</div>
        </div>`).join("")}
    </div>
  </section>`;
}

function renderAbout() {
  return `
  <section class="view">
    <div class="section-head">
      <div class="eyebrow">About</div>
      <h2>Grounded in hardware, driven by biomedical signal work.</h2>
    </div>
    <div class="about-grid">
      <div class="about-text">
        <p>I'm a final-year <strong>Biomedical Engineering</strong> student at Bannari Amman Institute of Technology, currently working as an <strong>Embedded Hardware Intern at Qneuro India Pvt. Ltd.</strong> in Chennai, where I build ARM Cortex-M firmware for real-time EEG signal acquisition.</p>
        <p>My work sits at the intersection of <strong>hardware and signal integrity</strong> — peripheral driver development, PCB bring-up, and wireless connectivity (BLE, Wi-Fi, TCP/IP) across STM32, ESP32, and Raspberry Pi platforms, almost always in service of getting a clean physiological signal off a sensor and onto a screen.</p>
        <p>I'm currently targeting <strong>firmware and embedded systems engineering roles</strong> in healthcare or IoT product companies, where that combination of low-level hardware fluency and biomedical context can do the most good.</p>
        <div class="lang-row">
          ${DATA.languages.map(l => `<div class="lang-chip"><b>${l.name}</b>${l.level}</div>`).join("")}
        </div>
      </div>
      <div class="edu-list">
        ${DATA.education.map(e => `
          <div class="edu-card">
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
    <div class="section-head">
      <div class="eyebrow">Skills</div>
      <h2>The stack, from silicon to signal.</h2>
      <p class="sub">Firmware, protocols, hardware bring-up, and the tools that hold it together.</p>
    </div>
    <div class="skill-grid">
      ${DATA.skills.map(cat => `
        <div class="skill-card">
          <h3>${cat.title}</h3>
          <span class="count">${cat.items.length} tools & competencies</span>
          <div class="chip-wrap">
            ${cat.items.map(i => `<span class="chip">${i}</span>`).join("")}
          </div>
        </div>`).join("")}
    </div>
  </section>`;
}

function renderExperience() {
  return `
  <section class="view">
    <div class="section-head">
      <div class="eyebrow">Experience</div>
      <h2>Where the firmware meets the bench.</h2>
    </div>
    <div class="timeline">
      ${DATA.experience.map(e => `
        <div class="timeline-item">
          <div class="role">${e.role}</div>
          <div class="org-row"><span class="org">${e.org}</span><span class="period">${e.period}</span></div>
          <ul>${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        </div>`).join("")}
    </div>
  </section>`;
}

function renderProjects() {
  return `
  <section class="view">
    <div class="section-head">
      <div class="eyebrow">Projects</div>
      <h2>Five builds, one throughline: signal off the sensor, cleanly.</h2>
    </div>
    <div class="project-grid">
      ${projectOrder.map(key => {
        const p = DATA.projects[key];
        return `
        <a class="project-card" href="#projects/${key}">
          <span class="tag">${p.tag}</span>
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
          <span class="go">→ open project</span>
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
      <div class="tab-panel active" data-panel="hardware">
        <ul>${p.hardware.map(b => `<li>${b}</li>`).join("")}</ul>
      </div>
      <div class="tab-panel" data-panel="firmware">
        <ul>${p.firmware.map(b => `<li>${b}</li>`).join("")}</ul>
      </div>`;
  } else {
    bodyHTML = `<ul>${p.body.map(b => `<li>${b}</li>`).join("")}</ul>`;
  }

  return `
  <section class="view">
    <a class="back-link" href="#projects">← back to projects</a>
    <div class="project-detail-head">
      <div>
        <div class="eyebrow">${p.tag}</div>
        <h2>${p.title}</h2>
      </div>
    </div>
    <div class="project-tags">${tags}</div>
    <div class="project-body">
      <p>${p.summary}</p>
      ${bodyHTML}
      ${p.isPlaceholder ? `<div class="placeholder-note">// draft content — replace with your real build notes, sensor choices, and results for this project.</div>` : ""}
    </div>
  </section>`;
}

function renderAchievements() {
  return `
  <section class="view">
    <div class="section-head">
      <div class="eyebrow">Achievements</div>
      <h2>Recognition &amp; certifications.</h2>
    </div>
    <div class="ach-grid">
      <div>
        <h4 style="font-family:var(--font-mono); font-size:12px; text-transform:uppercase; letter-spacing:0.06em; color:var(--muted-2); margin-bottom:14px;">Awards</h4>
        <div class="ach-list">
          ${DATA.achievements.map(a => `
            <div class="ach-item">
              <h4>${a.title}</h4>
              <div class="org">${a.org}</div>
              <p>${a.desc}</p>
            </div>`).join("")}
        </div>
      </div>
      <div>
        <h4 style="font-family:var(--font-mono); font-size:12px; text-transform:uppercase; letter-spacing:0.06em; color:var(--muted-2); margin-bottom:14px;">Certificates</h4>
        <div class="cert-list">
          ${DATA.certificates.map(c => `
            <div class="cert-item">
              <span class="cname">${c.name}</span>
              <span class="cissuer">${c.issuer}</span>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function renderResume() {
  return `
  <section class="view">
    <div class="section-head">
      <div class="eyebrow">Resume</div>
      <h2>Full CV, one click away.</h2>
    </div>
    <div class="resume-panel">
      <div class="icon">PDF</div>
      <h3>Download the full resume</h3>
      <p>Add your exported resume as <code>assets/resume.pdf</code> in this repo — this button links straight to it once it's in place.</p>
      <a class="btn btn-primary" href="assets/resume.pdf" download>↓ Download Resume (PDF)</a>
      <div class="resume-summary">
        <h4>Quick Summary</h4>
        <p style="color:var(--muted); font-size:14px;">${DATA.summary}</p>
      </div>
    </div>
  </section>`;
}

function renderContact() {
  return `
  <section class="view">
    <div class="section-head">
      <div class="eyebrow">Contact</div>
      <h2>Let's talk hardware.</h2>
      <p class="sub">Open to firmware and embedded systems roles in healthcare and IoT. Reach out directly — no forms, no backend.</p>
    </div>
    <div class="contact-grid">
      <div class="contact-cards">
        <a class="contact-card" href="mailto:${DATA.email}">
          <div class="cicon">@</div>
          <div><div class="clabel">Email</div><div class="cvalue">${DATA.email}</div></div>
        </a>
        <a class="contact-card" href="tel:${DATA.phone.replace(/\s/g,'')}">
          <div class="cicon">TEL</div>
          <div><div class="clabel">Phone</div><div class="cvalue">${DATA.phone}</div></div>
        </a>
        <a class="contact-card" href="${DATA.linkedin}" target="_blank" rel="noopener">
          <div class="cicon">in</div>
          <div><div class="clabel">LinkedIn</div><div class="cvalue">linkedin.com/in/murali-g-g22</div></div>
        </a>
        <a class="contact-card" href="${DATA.github}" target="_blank" rel="noopener">
          <div class="cicon">GH</div>
          <div><div class="clabel">GitHub</div><div class="cvalue">github.com/muralig-22</div></div>
        </a>
      </div>
      <div class="terminal-block">
        <div class="tline"><span class="tprompt">&gt;</span> whoami</div>
        <div class="tline tval">murali_g — embedded systems engineer</div>
        <div class="tline" style="margin-top:14px;"><span class="tprompt">&gt;</span> status</div>
        <div class="tline tval">open to firmware / embedded roles</div>
        <div class="tline" style="margin-top:14px;"><span class="tprompt">&gt;</span> location</div>
        <div class="tline tval">chennai, tamil nadu, india</div>
      </div>
    </div>
  </section>`;
}

/* =========================================================
   ROUTER
   ========================================================= */
const routes = {
  home: renderHome,
  about: renderAbout,
  skills: renderSkills,
  experience: renderExperience,
  projects: renderProjects,
  achievements: renderAchievements,
  resume: renderResume,
  contact: renderContact,
};

const content = document.getElementById("content");

function footerHTML() {
  return `
  <footer class="site-footer">
    <span>© ${new Date().getFullYear()} Murali G — built with HTML, CSS &amp; JS, deployed on GitHub Pages.</span>
    <span>last flashed: ${new Date().toLocaleDateString('en-IN', { year:'numeric', month:'short', day:'numeric' })}</span>
  </footer>`;
}

function render() {
  const hash = (location.hash || "#home").replace("#", "");
  const parts = hash.split("/");
  let html;

  if (parts[0] === "projects" && parts[1]) {
    html = renderProjectDetail(parts[1]);
  } else if (routes[parts[0]]) {
    html = routes[parts[0]]();
  } else {
    html = renderHome();
  }

  content.innerHTML = html + footerHTML();
  updateActiveNav(hash);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  bindTabs();
  closeMobileNav();
}

function updateActiveNav(hash) {
  document.querySelectorAll("[data-route]").forEach(a => {
    a.classList.toggle("active", a.dataset.route === hash);
  });
}

function bindTabs() {
  const tabs = content.querySelectorAll(".tab-btn");
  tabs.forEach(btn => {
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
navToggle.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});
function closeMobileNav() {
  sidebar.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
