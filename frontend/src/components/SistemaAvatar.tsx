import React from 'react';
import { GraduationCap, Wrench, Cpu, Zap, Code, FlaskConical, Cog, Activity, CircuitBoard, Binary, User } from 'lucide-react';
import { APP_ASSETS } from '../data/recursosApp';

export interface AvatarOption {
  id: string;
  emoji: string;
  image: string;
  name: string;
  gradient: string;
  borderColor: string;
  description: string;
}

// Avatares temáticos del IPET 66 con paleta visual armónica
// Cada avatar tiene un emoji representativo, un nombre temático y un gradiente de color consistente
export const AVATAR_OPTIONS: AvatarOption[] = [
  {
    id: 'capi',
    emoji: '🔌',
    image: APP_ASSETS.characters.capi,
    name: 'Capi Capacitor',
    gradient: 'from-emerald-500 to-teal-400',
    borderColor: 'border-emerald-400/50',
    description: 'Guarda la energía para cuando más la necesitas'
  },
  {
    id: 'chip',
    emoji: '🧠',
    image: APP_ASSETS.characters.chip,
    name: 'Chip Procesador',
    gradient: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-400/50',
    description: 'El cerebro de las operaciones lógicas'
  },
  {
    id: 'diodi',
    emoji: '➡️',
    image: APP_ASSETS.characters.diodi,
    name: 'Diodi',
    gradient: 'from-orange-500 to-amber-500',
    borderColor: 'border-orange-400/50',
    description: 'Solo deja fluir la corriente en una dirección'
  },
  {
    id: 'fpga',
    emoji: '⚙️',
    image: APP_ASSETS.characters.fpga,
    name: 'FPGA',
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-400/50',
    description: 'Flexible y programable para cualquier tarea'
  },
  {
    id: 'mos',
    emoji: '⚡',
    image: APP_ASSETS.characters.mos,
    name: 'MOSFET',
    gradient: 'from-slate-500 to-zinc-600',
    borderColor: 'border-slate-400/50',
    description: 'Experto en conmutación rápida'
  },
  {
    id: 'resi',
    emoji: '🚧',
    image: APP_ASSETS.characters.resi,
    name: 'Resi Resistencia',
    gradient: 'from-rose-500 to-red-500',
    borderColor: 'border-rose-400/50',
    description: 'Mantiene todo bajo control limitando la corriente'
  },
  {
    id: 'smd',
    emoji: '🔬',
    image: APP_ASSETS.characters.smd,
    name: 'SMD',
    gradient: 'from-yellow-400 to-orange-500',
    borderColor: 'border-yellow-400/50',
    description: 'Pequeño pero fundamental en cualquier placa'
  },
  {
    id: 'transi',
    emoji: '🔄',
    image: APP_ASSETS.characters.transi,
    name: 'Transi Transistor',
    gradient: 'from-indigo-500 to-blue-600',
    borderColor: 'border-indigo-400/50',
    description: 'Amplifica tu potencial al máximo'
  },
  {
    id: 'led',
    emoji: '💡',
    image: APP_ASSETS.characters.led,
    name: 'Ledy LED',
    gradient: 'from-teal-400 to-emerald-500',
    borderColor: 'border-teal-400/50',
    description: 'Ilumina el camino con eficiencia'
  },
  {
    id: 'bobina',
    emoji: '🧲',
    image: APP_ASSETS.characters.bobina,
    name: 'Bobi Bobina',
    gradient: 'from-red-500 to-orange-600',
    borderColor: 'border-red-400/50',
    description: 'Genera campos magnéticos con gran energía'
  },
];

// Iconos de Lucide consistentes para usar en la app
export const THEME_ICONS = {
  student: GraduationCap,
  mechanic: Wrench,
  circuit: Cpu,
  electric: Zap,
  code: Code,
  science: FlaskConical,
  gear: Cog,
  signal: Activity,
  chip: CircuitBoard,
  binary: Binary,
  user: User,
};

interface AvatarBadgeProps {
  avatar: AvatarOption;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  selected?: boolean;
  onClick?: () => void;
  showRing?: boolean;
}

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({ 
  avatar, 
  size = 'md',
  selected = false,
  onClick,
  showRing = false
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-20 h-20 text-4xl',
    xl: 'w-28 h-28 text-6xl',
  };

  const Component = onClick ? 'button' : 'div';
  const props = onClick ? { onClick, type: 'button' as const } : {};

  return (
    <Component
      {...props}
      className={`relative ${sizeClasses[size]} rounded-2xl bg-gradient-to-tr ${avatar.gradient} flex items-center justify-center shadow-xl border-2 ${avatar.borderColor} transition-all duration-200 ${
        selected ? 'scale-110 ring-4 ring-emerald-400/50 shadow-2xl' : ''
      } ${showRing ? 'animate-pulse-glow' : ''} ${onClick ? 'hover:scale-105 active:scale-95 cursor-pointer' : ''}`}
    >
      <img src={avatar.image} alt={avatar.name} className="w-full h-full object-cover rounded-2xl" />
      {selected && (
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#58cc02] rounded-full border-2 border-slate-950 flex items-center justify-center shadow-lg">
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      )}
    </Component>
  );
};
