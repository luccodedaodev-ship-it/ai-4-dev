import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Home } from '@/app/pages/Home';
import { Deposit } from '@/app/pages/Deposit';
import { Blog } from '@/app/pages/Blog';
import { Bills } from '@/app/pages/Bills';
import { Profile } from '@/app/pages/Profile';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
