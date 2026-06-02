import React from 'react';
import { Gem, Check, ShoppingBag, Sparkles, Crown, Heart, Shield, CircleUserRound } from 'lucide-react';
import { SHOP_ITEMS, ShopItem } from '../data/curriculumData';
import { soundEffects } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';
import { AVATAR_OPTIONS } from './AvatarSystem';
import { APP_ASSETS } from '../data/appAssets';

// Iconos lucide consistentes para cada tipo de item
const ITEM_ICON_CONFIG: Record<string, { Icon: React.ComponentType<any>; gradient: string }> = {
  'heart_refill': { Icon: Heart, gradient: 'from-rose-500 to-pink-500' },
  'streak_freeze': { Icon: Shield, gradient: 'from-blue-500 to-cyan-500' },
  'avatar_frame': { Icon: Crown, gradient: 'from-amber-400 to-yellow-500' },
  'outfit': { Icon: CircleUserRound, gradient: 'from-cyan-500 to-blue-600' },
};

interface ShopViewProps {
  gems: number;
  hearts: number;
  maxHearts: number;
  hasStreakFreeze: boolean;
  hasGoldFrame: boolean;
  hasSafetyOutfit: boolean;
  onBuyItem: (item: ShopItem) => boolean;
  userAvatar?: string;
}

