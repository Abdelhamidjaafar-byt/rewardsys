// import { useState } from 'react';
import { Home, Grid, Heart, BarChart2, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Grid, label: 'Rewards', href: '/rewards' },
  { icon: Heart, label: 'Order History', href: '/orders' },
  { icon: BarChart2, label: 'Statistics', href: '/stats' },
];

export function Sidebar() {
  const location = useLocation(); 

  return (
    <div className="h-screen w-64 bg-[#FFF5E1] p-6 flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          alt="Gunther"
          className="w-24 h-24 rounded-full object-cover border-4 border-[#2E8B57]"
        />
        <h2 className="mt-4 text-xl font-georgia font-bold text-[#6F4E37]">Gunther</h2>
        <p className="text-sm text-[#6F4E37]/60">Owner</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-lg text-[#6F4E37] hover:bg-[#2E8B57] hover:text-white transition-colors",
                  location.pathname === item.href
                    ? "bg-[#2E8B57] text-white"  
                    : "bg-transparent text-[#6F4E37]"  
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <img
          src="
https://1000logos.net/wp-content/uploads/2023/05/Central-Perk-Emblem.png          "
          alt="Central Perk"
          className="w-32 mx-auto mb-6"
        />
        <button
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#6F4E37] text-white hover:bg-[#5D4037] transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
