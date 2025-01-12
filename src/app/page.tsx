'use client';

import React, { useState } from 'react';
import {
  Home,
  Users,
  Calendar,
  Settings,
  BarChart2,
  PanelLeft
} from 'lucide-react';
import Link from "next/link";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: '홈', url: "/" },
    { icon: Calendar, label: '지속일', url: "/duration" },
    { icon: BarChart2, label: '통계', url: "/chart" },
    { icon: Settings, label: '설정', url: "/settings" },
  ];

  return (
      <div className="flex h-screen bg-gray-50">
        <div className={`transition-all duration-300 relative flex flex-col h-full ${isCollapsed ? 'w-16' : 'w-64 bg-white shadow-lg'}`}>
          <div className={`flex items-center justify-between p-4 ${isCollapsed ? '' : 'border-b'}`}>
            {!isCollapsed && <h1 className="text-xl font-bold text-gray-800 truncate whitespace-nowrap">GitFight</h1>}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={`p-2 rounded-lg transition-colors ${isCollapsed ? 'hover:bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              <PanelLeft size={20} />
            </button>
          </div>

          <nav className="p-2 flex flex-col flex-1">
            <ul className="space-y-2 flex-1">
              {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                        href={item.url}
                        className="flex items-center p-3 rounded-lg transition-colors group relative"
                    >
                      <div className="w-6 flex justify-center">
                        <item.icon
                            size={20}
                            className={`flex-shrink-0 ${isCollapsed ? 'text-gray-600' : ''}`}
                        />
                      </div>
                      <div className={`
                    overflow-hidden transition-all duration-300 absolute left-12
                    ${isCollapsed ? 'w-0 opacity-0' : 'w-40 opacity-100'}
                  `}>
                        <span className="whitespace-nowrap">{item.label}</span>
                      </div>
                      {isCollapsed && (
                          <div className="fixed left-16 hidden group-hover:block">
                            <div className="bg-gray-800 text-white px-4 py-1 rounded-md text-sm ml-2">
                              {item.label}
                            </div>
                          </div>
                      )}
                    </Link>
                  </li>
              ))}
            </ul>

            {/* 구분선 */}
            <div className={`my-2 ${isCollapsed ? '' : 'border-t border-gray-200'}`} />

            {/* 사용자 링크 - 맨 아래 고정 */}
            <Link
                href="/users"
                className="flex items-center p-3 rounded-lg transition-colors group relative"
            >
              <div className="w-6 flex justify-center">
                <Users
                    size={20}
                    className={`flex-shrink-0 ${isCollapsed ? 'text-gray-600' : ''}`}
                />
              </div>
              <div className={`
              overflow-hidden transition-all duration-300 absolute left-12
              ${isCollapsed ? 'w-0 opacity-0' : 'w-40 opacity-100'}
            `}>
                <span className="whitespace-nowrap">사용자</span>
              </div>
              {isCollapsed && (
                  <div className="fixed left-16 hidden group-hover:block">
                    <div className="bg-gray-800 text-white px-4 py-1 rounded-md text-sm ml-2">
                      사용자
                    </div>
                  </div>
              )}
            </Link>
          </nav>
        </div>

        <div className="flex-1 overflow-auto">
          <main className="p-6">
            <div className="grid grid-cols-1 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">이름 {item}</h2>
                    <p className="text-gray-600">
                      순위
                    </p>
                  </div>
              ))}
            </div>
          </main>
        </div>
      </div>
  );
};

export default DashboardLayout;