export const ShopView: React.FC<ShopViewProps> = ({
  gems,
  hearts,
  maxHearts,
  hasStreakFreeze,
  hasGoldFrame,
  hasSafetyOutfit,
  onBuyItem,
  userAvatar = '🧑‍🎓'
}) => {
  // Find the avatar object by emoji
  const currentAvatar = AVATAR_OPTIONS.find(a => a.emoji === userAvatar) || AVATAR_OPTIONS[0];

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 pb-24 md:pb-12 space-y-8 animate-in fade-in duration-200 font-sans">
      
      {/* Shop Banner con Vista Previa del Avatar */}
      <div className="liquid-glass-strong rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 border border-amber-500/30">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-tr from-amber-500/30 to-orange-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-48 h-48 bg-gradient-to-tr from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-2 text-center sm:text-left z-10 flex-1">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black uppercase tracking-widest shadow-lg">
            <ShoppingBag className="w-4 h-4" />
            <span>Almacén de IPET 66</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={APP_ASSETS.mascot.happy} alt="Volti" className="w-14 h-14 object-contain drop-shadow-xl" />
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-lg">Tienda del taller</h1>
          </div>
          <p className="text-sm font-bold text-slate-300 max-w-md">
            Usa tus tuercas doradas para recargar corazones, proteger tu racha o desbloquear insignias demostrativas para tu perfil.
          </p>
        </div>

        {/* Vista Previa del Avatar con Equipamiento */}
        <div className="relative z-10 shrink-0">
          <div className={`w-28 h-28 rounded-3xl bg-gradient-to-tr ${currentAvatar.gradient} flex items-center justify-center shadow-2xl border-4 ${currentAvatar.borderColor} relative ${
            hasGoldFrame ? 'ring-4 ring-amber-400/60 animate-pulse-glow' : ''
          }`}>
            <img src={currentAvatar.image} alt={currentAvatar.name} className="w-full h-full object-cover rounded-[20px]" />
            {hasSafetyOutfit && (
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center shadow-lg border-2 border-cyan-400/60 overflow-hidden">
                <img src={APP_ASSETS.badges.tester} alt="Insignia Tester" className="w-full h-full object-contain p-0.5" />
              </div>
            )}
            {hasGoldFrame && (
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg border-2 border-slate-950">
                <Crown className="w-5 h-5 fill-white text-white" />
              </div>
            )}
          </div>
          <div className="text-center mt-2">
            <div className="text-xs font-black text-white">{currentAvatar.name}</div>
            <div className="text-[10px] font-bold text-slate-400">Tu Avatar</div>
          </div>
        </div>
      </div>

      {/* Tuercas Balance con Liquid Glass */}
      <div className="liquid-glass-strong border border-amber-500/30 rounded-3xl p-5 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-500 flex items-center justify-center text-3xl shadow-xl border-2 border-amber-300/50">
            🪙
          </div>
          <div>
            <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Tu balance</div>
            <div className="text-3xl font-black text-amber-400 drop-shadow-lg">{gems.toLocaleString()}</div>
          </div>
        </div>
        <div className="hidden sm:block text-right max-w-[180px]">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gana más</div>
          <div className="text-xs font-bold text-slate-300">+15 tuercas por cada lección completada</div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SHOP_ITEMS.map((item) => {
          let isOwnedOrMax = false;
          let label = 'Comprar';

          if (item.type === 'heart_refill') {
            if (hearts >= maxHearts) {
              isOwnedOrMax = true;
              label = 'Corazones llenos';
            }
          } else if (item.type === 'streak_freeze') {
            if (hasStreakFreeze) {
              isOwnedOrMax = true;
              label = 'Equipado (1/1)';
            }
          } else if (item.type === 'avatar_frame') {
            if (hasGoldFrame) {
              isOwnedOrMax = true;
              label = 'Adquirido';
            }
          } else if (item.type === 'outfit') {
            if (hasSafetyOutfit) {
              isOwnedOrMax = true;
              label = 'Equipado';
            }
          }

          const canAfford = gems >= item.cost;

          return (
            <div
              key={item.id}
              className={`liquid-glass-strong border rounded-3xl p-6 flex flex-col justify-between transition-all hover:scale-[1.02] duration-300 ${
                isOwnedOrMax
                  ? 'border-emerald-500/40 bg-emerald-500/10 opacity-85'
                  : 'border-white/10 hover:border-white/20'
              } shadow-xl`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  {(() => {
                    const config = ITEM_ICON_CONFIG[item.type];
                    const ItemIcon = config.Icon;
                    const isImageIcon = item.icon.startsWith('/') || item.icon.startsWith('http');
                    if (isImageIcon) {
                      return (
                        <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center shadow-xl shrink-0 border-2 border-cyan-400/40 overflow-hidden">
                          <img src={item.icon} alt={item.name} className="w-full h-full object-contain p-1" />
                        </div>
                      );
                    }
                    return (
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${config.gradient} flex items-center justify-center shadow-xl shrink-0 border-2 border-white/20`}>
                        <ItemIcon className="w-8 h-8 text-white" />
                      </div>
                    );
                  })()}
                  {!isOwnedOrMax && (
                    <div className="inline-flex items-center gap-1.5 liquid-glass-amber rounded-xl px-3 py-1.5 text-amber-300 font-black text-sm shadow-md">
                      <Gem className="w-4 h-4 fill-amber-400" />
                      <span>{item.cost}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-black text-white mb-1.5">{item.name}</h3>
                <p className="text-sm text-slate-300 mb-6 font-medium">{item.description}</p>
              </div>

              {isOwnedOrMax ? (
                <div className="w-full bg-emerald-500/20 border border-emerald-500 text-emerald-300 font-extrabold py-3 rounded-2xl text-sm uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
                  <Check className="w-5 h-5" />
                  <span>{label}</span>
                </div>
              ) : (
                <button
                  disabled={!canAfford}
                  onClick={() => {
                    if (onBuyItem(item)) {
                      soundEffects.playVictory();
                      triggerConfetti();
                    } else {
                      soundEffects.playIncorrect();
                    }
                  }}
                  className={`w-full font-black py-3.5 rounded-2xl text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 ${
                    canAfford
                      ? 'btn-3d-green text-slate-900 shadow-emerald-500/20'
                      : 'bg-slate-700 text-slate-500 cursor-not-allowed border-none'
                  }`}
                >
                  <span>{canAfford ? label : 'Faltan tuercas'}</span>
                </button>
              )}

            </div>
          );
        })}
      </div>

      <div className="liquid-glass border border-white/10 rounded-2xl p-4 text-center text-xs font-bold text-slate-300 flex items-center justify-center gap-2 shadow-lg">
        <Sparkles className="w-4 h-4 text-emerald-400" />
        <span>Los escudos anti-fallo se consumen automáticamente al fallar una pregunta.</span>
      </div>

    </div>
  );
};
