import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { Dashboard } from '@/components/pages/Dashboard';
import { RewardsPage } from '@/components/pages/RewardsPage';

export default function App() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rewards" element={<RewardsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}