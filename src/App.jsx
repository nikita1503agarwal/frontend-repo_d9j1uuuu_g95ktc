function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b0f1a', color: '#e6f0ff' }}>
      <div style={{ padding: 24, borderRadius: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 10px 30px rgba(0,0,0,0.35)', maxWidth: 560, width: '92%' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Training & Nutrition Planner</h1>
        <p style={{ opacity: 0.9, marginBottom: 16 }}>If you can read this, the app is rendering correctly. Use the buttons below to verify API connectivity.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="/test" style={{ background: '#2563eb', color: 'white', padding: '10px 14px', borderRadius: 10, textDecoration: 'none', fontWeight: 600 }}>Backend Test</a>
          <button onClick={() => location.reload()} style={{ background: 'transparent', color: '#93c5fd', padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.18)', fontWeight: 600 }}>Reload</button>
        </div>
      </div>
    </div>
  )
}

export default App
