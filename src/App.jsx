import React, { useState } from 'react';
import Topbar from './components/Navbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import './styles/globals.scss';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Topbar onMenuClick={() => setSidebarOpen(p => !p)} />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main style={{ flex: 1, minWidth: 0 }}>
          <Dashboard />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
