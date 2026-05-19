import React, { useState, useMemo } from 'react';
import { Trophy, Timer, Sparkles, Crown, Medal, Award, Flame } from 'lucide-react';
import { LEADERBOARD_USERS } from '../../data/curriculumData';
import { soundEffects } from '../../utils/sound';

interface LeaderboardViewProps {
  userXp: number;
  userName: string;
  userAvatar: string;
  currentYear: number;
  comboStreak?: number;
}

type FilterType = 'general' | number;

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({
  userXp,
  userName,
  userAvatar,
  currentYear,
  comboStreak = 0
}) => {
  const [filter, setFilter] = useState<FilterType>('general');

  // Merge user data and compute filtered ranking
  const rankedUsers = useMemo(() => {
    const merged = LEADERBOARD_USERS.map((u) => {
      if (u.isUser) {
        return { ...u, name: userName || 'Estudiante IPET', avatar: userAvatar || '🧑‍🎓', xp: userXp, year: currentYear };
      }
      return u;
    });

    const filtered = filter === 'general' 
      ? merged 
      : merged.filter(u => u.year === filter);

    return [...filtered].sort((a, b) => b.xp - a.xp);
  }, [userXp, userName, userAvatar, currentYear, filter]);

  const userRank = rankedUsers.findIndex((u) => u.isUser) + 1;
  const userIsInList = rankedUsers.some((u) => u.isUser);

  const top3 = rankedUsers.slice(0, 3);
  const rest = rankedUsers.slice(3);

  const yearTabs: { id: FilterType; label: string; icon: string }[] = [
    { id: 'general', label: 'General', icon: '🌍' },
    { id: 1, label: '1º Año', icon: '🟢' },
    { id: 2, label: '2º Año', icon: '🔵' },
    { id: 3, label: '3º Año', icon: '🟡' },
    { id: 4, label: '4º Año', icon: '🟠' },
    { id: 5, label: '5º Año', icon: '🔴' },
    { id: 6, label: '6º Año', icon: '🟣' },
    { id: 7, label: '7º Año', icon: '⚫' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 pb-24 md:pb-12 space-y-8 animate-in fade-in duration-200 font-sans">
      
      {/* League Banner */}
      <div className="liquid-glass-strong rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 border border-amber-500/30">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-tr from-amber-500/30 to-orange-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-48 h-48 bg-gradient-to-tr from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-2 text-center sm:text-left z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black uppercase tracking-widest shadow-lg">
            <Trophy className="w-4 h-4" />
            <span>Liga de Oro IPET 66</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-lg">
            {filter === 'general' ? 'Clasificación General' : `Liga de ${filter}º Año`}
          </h1>
          <p className="text-sm font-bold text-slate-300 max-w-md">
            {filter === 'general' 
              ? 'Los mejores técnicos del IPET 66 de todos los años compitiendo juntos.'
              : `Solo compites con tus compañeros de ${filter}º año. ¡Domina tu categoría!`}
          </p>
        </div>

        <div className="w-28 h-28 rounded-3xl liquid-glass-emerald flex items-center justify-center text-6xl shadow-2xl z-10 shrink-0 border border-amber-400/40 animate-pulse-glow">
          🏆
        </div>
      </div>

      {/* Timer & User Rank Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="liquid-glass rounded-2xl p-4 flex items-center gap-3 border border-white/10 shadow-xl">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
            <Timer className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tiempo Restante</div>
            <div className="text-lg font-black text-white">3d 14h</div>
          </div>
        </div>

        <div className="liquid-glass rounded-2xl p-4 flex items-center gap-3 border border-white/10 shadow-xl">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-black text-lg text-white shadow-lg">
            #{userIsInList ? userRank : '-'}
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tu Posición</div>
            <div className="text-lg font-black text-emerald-400">
              {userRank <= 3 ? '¡Podio!' : userRank <= 10 ? 'Top 10' : userIsInList ? 'Subiendo' : 'Juega!'}
            </div>
          </div>
        </div>

        <div className="liquid-glass rounded-2xl p-4 flex items-center gap-3 border border-white/10 shadow-xl">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
            <Flame className="w-6 h-6 text-white fill-white" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tu Combo</div>
            <div className="text-lg font-black text-orange-400">x{comboStreak}</div>
          </div>
        </div>
      </div>

      {/* Year Filter Tabs */}
      <div className="liquid-glass rounded-2xl p-2 border border-white/10 shadow-xl">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {yearTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundEffects.playClick();
                  setFilter(tab.id);
                }}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-black text-xs whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.id === currentYear && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Top 3 Podium (solo si hay 3+) */}
      {top3.length === 3 && (
        <div className="grid grid-cols-3 gap-3 sm:gap-4 items-end">
          {/* 2nd Place */}
          <PodiumCard user={top3[1]} position={2} />
          {/* 1st Place (más alto) */}
          <PodiumCard user={top3[0]} position={1} />
          {/* 3rd Place */}
          <PodiumCard user={top3[2]} position={3} />
        </div>
      )}

      {/* Leaderboard List */}
      <div className="liquid-glass-strong rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <div className="bg-slate-900/60 px-6 py-3 border-b border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-widest grid grid-cols-12 gap-4">
          <div className="col-span-2 text-center">Puesto</div>
          <div className="col-span-7">Estudiante</div>
          <div className="col-span-3 text-right">XP</div>
        </div>

        <div className="divide-y divide-white/5">
          {rest.length === 0 ? (
            <div className="px-6 py-12 text-center text-sm text-slate-400 font-bold">
              Aún no hay estudiantes compitiendo en esta categoría. ¡Sé el primero!
            </div>
          ) : (
            rest.map((user, index) => {
              const isCurrentUser = user.isUser;
              const displayRank = index + 4;

              return (
                <div
                  key={user.id}
                  onClick={() => soundEffects.playClick()}
                  className={`px-6 py-4 grid grid-cols-12 gap-4 items-center transition-all ${
                    isCurrentUser
                      ? 'bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {/* Rank Number */}
                  <div className="col-span-2 flex items-center justify-center">
                    <span className={`font-black text-lg ${
                      isCurrentUser ? 'text-emerald-400' : 'text-slate-500'
                    }`}>
                      #{displayRank}
                    </span>
                  </div>

                  {/* Avatar & Info */}
                  <div className="col-span-7 flex items-center gap-3 min-w-0">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-md ${
                      isCurrentUser 
                        ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 border border-emerald-300/50' 
                        : 'bg-slate-800 border border-slate-700'
                    }`}>
                      {user.avatar}
                    </div>
                    <div className="truncate">
                      <div className="font-black text-sm text-white flex items-center gap-1.5 truncate">
                        <span className="truncate">{user.name}</span>
                        {isCurrentUser && (
                          <span className="bg-emerald-500 text-slate-950 text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md shrink-0">
                            TÚ
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 font-bold">
                        {user.year}º Año
                      </div>
                    </div>
                  </div>

                  {/* XP */}
                  <div className="col-span-3 text-right">
                    <div className={`font-black text-sm flex items-center justify-end gap-1 ${
                      isCurrentUser ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      <span>{user.xp.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Info footer */}
      <div className="liquid-glass rounded-2xl p-4 text-center text-xs font-bold text-slate-300 flex items-center justify-center gap-2 border border-white/10 shadow-lg">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>Las ligas se reinician cada domingo a medianoche. ¡Enciende tu combo para multiplicar tu XP!</span>
      </div>

    </div>
  );
};

// Componente del Podio
interface PodiumCardProps {
  user: typeof LEADERBOARD_USERS[0];
  position: 1 | 2 | 3;
}

const PodiumCard: React.FC<PodiumCardProps> = ({ user, position }) => {
  const config = {
    1: {
      height: 'h-40 sm:h-48',
      gradient: 'from-amber-400 to-yellow-500',
      border: 'border-amber-300/50',
      icon: <Crown className="w-8 h-8 fill-white text-white" />,
      avatarSize: 'w-20 h-20 sm:w-24 sm:h-24 text-5xl',
      medal: '🥇'
    },
    2: {
      height: 'h-32 sm:h-40',
      gradient: 'from-slate-300 to-slate-400',
      border: 'border-slate-300/50',
      icon: <Medal className="w-7 h-7 fill-white text-white" />,
      avatarSize: 'w-16 h-16 sm:w-20 sm:h-20 text-4xl',
      medal: '🥈'
    },
    3: {
      height: 'h-28 sm:h-36',
      gradient: 'from-orange-600 to-amber-700',
      border: 'border-orange-500/50',
      icon: <Award className="w-7 h-7 fill-white text-white" />,
      avatarSize: 'w-16 h-16 sm:w-20 sm:h-20 text-4xl',
      medal: '🥉'
    }
  };

  const c = config[position];
  const isUser = user.isUser;

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Avatar with medal */}
      <div className="relative">
        <div className={`${c.avatarSize} rounded-3xl bg-gradient-to-tr ${c.gradient} flex items-center justify-center shadow-2xl border-2 ${c.border} ${
          position === 1 ? 'animate-pulse-glow' : ''
        } ${isUser ? 'ring-4 ring-emerald-400/50' : ''}`}>
          <span className="drop-shadow-lg">{user.avatar}</span>
        </div>
        <div className="absolute -top-2 -right-2 text-2xl sm:text-3xl drop-shadow-lg">
          {c.medal}
        </div>
        {isUser && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[9px] font-black uppercase px-2 py-0.5 rounded-full border-2 border-slate-950 whitespace-nowrap">
            TÚ
          </div>
        )}
      </div>

      {/* Name */}
      <div className="text-center truncate max-w-full mt-1">
        <div className="font-black text-xs sm:text-sm text-white truncate">
          {user.name}
        </div>
        <div className="text-[10px] text-slate-400 font-bold">
          {user.year}º Año
        </div>
      </div>

      {/* XP */}
      <div className="liquid-glass-emerald px-3 py-1 rounded-xl shadow-md border border-emerald-500/30">
        <div className="text-xs font-black text-emerald-400">
          {user.xp.toLocaleString()} XP
        </div>
      </div>

      {/* Podium block */}
      <div className={`w-full ${c.height} bg-gradient-to-t ${c.gradient} rounded-t-3xl shadow-xl flex items-start justify-center pt-4 border-t-4 ${c.border}`}>
        <div className="flex flex-col items-center gap-1">
          {c.icon}
          <span className="text-white font-black text-xs opacity-80">#{position}</span>
        </div>
      </div>
    </div>
  );
};
