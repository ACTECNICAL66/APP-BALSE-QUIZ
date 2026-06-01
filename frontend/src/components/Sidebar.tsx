import React from 'react';
import { BookOpen, Trophy, ShoppingBag, Sparkles, User, PanelLeftClose, PanelLeft } from 'lucide-react';
import { soundEffects } from '../utils/sound';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isCollapsed, setIsCollapsed }) => {
  const navItems = [
    { id: 'learn', label: 'Aprender', icon: BookOpen, activeColor: 'text-[#58cc02] bg-emerald-500/15 border-[#58a700]/50' },
    { id: 'leaderboard', label: 'Ligas', icon: Trophy, activeColor: 'text-[#ffc800] bg-amber-500/15 border-[#cc9f00]/50' },
    { id: 'shop', label: 'Tienda', icon: ShoppingBag, activeColor: 'text-[#ff9600] bg-orange-500/15 border-orange-500/50' },
    { id: 'advisor', label: 'Consejero IA', icon: Sparkles, activeColor: 'text-[#ce82ff] bg-purple-500/15 border-[#a558db]/50' },
    { id: 'profile', label: 'Perfil', icon: User, activeColor: 'text-[#1cb0f6] bg-blue-500/15 border-[#1899d6]/50' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex flex-col bg-[#0f172a]/90 liquid-glass border-r border-slate-800/80 p-4 shrink-0 min-h-[calc(100vh-68px)] sticky top-[68px] transition-all duration-300 z-30 ${
        isCollapsed ? 'w-20 items-center' : 'w-64'
      }`}>
        
        {/* Toggle Collapse Button */}
        <div className={`w-full flex ${isCollapsed ? 'justify-center' : 'justify-end'} mb-2`}>
          <button
            onClick={() => {
              soundEffects.playClick();
              setIsCollapsed(!isCollapsed);
            }}
            className="p-2 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-400 hover:text-white transition-colors border border-slate-700 shadow-sm"
            title={isCollapsed ? 'Expandir panel' : 'Ocultar panel'}
          >
            {isCollapsed ? <PanelLeft className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
          </button>
        </div>

        <div className="space-y-2 mt-2 w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTab(item.id);
                }}
                className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3.5' : 'gap-4 px-4 py-3.5'} rounded-2xl font-black text-sm transition-all border ${
                  isActive
                    ? `${item.activeColor} shadow-lg shadow-emerald-500/10`
                    : 'text-slate-400 border-transparent hover:bg-slate-800/80 hover:text-slate-200'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className={`w-6 h-6 shrink-0 ${isActive ? '' : 'text-slate-400'}`} />
                {!isCollapsed && <span className="tracking-wide text-left truncate">{item.label}</span>}
              </button>
            );
          })}
        </div>

        {!isCollapsed && (
          <div className="mt-auto pt-6 border-t border-slate-800/80 w-full animate-in fade-in duration-200">
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/60 liquid-glass p-4 rounded-3xl border border-slate-700/80 text-center shadow-inner">
              <div className="text-2xl mb-1">🤖</div>
              <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">
                IPET 66 PWA
              </div>
              <p className="text-[11px] text-slate-300 leading-snug font-medium">
                Instala esta app en tu móvil para acceso directo y offline a tus talleres.
              </p>
            </div>
          </div>
        )}
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0f172a]/95 liquid-glass border-t border-slate-800/80 px-2 py-2 flex items-center justify-around shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                soundEffects.playClick();
                setActiveTab(item.id);
              }}
              className={`flex flex-col items-center justify-center p-2 rounded-2xl transition-all ${
                isActive ? 'text-[#58cc02] scale-110 font-black' : 'text-slate-400 hover:text-slate-200 font-bold'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-[10px]">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
