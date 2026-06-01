import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { LandingPage } from './components/views/LandingPage';
import { AuthModal } from './components/auth/AuthModal';
import { LearnView } from './components/views/LearnView';
import { LessonModal } from './components/lesson/LessonModal';
import { LeaderboardView } from './components/views/LeaderboardView';
import { ShopView } from './components/views/ShopView';
import { AdvisorView } from './components/views/AdvisorView';
import { ProfileView } from './components/views/ProfileView';
import { OnboardingSuccess } from './components/auth/OnboardingSuccess';
import { Lesson, ShopItem } from './data/curriculumData';
import { soundEffects } from './utils/sound';

export function App() {
  // App state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('ipet66_auth') === 'true';
  });
  
  const [activeTab, setActiveTab] = useState<string>('learn');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
    return localStorage.getItem('ipet66_collapsed') === 'true';
  });

  const [currentYear, setCurrentYear] = useState<number>(() => {
    return parseInt(localStorage.getItem('ipet66_year') || '1', 10);
  });

  const [unlockedYear, setUnlockedYear] = useState<number>(() => {
    return parseInt(localStorage.getItem('ipet66_unlocked') || '1', 10);
  });

  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('ipet66_name') || '';
  });
  const [userAvatar, setUserAvatar] = useState<string>(() => {
    return localStorage.getItem('ipet66_avatar') || '🧑‍🎓';
  });
  const [userGoal, setUserGoal] = useState<number>(() => {
    return parseInt(localStorage.getItem('ipet66_goal') || '50', 10);
  });

  // Gamification Stats (Combo Streak)
  const [comboStreak, setComboStreak] = useState<number>(() => {
    return parseInt(localStorage.getItem('ipet66_combo') || '0', 10);
  });
  const [maxCombo, setMaxCombo] = useState<number>(() => {
    return parseInt(localStorage.getItem('ipet66_max_combo') || '0', 10);
  });
  const [gems, setGems] = useState<number>(() => {
    return parseInt(localStorage.getItem('ipet66_gems') || '150', 10);
  });
  const [hearts, setHearts] = useState<number>(() => {
    return parseInt(localStorage.getItem('ipet66_hearts') || '5', 10);
  });
  const [userXp, setUserXp] = useState<number>(() => {
    return parseInt(localStorage.getItem('ipet66_xp') || '0', 10);
  });
  const [perfectLessons, setPerfectLessons] = useState<number>(() => {
    return parseInt(localStorage.getItem('ipet66_perfect') || '0', 10);
  });
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('ipet66_completed') || '[]');
    } catch {
      return [];
    }
  });

  // Shop inventory
  const [hasStreakFreeze, setHasStreakFreeze] = useState<boolean>(() => {
    return localStorage.getItem('ipet66_freeze') === 'true';
  });
  const [hasGoldFrame, setHasGoldFrame] = useState<boolean>(() => {
    return localStorage.getItem('ipet66_frame') === 'true';
  });
  const [hasSafetyOutfit, setHasSafetyOutfit] = useState<boolean>(() => {
    return localStorage.getItem('ipet66_outfit') === 'true';
  });

  // Active Lesson state
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeSubjectName, setActiveSubjectName] = useState<string>('');
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'register' | 'login'>('register');
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('ipet66_auth', isAuthenticated ? 'true' : 'false');
    localStorage.setItem('ipet66_collapsed', isSidebarCollapsed ? 'true' : 'false');
    localStorage.setItem('ipet66_year', currentYear.toString());
    localStorage.setItem('ipet66_unlocked', unlockedYear.toString());
    localStorage.setItem('ipet66_name', userName);
    localStorage.setItem('ipet66_avatar', userAvatar);
    localStorage.setItem('ipet66_goal', userGoal.toString());
    localStorage.setItem('ipet66_combo', comboStreak.toString());
    localStorage.setItem('ipet66_max_combo', maxCombo.toString());
    localStorage.setItem('ipet66_gems', gems.toString());
    localStorage.setItem('ipet66_hearts', hearts.toString());
    localStorage.setItem('ipet66_xp', userXp.toString());
    localStorage.setItem('ipet66_perfect', perfectLessons.toString());
    localStorage.setItem('ipet66_completed', JSON.stringify(completedLessons));
    localStorage.setItem('ipet66_freeze', hasStreakFreeze ? 'true' : 'false');
    localStorage.setItem('ipet66_frame', hasGoldFrame ? 'true' : 'false');
    localStorage.setItem('ipet66_outfit', hasSafetyOutfit ? 'true' : 'false');
  }, [
    isAuthenticated, isSidebarCollapsed, currentYear, unlockedYear, userName, userAvatar, userGoal,
    comboStreak, maxCombo, gems, hearts, userXp, perfectLessons, completedLessons,
    hasStreakFreeze, hasGoldFrame, hasSafetyOutfit
  ]);

  const handleStartOnboarding = () => {
    setAuthMode('register');
    setAuthModalOpen(true);
  };

  const handleLoginOnboarding = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const handleAuthComplete = (name: string, year: number, avatar: string, goal: number, unlocked: number) => {
    const isNewUser = !isAuthenticated;
    setUserName(name);
    setCurrentYear(year);
    setUserAvatar(avatar);
    setUserGoal(goal);
    setUnlockedYear(unlocked);
    setAuthModalOpen(false);
    
    if (isNewUser && authMode === 'register') {
      setShowOnboarding(true);
      setTimeout(() => {
        setIsAuthenticated(true);
        setActiveTab('learn');
      }, 3500);
    } else {
      setIsAuthenticated(true);
      setActiveTab('learn');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('learn');
  };

  const handleStartLesson = (lesson: Lesson, subjectName: string) => {
    if (hearts <= 0) {
      alert("¡No te quedan corazones! Ve a la tienda para recargar o practica en la arena.");
      return;
    }
    setActiveLesson(lesson);
    setActiveSubjectName(subjectName);
  };

  const handleCompleteLesson = (earnedXp: number, passed: boolean, finalCombo: number) => {
    if (passed && activeLesson) {
      setUserXp((prev) => prev + earnedXp);
      setGems((prev) => prev + 15);
      setComboStreak(finalCombo);
      setMaxCombo((prev) => Math.max(prev, finalCombo));
      
      if (!completedLessons.includes(activeLesson.id)) {
        setCompletedLessons((prev) => [...prev, activeLesson.id]);
      }

      if (hearts === 5) {
        setPerfectLessons((prev) => prev + 1);
      }

      if (activeLesson.level === 5) {
        setUnlockedYear((prev) => Math.min(7, Math.max(prev, currentYear + 1)));
      }
    } else if (!passed) {
      setComboStreak(0);
    }
    setActiveLesson(null);
  };

  const handleBuyItem = (item: ShopItem) => {
    if (gems < item.cost) return false;

    if (item.type === 'heart_refill') {
      if (hearts >= 5) return false;
      setHearts(5);
    } else if (item.type === 'streak_freeze') {
      if (hasStreakFreeze) return false;
      setHasStreakFreeze(true);
    } else if (item.type === 'avatar_frame') {
      if (hasGoldFrame) return false;
      setHasGoldFrame(true);
    } else if (item.type === 'outfit') {
      if (hasSafetyOutfit) return false;
      setHasSafetyOutfit(true);
    }

    setGems((prev) => prev - item.cost);
    return true;
  };

  if (!isAuthenticated) {
    return (
      <>
        <LandingPage
          onStart={handleStartOnboarding}
          onLogin={handleLoginOnboarding}
        />
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          onComplete={handleAuthComplete}
          initialMode={authMode}
          savedName={userName}
          savedAvatar={userAvatar}
          savedYear={currentYear}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 flex flex-col selection:bg-[#58cc02] selection:text-slate-950 font-sans">
      
      <Navbar
        currentYear={currentYear}
        setCurrentYear={(year) => {
          setCurrentYear(year);
          soundEffects.playClick();
        }}
        unlockedYear={unlockedYear}
        comboStreak={comboStreak}
        gems={gems}
        hearts={hearts}
        maxHearts={5}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          soundEffects.playClick();
        }}
        onOpenShop={() => setActiveTab('shop')}
        onOpenProfile={() => setActiveTab('profile')}
        userAvatar={userAvatar}
        userName={userName}
      />

      <div className="flex-1 flex max-w-7xl mx-auto w-full transition-all">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
        
        <main className="flex-1 overflow-x-hidden transition-all duration-300">
          {activeTab === 'learn' && (
            <LearnView
              currentYear={currentYear}
              unlockedYear={unlockedYear}
              completedLessons={completedLessons}
              onStartLesson={handleStartLesson}
              onUnlockAllYears={() => setUnlockedYear(7)}
            />
          )}

          {activeTab === 'leaderboard' && (
            <LeaderboardView
              userXp={userXp}
              userName={userName}
              userAvatar={userAvatar}
              currentYear={currentYear}
              comboStreak={comboStreak}
            />
          )}

          {activeTab === 'shop' && (
            <ShopView
              gems={gems}
              hearts={hearts}
              maxHearts={5}
              hasStreakFreeze={hasStreakFreeze}
              hasGoldFrame={hasGoldFrame}
              hasSafetyOutfit={hasSafetyOutfit}
              onBuyItem={handleBuyItem}
              userAvatar={userAvatar}
            />
          )}

          {activeTab === 'advisor' && <AdvisorView />}

          {activeTab === 'profile' && (
            <ProfileView
              userName={userName}
              userAvatar={userAvatar}
              currentYear={currentYear}
              userXp={userXp}
              streak={comboStreak}
              maxCombo={maxCombo}
              perfectLessons={perfectLessons}
              completedLessonsCount={completedLessons.length}
              hasTesterBadge={hasSafetyOutfit}
              onLogout={handleLogout}
            />
          )}
        </main>
      </div>

      {activeLesson && (
        <LessonModal
          lesson={activeLesson}
          subjectName={activeSubjectName}
          hearts={hearts}
          comboStreak={comboStreak}
          hasStreakFreeze={hasStreakFreeze}
          onClose={() => setActiveLesson(null)}
          onCompleteLesson={handleCompleteLesson}
          onLoseHeart={() => setHearts((prev) => Math.max(0, prev - 1))}
          onRefillHearts={() => {
            if (gems >= 50) {
              setGems((prev) => prev - 50);
              setHearts(5);
            } else {
              alert("No tienes suficientes tuercas doradas (necesitas 50).");
            }
          }}
          onConsumeFreeze={() => setHasStreakFreeze(false)}
        />
      )}

      {showOnboarding && (
        <OnboardingSuccess
          userName={userName}
          userAvatar={userAvatar}
          currentYear={currentYear}
          onComplete={() => setShowOnboarding(false)}
        />
      )}

    </div>
  );
}

export default App;
