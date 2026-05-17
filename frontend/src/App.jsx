import React, { useState, useEffect, useRef } from 'react';

// Simulated default console streams
const DEFAULT_LOGS = [
  { time: '05:01:12', type: 'system', text: 'BitDroid core engine initialized on Motorola G04.' },
  { time: '05:01:13', type: 'system', text: 'Local 1.58-bit Llama-3-3B model mapped to NDK buffer.' },
  { time: '05:01:15', type: 'scanner', text: 'Accessibility service active. Monitoring XML hierarchy.' },
  { time: '05:02:00', type: 'agent', text: 'Focus Sentinel: Auto-triaged 4 social notifications to Muted stream.' },
  { time: '05:04:10', type: 'privacy', text: 'Privacy Shield: Scanned dynamic screen. Obfuscated bank transition overlay.' }
];

const DEFAULT_REASONING = [
  { step: 1, name: 'Observe Screen State', status: 'done', desc: 'Acquired screenshot (1600x720) & parsed UI accessibility node tree.' },
  { step: 2, name: 'Evaluate Priorities', status: 'done', desc: 'Identified user was in WhatsApp chat. Extracted last 25 message nodes.' },
  { step: 3, name: 'Quantized Reason', status: 'active', desc: 'Formulating smart summarization schema using 1.58-bit C++ inference...' }
];

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Interactive Dashboard States
  const [engineActive, setEngineActive] = useState(true);
  const [workflows, setWorkflows] = useState([
    { id: 1, name: 'WhatsApp PDF Auto-Digest', active: true, desc: 'Auto-summarizes research docs sent in chats.' },
    { id: 2, name: 'Receipt OCR to Notion', active: true, desc: 'Captures purchase overlays and logs to Notion ledger.' },
    { id: 3, name: 'Instagram Doomscroll Block', active: false, desc: 'Locks app input after 15 mins of scroll duration.' },
  ]);

  // Console View States
  const [consoleLogs, setConsoleLogs] = useState(DEFAULT_LOGS);
  const [reasoningSteps, setReasoningSteps] = useState(DEFAULT_REASONING);
  const [inputValue, setInputValue] = useState('');
  const logEndRef = useRef(null);

  // Focus Sentinel Triage States
  const [sentinelFilter, setSentinelFilter] = useState('all');
  const [sentinelAlerts, setSentinelAlerts] = useState([
    { id: 1, app: 'Chase Bank', title: 'Security Verification Overlay', time: 'Just now', priority: 'critical', desc: 'Sensory alert: Blur shield activated to shield personal credentials.', category: 'financial' },
    { id: 2, app: 'WhatsApp', title: 'Companion Group AI Research', time: '5m ago', priority: 'medium', desc: '30 messages summarized: Team wants to deploy bitnet.cpp compiled with NDK. Click for summary.', category: 'work' },
    { id: 3, app: 'LinkedIn', title: 'Muted: 3 Connection requests', time: '1h ago', priority: 'low', desc: 'Auto-archived into Focus digest list to limit mid-work disruption.', category: 'social' },
  ]);

  // Privacy Shield States
  const [privacyToggles, setPrivacyToggles] = useState({
    blurBalances: true,
    maskLocationText: true,
    anonymizeMetadata: true,
  });

  // Smart Summarizer States
  const [summarizeText, setSummarizeText] = useState('');
  const [summarizedOutput, setSummarizedOutput] = useState('');
  const [isSummarizing, setIsSummarizing] = useState(false);

  // Auto-scroll logs
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [consoleLogs]);

  // Command submit simulation
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const timestamp = new Date().toTimeString().split(' ')[0];
    const userLog = { time: timestamp, type: 'user', text: inputValue };
    
    setConsoleLogs((prev) => [...prev, userLog]);
    setInputValue('');

    // Trigger simulated engine response
    setTimeout(() => {
      let responseText = "Executing manual query command...";
      if (inputValue.toLowerCase() === '/summarize') {
        responseText = "Initializing Smart Summarizer overlay. Select text region to process.";
        setActiveTab('summarizer');
      } else if (inputValue.toLowerCase() === '/blur') {
        responseText = "Privacy shield refresh: Screen elements obfuscated successfully.";
        setPrivacyToggles(prev => ({ ...prev, blurBalances: true }));
      } else if (inputValue.toLowerCase() === '/status') {
        responseText = "Diagnostics: Latency 2.4s, Engine Temp 34°C, Model Cache hit 98.4%.";
      }

      setConsoleLogs((prev) => [
        ...prev,
        { time: new Date().toTimeString().split(' ')[0], type: 'agent', text: responseText }
      ]);
    }, 800);
  };

  // Summarize function simulation
  const triggerSummarize = () => {
    if (!summarizeText.trim()) return;
    setIsSummarizing(true);
    setTimeout(() => {
      setSummarizedOutput(
        `• Core Topic: BitDroid Edge 1-bit LLM Deployment\n` +
        `• Crucial Point: quantizing to 1.58-bit keeps the model memory footprint under 400MB, allowing full local operation on Motorola G04 ARM hardware.\n` +
        `• Action Item: Configure JNI-compiled C++ loops to handle accessibility event triggers instantly without external API latency.`
      );
      setIsSummarizing(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      
      {/* 1. DESKTOP SIDEBAR */}
      <aside className="hidden md:flex flex-col w-64 bg-surface-container border-r border-outline-variant/20 p-stack-lg justify-between shrink-0">
        <div className="space-y-stack-lg">
          {/* Logo Brand */}
          <div className="flex items-center gap-stack-sm py-stack-sm">
            <span className="material-symbols-outlined text-primary text-3xl animate-pulse-slow">
              blur_on
            </span>
            <div>
              <h1 className="text-body-lg font-bold text-primary tracking-tight leading-none">AETHER</h1>
              <span className="text-[10px] text-outline font-telemetry-label uppercase tracking-widest">
                BitDroid v1.0
              </span>
            </div>
          </div>

          {/* Engine Status Gauge */}
          <div className="glass-panel p-stack-md rounded-lg space-y-stack-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs text-outline font-medium">Core AI Engine</span>
              <span className={`inline-flex items-center gap-1 text-[11px] font-bold ${engineActive ? 'text-green-400' : 'text-red-400'}`}>
                <span className={`w-2 h-2 rounded-full ${engineActive ? 'bg-green-400 breathe-ring' : 'bg-red-400'} inline-block`}></span>
                {engineActive ? 'ONLINE' : 'STOPPED'}
              </span>
            </div>
            <div className="text-[11px] font-telemetry-data text-on-surface-variant flex justify-between">
              <span>Latency: 2.4s</span>
              <span>Footprint: 396MB</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: 'grid_view' },
              { id: 'console', name: 'Agent Console', icon: 'terminal' },
              { id: 'sentinel', name: 'Focus Sentinel', icon: 'visibility' },
              { id: 'catalog', name: 'Capabilities', icon: 'widgets' },
              { id: 'architect', name: 'Level-Up Coach', icon: 'cycle' },
              { id: 'privacy', name: 'Privacy Shield', icon: 'shield_lock' },
              { id: 'summarizer', name: 'Smart Summarizer', icon: 'summarize' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-stack-md px-stack-md py-stack-sm rounded-lg text-body-sm transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-surface-container-high text-primary font-semibold border-l-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Device Metrics footer */}
        <div className="border-t border-outline-variant/10 pt-stack-md space-y-2">
          <div className="flex items-center gap-stack-sm text-[11px] font-telemetry-label text-outline uppercase tracking-wider">
            <span className="material-symbols-outlined text-xs">phone_android</span>
            <span>Motorola Moto G04</span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
            <div className="bg-primary h-full w-[48%]" title="4.2GB RAM Used"></div>
          </div>
          <div className="flex justify-between text-[10px] text-outline font-telemetry-data">
            <span>RAM: 3.8 / 8.0 GB</span>
            <span>Battery: 78%</span>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0">
        
        {/* Top Header Mobile */}
        <header className="md:hidden flex items-center justify-between px-stack-mobile py-stack-md bg-surface-container border-b border-outline-variant/25">
          <div className="flex items-center gap-stack-sm">
            <span className="material-symbols-outlined text-primary text-2xl animate-pulse-slow">
              blur_on
            </span>
            <span className="font-bold text-body-lg text-primary tracking-tight">AETHER</span>
          </div>
          <button 
            onClick={() => setEngineActive(!engineActive)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30 text-xs"
          >
            <span className={`w-2 h-2 rounded-full ${engineActive ? 'bg-green-400 breathe-ring' : 'bg-red-400'}`}></span>
            <span className="font-bold text-outline text-[10px] uppercase font-telemetry-label">
              {engineActive ? 'Active' : 'Paused'}
            </span>
          </button>
        </header>

        {/* Primary Scroll Content */}
        <main className="flex-1 overflow-y-auto p-stack-md md:p-stack-lg max-w-5xl w-full mx-auto space-y-stack-lg">
          
          {/* TAB CONTENT: 1. DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-stack-lg">
              
              {/* Telemetry Indicator Hero */}
              <div className="glass-panel p-stack-lg rounded-xl flex flex-col md:flex-row items-center justify-between gap-stack-lg border border-outline-variant/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
                <div className="space-y-stack-sm text-center md:text-left z-10">
                  <span className="text-[10px] text-outline font-telemetry-label uppercase tracking-widest">Core Diagnostic Engine</span>
                  <h2 className="text-headline-lg font-bold text-primary tracking-tight leading-tight">
                    Offline AI Automation Center
                  </h2>
                  <p className="text-on-surface-variant text-body-sm max-w-lg">
                    Quantized C++ planning models executing screen actions via isolated Android Accessibility Nodes. No cloud telemetry, complete data privacy.
                  </p>
                </div>

                {/* Animated Breathe Status Dial */}
                <div className="relative flex items-center justify-center shrink-0 w-32 h-32 md:w-36 md:h-36">
                  <div className="absolute inset-0 rounded-full border border-primary/10 breathe-ring-accent"></div>
                  <div className="absolute inset-2 rounded-full border border-primary/20 breathe-ring"></div>
                  <div className="w-24 h-24 rounded-full bg-surface-container-high flex flex-col items-center justify-center shadow-2xl border border-outline-variant/20 z-10">
                    <span className="text-[10px] text-outline font-telemetry-label">LATENCY</span>
                    <span className="text-2xl font-bold font-telemetry-data text-primary">2.4s</span>
                    <span className="text-[9px] text-green-400 font-telemetry-data">FAST STEP</span>
                  </div>
                </div>
              </div>

              {/* Bento Grid Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
                
                {/* Connected Device */}
                <div className="glass-panel p-stack-md rounded-lg flex gap-stack-md items-center border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-3xl bg-surface-container-high p-3 rounded-lg">
                    phone_android
                  </span>
                  <div>
                    <h3 className="font-semibold text-body-lg text-primary leading-tight">Moto G04</h3>
                    <p className="text-xs text-outline">Target Node: Android 14 Core</p>
                    <span className="text-[10px] text-green-400 font-telemetry-data bg-green-400/10 px-2 py-0.5 rounded mt-1 inline-block">
                      CONNECTED OVER ADB
                    </span>
                  </div>
                </div>

                {/* Memory Footprint */}
                <div className="glass-panel p-stack-md rounded-lg flex gap-stack-md items-center border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-3xl bg-surface-container-high p-3 rounded-lg">
                    memory
                  </span>
                  <div>
                    <h3 className="font-semibold text-body-lg text-primary leading-tight">396.4 MB</h3>
                    <p className="text-xs text-outline">1.58-Bit Quantized RAM</p>
                    <span className="text-[10px] text-primary/75 font-telemetry-data bg-primary/10 px-2 py-0.5 rounded mt-1 inline-block">
                      SYSTEM CAP: 8.0 GB
                    </span>
                  </div>
                </div>

                {/* Automation Efficiency */}
                <div className="glass-panel p-stack-md rounded-lg flex gap-stack-md items-center border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-3xl bg-surface-container-high p-3 rounded-lg">
                    bolt
                  </span>
                  <div>
                    <h3 className="font-semibold text-body-lg text-primary leading-tight">0.8% / Hour</h3>
                    <p className="text-xs text-outline">Low Energy Idle Draw</p>
                    <span className="text-[10px] text-yellow-400 font-telemetry-data bg-yellow-400/10 px-2 py-0.5 rounded mt-1 inline-block">
                      EVENT-DRIVEN WAKES
                    </span>
                  </div>
                </div>

              </div>

              {/* Workflows Column */}
              <div className="glass-panel p-stack-lg rounded-xl space-y-stack-md border border-outline-variant/10">
                <div className="flex items-center justify-between border-b border-outline-variant/10 pb-stack-sm">
                  <div>
                    <span className="text-[10px] text-outline font-telemetry-label uppercase tracking-widest">Active Automation Sentinel</span>
                    <h3 className="font-bold text-body-lg text-primary">Connected System Workflows</h3>
                  </div>
                  <span className="text-xs text-primary underline cursor-pointer hover:text-secondary">View manifest</span>
                </div>

                <div className="space-y-stack-sm">
                  {workflows.map((flow) => (
                    <div key={flow.id} className="flex items-center justify-between p-stack-md rounded-lg bg-surface-container border border-outline-variant/10 transition-all duration-200 hover:border-outline/35">
                      <div className="space-y-0.5">
                        <h4 className="font-semibold text-body-sm text-primary">{flow.name}</h4>
                        <p className="text-xs text-outline">{flow.desc}</p>
                      </div>
                      
                      <button 
                        onClick={() => {
                          setWorkflows(prev => prev.map(f => f.id === flow.id ? { ...f, active: !f.active } : f));
                        }}
                        className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
                          flow.active 
                            ? 'bg-primary text-surface font-semibold border-primary' 
                            : 'bg-transparent text-outline border-outline-variant/35'
                        }`}
                      >
                        {flow.active ? 'ACTIVE' : 'PAUSED'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB CONTENT: 2. AGENT CONSOLE */}
          {activeTab === 'console' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
              
              {/* Left Column: Live Terminal logs */}
              <div className="lg:col-span-2 flex flex-col h-[520px] bg-surface-container rounded-xl border border-outline-variant/15 overflow-hidden">
                <div className="flex items-center justify-between px-stack-md py-stack-sm bg-surface-container-high border-b border-outline-variant/15">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="font-telemetry-label text-xs font-bold text-primary">LIVE INFERENCE STREAM</span>
                  </div>
                  <button 
                    onClick={() => setConsoleLogs(DEFAULT_LOGS)}
                    className="text-xs text-outline font-telemetry-data hover:text-primary"
                  >
                    Clear Terminal
                  </button>
                </div>

                {/* Console Logs viewport */}
                <div className="flex-1 overflow-y-auto p-stack-md space-y-stack-sm font-telemetry-data text-[12px] bg-surface-dim">
                  {consoleLogs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-stack-sm leading-relaxed">
                      <span className="text-outline shrink-0">[{log.time}]</span>
                      
                      {log.type === 'system' && (
                        <span className="text-on-surface-variant"><span className="text-outline-variant font-bold">[SYS]</span> {log.text}</span>
                      )}
                      {log.type === 'scanner' && (
                        <span className="text-yellow-200"><span className="text-yellow-400/70 font-bold">[SCAN]</span> {log.text}</span>
                      )}
                      {log.type === 'agent' && (
                        <span className="text-green-300"><span className="text-green-400/75 font-bold">[CORE]</span> {log.text}</span>
                      )}
                      {log.type === 'privacy' && (
                        <span className="text-red-300"><span className="text-red-400/75 font-bold">[SHIELD]</span> {log.text}</span>
                      )}
                      {log.type === 'user' && (
                        <span className="text-primary font-medium"><span className="text-outline font-bold">User&gt;</span> {log.text}</span>
                      )}
                    </div>
                  ))}
                  <div ref={logEndRef}></div>
                </div>

                {/* Input Area */}
                <form onSubmit={handleCommandSubmit} className="flex border-t border-outline-variant/15 bg-surface-container-high">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter command... Try /summarize, /blur, or /status"
                    className="flex-1 bg-transparent border-0 px-stack-md py-stack-md text-sm focus:ring-0 text-on-surface font-telemetry-data placeholder:text-outline/50"
                  />
                  <button 
                    type="submit"
                    className="px-stack-lg border-l border-outline-variant/15 text-primary hover:bg-surface-bright/20 flex items-center justify-center shrink-0"
                  >
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              </div>

              {/* Right Column: Quantized reasoning steps */}
              <div className="glass-panel p-stack-lg rounded-xl border border-outline-variant/10 space-y-stack-md h-fit">
                <div className="border-b border-outline-variant/10 pb-stack-sm">
                  <span className="text-[10px] text-outline font-telemetry-label uppercase tracking-widest">Reasoning Chain Diagnostics</span>
                  <h3 className="font-bold text-body-lg text-primary">Step-By-Step Reasoner</h3>
                </div>

                <div className="space-y-stack-md">
                  {reasoningSteps.map((step) => (
                    <div key={step.step} className="flex gap-stack-md relative">
                      {/* Step index circle */}
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold font-telemetry-data border z-10 ${
                          step.status === 'done' 
                            ? 'bg-primary text-surface border-primary' 
                            : 'bg-surface-container-high text-on-surface border-outline-variant/40 animate-pulse'
                        }`}>
                          {step.step}
                        </div>
                        {step.step < reasoningSteps.length && (
                          <div className="w-0.5 flex-1 bg-outline-variant/20 -my-1"></div>
                        )}
                      </div>

                      {/* Step Context */}
                      <div className="space-y-1 pb-2">
                        <h4 className={`text-body-sm font-semibold leading-tight ${step.status === 'active' ? 'text-primary' : 'text-on-surface-variant'}`}>
                          {step.name}
                        </h4>
                        <p className="text-xs text-outline font-telemetry-data leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB CONTENT: 3. FOCUS SENTINEL */}
          {activeTab === 'sentinel' && (
            <div className="space-y-stack-lg">
              
              {/* AI Digest Header */}
              <div className="glass-panel p-stack-lg rounded-xl border border-outline-variant/10 relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-stack-md">
                <div className="space-y-1">
                  <span className="text-[10px] text-outline font-telemetry-label uppercase tracking-widest">High-Priority Alert Summary</span>
                  <h2 className="text-headline-md font-bold text-primary">Triage Digest Sentinel</h2>
                  <p className="text-xs text-outline max-w-md">Focus sentinel intercepts notifications and screen context to cluster and anonymize distraction streams.</p>
                </div>

                {/* Filter Scroll Pills */}
                <div className="flex gap-2 shrink-0">
                  {['all', 'financial', 'work', 'social'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSentinelFilter(cat)}
                      className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider font-telemetry-label border transition-all duration-200 ${
                        sentinelFilter === cat
                          ? 'bg-primary text-surface border-primary font-bold'
                          : 'bg-transparent text-outline border-outline-variant/20 hover:border-outline/40'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Triage Alarm Feed */}
              <div className="space-y-stack-sm">
                {sentinelAlerts
                  .filter((alert) => sentinelFilter === 'all' || alert.category === sentinelFilter)
                  .map((alert) => (
                    <div 
                      key={alert.id} 
                      className={`glass-panel p-stack-md rounded-xl border relative transition-all duration-300 hover:-translate-y-0.5 ${
                        alert.priority === 'critical' 
                          ? 'border-red-400/25 bg-red-400/[0.01]' 
                          : alert.priority === 'medium'
                          ? 'border-yellow-400/25 bg-yellow-400/[0.01]'
                          : 'border-outline-variant/10'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-stack-md">
                        <div className="space-y-1.5">
                          {/* Top Badges */}
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-primary">{alert.app}</span>
                            <span className="text-[9px] font-telemetry-data text-outline">• {alert.time}</span>
                            <span className={`text-[9px] font-bold font-telemetry-label px-2 py-0.5 rounded tracking-wide uppercase ${
                              alert.priority === 'critical' 
                                ? 'bg-red-400/10 text-red-400' 
                                : alert.priority === 'medium'
                                ? 'bg-yellow-400/10 text-yellow-400'
                                : 'bg-primary/10 text-outline'
                            }`}>
                              {alert.priority}
                            </span>
                          </div>

                          <h4 className="text-body-sm font-semibold text-primary">{alert.title}</h4>
                          <p className="text-xs text-on-surface-variant font-telemetry-data">{alert.desc}</p>
                        </div>

                        {/* Interactive triage actions */}
                        <div className="flex gap-2">
                          <button className="p-1 rounded bg-surface-container-high border border-outline-variant/20 hover:border-primary text-primary">
                            <span className="material-symbols-outlined text-sm">check</span>
                          </button>
                          <button className="p-1 rounded bg-surface-container-high border border-outline-variant/20 hover:border-primary text-outline hover:text-red-400">
                            <span className="material-symbols-outlined text-sm">archive</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          )}

          {/* TAB CONTENT: 4. CAPABILITIES CATALOG */}
          {activeTab === 'catalog' && (
            <div className="space-y-stack-lg">
              
              <div className="border-b border-outline-variant/10 pb-stack-sm">
                <span className="text-[10px] text-outline font-telemetry-label uppercase tracking-widest">Explore System Architecture</span>
                <h2 className="text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tight">Capabilities Manifest</h2>
              </div>

              {/* Grid of Capability Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
                
                {[
                  { name: 'Smart Summarizer', desc: 'Analyzes long PDFs, chat histories, and notes to yield context-aware action items instantly on-device.', active: true, icon: 'summarize' },
                  { name: 'Semantic Search', desc: 'Allows natural queries across personal photos, files, and location history with vector-indexed database.', active: true, icon: 'manage_search' },
                  { name: 'Task Extractor', desc: 'Auto-detects calendar events, schedules, and promises from chat streams and app overlays to export to GCal.', active: true, icon: 'calendar_today' },
                  { name: 'Budget Bodyguard', desc: 'Watches banking and purchase screens, obfuscates metadata, and tracks monthly ledger thresholds dynamically.', active: false, icon: 'payments' },
                  { name: 'Focus Sentinel', desc: 'Intercepts push feeds, clusters companion text updates, and blocks high-dopamine triggers during focus periods.', active: true, icon: 'visibility' },
                  { name: 'Macro Builder', desc: 'Allows users to record mobile accessibility node sequences to construct self-executing automation workflows.', active: false, icon: 'flowsheet' },
                ].map((cap, idx) => (
                  <div key={idx} className="glass-panel p-stack-lg rounded-xl flex flex-col justify-between border border-outline-variant/10 hover:border-outline/40 transition-all duration-300">
                    <div className="space-y-stack-sm">
                      <div className="flex justify-between items-start">
                        <span className="material-symbols-outlined text-3xl text-primary bg-surface-container-high p-3 rounded-lg">
                          {cap.icon}
                        </span>
                        <span className={`text-[10px] font-bold font-telemetry-label px-2 py-0.5 rounded tracking-wide uppercase ${
                          cap.active ? 'bg-green-400/10 text-green-400' : 'bg-outline-variant/20 text-outline'
                        }`}>
                          {cap.active ? 'Active' : 'Deploying'}
                        </span>
                      </div>
                      <h3 className="font-semibold text-body-lg text-primary">{cap.name}</h3>
                      <p className="text-xs text-outline font-telemetry-data leading-relaxed">{cap.desc}</p>
                    </div>

                    <div className="border-t border-outline-variant/10 pt-stack-md mt-stack-md flex gap-2 justify-between">
                      <button className="text-xs text-outline hover:text-primary">Configure Settings</button>
                      <button className="text-xs font-semibold text-primary underline">Open Shell</button>
                    </div>
                  </div>
                ))}

              </div>

            </div>
          )}

          {/* TAB CONTENT: 5. LEVEL-UP ARCHITECT */}
          {activeTab === 'architect' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
              
              {/* Left 2 Cols: Manifest and sprint telemetry */}
              <div className="lg:col-span-2 space-y-stack-lg">
                
                {/* Friction Diagnosis Panel */}
                <div className="glass-panel p-stack-lg rounded-xl border border-outline-variant/10 space-y-stack-md">
                  <div className="space-y-1">
                    <span className="text-[10px] text-outline font-telemetry-label uppercase tracking-widest">Cognitive Sprint Diagnostics</span>
                    <h3 className="font-bold text-body-lg text-primary">Day 12/30 Focus Manifest</h3>
                  </div>

                  {/* Connected Integrations Status */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-md pt-2">
                    <div className="p-stack-md bg-surface-container border border-outline-variant/10 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">database</span>
                        <span className="text-body-sm font-semibold text-primary">Notion Ledger</span>
                      </div>
                      <span className="text-[10px] text-green-400 font-telemetry-data">SYNCED: 5m ago</span>
                    </div>

                    <div className="p-stack-md bg-surface-container border border-outline-variant/10 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
                        <span className="text-body-sm font-semibold text-primary">Google Calendar</span>
                      </div>
                      <span className="text-[10px] text-green-400 font-telemetry-data">SYNCED: Live</span>
                    </div>
                  </div>

                  <p className="text-xs text-outline font-telemetry-data leading-relaxed pt-2">
                    Active Friction Control: The system is blocking accessibility inputs on Instagram and YouTube Shorts during scheduled deep-work hours. 4 automatic blocks triggered today.
                  </p>
                </div>

                {/* Sprints Timeline */}
                <div className="glass-panel p-stack-lg rounded-xl border border-outline-variant/10 space-y-stack-md">
                  <h3 className="font-bold text-body-lg text-primary">Recent Cognitive Activity log</h3>
                  <div className="space-y-stack-sm">
                    {[
                      { time: '04:12:00', title: 'Work Session: Research NDK compilation options', action: 'Auto-blocked Reddit app overlay.' },
                      { time: '03:30:15', title: 'Smart Summarized WhatsApp paper group chats', action: 'Exported 3 actions items directly to Notion.' },
                      { time: '01:00:22', title: 'Triage Mode: Focus Sentinel Activated', action: 'Auto-archived 12 social alerts.' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-stack-md rounded bg-surface-container/60 border border-outline-variant/10 flex items-center justify-between text-xs">
                        <div className="space-y-0.5">
                          <h4 className="font-semibold text-primary font-telemetry-data">{item.title}</h4>
                          <p className="text-[11px] text-outline">{item.action}</p>
                        </div>
                        <span className="text-[10px] text-outline font-telemetry-data">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Col: circular progress gauge */}
              <div className="glass-panel p-stack-lg rounded-xl border border-outline-variant/10 flex flex-col items-center justify-between text-center gap-stack-lg h-fit">
                <div className="w-full border-b border-outline-variant/10 pb-stack-sm">
                  <h3 className="font-bold text-body-lg text-primary">Sprint Performance</h3>
                </div>

                {/* Ring Progress SVG */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="transparent" />
                    <circle cx="80" cy="80" r="70" stroke="#ffffff" strokeWidth="8" strokeDasharray={2 * Math.PI * 70} strokeDashoffset={2 * Math.PI * 70 * (1 - 0.72)} fill="transparent" strokeLinecap="round" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-3xl font-bold font-telemetry-data text-primary">72%</span>
                    <span className="text-[9px] text-outline font-telemetry-label tracking-widest uppercase">Focus Score</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <p className="font-semibold text-primary">Weekly Target: 80%</p>
                  <p className="text-[11px] text-outline leading-tight">Focus levels calculated based on target overlay blocks and screen efficiency indices.</p>
                </div>
              </div>

            </div>
          )}

          {/* TAB CONTENT: 6. PRIVACY SHIELD */}
          {activeTab === 'privacy' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
              
              {/* Left 2 Cols: obfusated layout preview */}
              <div className="lg:col-span-2 space-y-stack-lg">
                
                <div className="glass-panel p-stack-lg rounded-xl border border-outline-variant/10 space-y-stack-md">
                  <div className="space-y-1">
                    <span className="text-[10px] text-outline font-telemetry-label uppercase tracking-widest">Local Shield Sandbox</span>
                    <h3 className="font-bold text-body-lg text-primary">Dynamic Balance Obfuscation</h3>
                  </div>

                  <p className="text-xs text-outline font-telemetry-data leading-relaxed">
                    Below is a dynamic simulation of how the Privacy Shield blurs sensitive text, banking logs, and credentials locally in your screen buffer before passing overlays to the planner layer.
                  </p>

                  {/* Obfuscated Card component */}
                  <div className="p-stack-lg bg-surface-container rounded-xl border border-outline-variant/15 space-y-stack-md max-w-md mx-auto relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 text-[10px] font-bold font-telemetry-label bg-primary/10 text-primary rounded-bl">
                      SHIELD ENFORCED
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-outline font-telemetry-label">CHASE SIGNATURE DEBIT</span>
                      <h4 className="text-body-sm font-semibold text-primary">Muhammed Naif</h4>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-xs font-telemetry-data text-outline">Card Number:</span>
                      <span className={`text-sm font-semibold font-telemetry-data tracking-widest ${privacyToggles.blurBalances ? 'blur-sm select-none' : ''}`}>
                        •••• •••• •••• 9812
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xs font-telemetry-data text-outline">Available Balance:</span>
                      <span className={`text-lg font-bold font-telemetry-data text-primary ${privacyToggles.blurBalances ? 'blur-sm select-none' : ''}`}>
                        $14,892.42
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Col: privacy toggle actions */}
              <div className="glass-panel p-stack-lg rounded-xl border border-outline-variant/10 space-y-stack-md h-fit">
                <div className="border-b border-outline-variant/10 pb-stack-sm">
                  <h3 className="font-bold text-body-lg text-primary">Blur Shield Toggles</h3>
                </div>

                <div className="space-y-stack-md">
                  {[
                    { id: 'blurBalances', name: 'Blur Financial Elements', desc: 'Blurs transaction history, card digits, and balances.' },
                    { id: 'maskLocationText', name: 'Mask Text Geolocation', desc: 'Automatically replaces maps and street address nodes with generic regions.' },
                    { id: 'anonymizeMetadata', name: 'Anonymize Metadata Tags', desc: 'Wipes EXIF GPS coordinates from gallery photo imports.' }
                  ].map((toggle) => (
                    <div key={toggle.id} className="flex items-start justify-between gap-stack-md p-stack-sm rounded hover:bg-surface-container-high/40 transition-all">
                      <div className="space-y-0.5">
                        <h4 className="text-body-sm font-semibold text-primary leading-none">{toggle.name}</h4>
                        <p className="text-[11px] text-outline font-telemetry-data leading-tight">{toggle.desc}</p>
                      </div>

                      {/* Custom Toggle Switch */}
                      <button
                        onClick={() => setPrivacyToggles(prev => ({ ...prev, [toggle.id]: !prev[toggle.id] }))}
                        className={`w-10 h-5 rounded-full p-0.5 transition-colors shrink-0 ${
                          privacyToggles[toggle.id] ? 'bg-primary' : 'bg-surface-bright'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-surface rounded-full transition-transform ${
                          privacyToggles[toggle.id] ? 'translate-x-5' : 'translate-x-0'
                        }`}></div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB CONTENT: 7. SMART SUMMARIZER */}
          {activeTab === 'summarizer' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
              
              {/* Left Input Field */}
              <div className="lg:col-span-2 space-y-stack-md">
                <div className="glass-panel p-stack-lg rounded-xl border border-outline-variant/10 space-y-stack-md">
                  <div className="space-y-1">
                    <span className="text-[10px] text-outline font-telemetry-label uppercase tracking-widest">Offline Context Analyzer</span>
                    <h3 className="font-bold text-body-lg text-primary">Context Summary Input</h3>
                  </div>

                  <textarea
                    rows={6}
                    value={summarizeText}
                    onChange={(e) => setSummarizeText(e.target.value)}
                    placeholder="Paste full research articles, long PDF texts, or accessibility message transcripts here..."
                    className="w-full glass-input rounded-lg p-stack-md text-sm font-telemetry-data"
                  ></textarea>

                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-outline font-telemetry-data">
                      Size: {summarizeText.length} characters
                    </span>
                    <button
                      onClick={triggerSummarize}
                      disabled={isSummarizing || !summarizeText.trim()}
                      className="px-stack-lg py-stack-sm rounded-lg bg-primary text-surface font-semibold text-xs border border-primary hover:bg-transparent hover:text-primary transition-all disabled:opacity-50"
                    >
                      {isSummarizing ? 'COMPILING INFERENCE...' : 'GENERATE AI SUMMARY'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Output Field */}
              <div className="glass-panel p-stack-lg rounded-xl border border-outline-variant/10 space-y-stack-md h-fit">
                <div className="border-b border-outline-variant/10 pb-stack-sm">
                  <h3 className="font-bold text-body-lg text-primary">Actionable AI Digest</h3>
                </div>

                {summarizedOutput ? (
                  <div className="space-y-stack-md animate-fade-in">
                    <div className="p-stack-md bg-surface-container rounded border border-outline-variant/10 font-telemetry-data text-[12px] leading-relaxed text-on-surface whitespace-pre-line">
                      {summarizedOutput}
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => navigator.clipboard.writeText(summarizedOutput)}
                        className="flex-1 py-1 rounded bg-surface-container border border-outline-variant/20 hover:border-primary text-[10px] font-bold font-telemetry-label tracking-wide uppercase"
                      >
                        Copy Output
                      </button>
                      <button className="flex-1 py-1 rounded bg-surface-container border border-outline-variant/20 hover:border-primary text-[10px] font-bold font-telemetry-label tracking-wide uppercase">
                        Save to Notion
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-stack-lg text-center text-xs text-outline font-telemetry-data">
                    Waiting for text compilation stream...
                  </div>
                )}
              </div>

            </div>
          )}

        </main>

        {/* 3. MOBILE BOTTOM NAVIGATION BAR */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container border-t border-outline-variant/25 px-2 py-1.5 flex justify-around items-center z-50 shadow-lg">
          {[
            { id: 'dashboard', name: 'Dash', icon: 'grid_view' },
            { id: 'console', name: 'Console', icon: 'terminal' },
            { id: 'sentinel', name: 'Sentinel', icon: 'visibility' },
            { id: 'catalog', name: 'Catalog', icon: 'widgets' },
            { id: 'privacy', name: 'Shield', icon: 'shield_lock' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-all duration-200 ${
                activeTab === item.id 
                  ? 'text-primary font-bold bg-surface-container-high' 
                  : 'text-on-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              <span className="text-[9px] font-medium tracking-tight font-body-sm leading-none">{item.name}</span>
            </button>
          ))}
        </nav>

      </div>
    </div>
  );
}
