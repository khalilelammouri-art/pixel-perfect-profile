import React, { useEffect, useState } from 'react';
import { THEMES, Theme } from './ThemeSwitcher';

export default function SettingsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('pitch-green');
  const [primary, setPrimary] = useState<string>('');
  const [accent, setAccent] = useState<string>('');

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme) || 'pitch-green';
    setCurrentTheme(saved);
    const savedPrimary = localStorage.getItem('customPrimary');
    const savedAccent = localStorage.getItem('customAccent');
    if (savedPrimary) {
      setPrimary(savedPrimary);
      document.documentElement.style.setProperty('--primary', savedPrimary);
    }
    if (savedAccent) {
      setAccent(savedAccent);
      document.documentElement.style.setProperty('--accent', savedAccent);
    }
  }, [open]);

  const applyTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const applyPrimary = (color: string) => {
    setPrimary(color);
    if (color) {
      document.documentElement.style.setProperty('--primary', color);
      localStorage.setItem('customPrimary', color);
    } else {
      document.documentElement.style.removeProperty('--primary');
      localStorage.removeItem('customPrimary');
    }
  };

  const applyAccent = (color: string) => {
    setAccent(color);
    if (color) {
      document.documentElement.style.setProperty('--accent', color);
      localStorage.setItem('customAccent', color);
    } else {
      document.documentElement.style.removeProperty('--accent');
      localStorage.removeItem('customAccent');
    }
  };

  const resetCustom = () => {
    applyPrimary('');
    applyAccent('');
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-w-2xl w-full rounded-md bg-background p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Paramètres</h3>
          <button onClick={onClose} className="text-sm text-muted-foreground">Fermer</button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="text-sm font-medium">Thème</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {THEMES.map((t) => (
                <button key={t.value} onClick={() => applyTheme(t.value)} className="relative group">
                  <div
                    className={`w-8 h-8 rounded-full transition-all duration-300 border-2 ${currentTheme === t.value ? 'border-white scale-110 shadow-lg' : 'border-slate-600 hover:border-slate-400'}`}
                    style={{ backgroundColor: t.color }}
                    title={t.label}
                  />
                </button>
              ))}
            </div>
            <div className="mt-3 text-xs text-muted-foreground">Choisissez un thème parmi les options footballistiques.</div>
          </div>

          <div>
            <div className="text-sm font-medium">Personnaliser les couleurs</div>
            <div className="mt-3 flex items-center gap-3">
              <label className="text-xs">Couleur primaire</label>
              <input type="color" value={primary || '#22c55e'} onChange={(e) => applyPrimary(e.target.value)} />
            </div>

            <div className="mt-3 flex items-center gap-3">
              <label className="text-xs">Couleur accent</label>
              <input type="color" value={accent || '#facc15'} onChange={(e) => applyAccent(e.target.value)} />
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button onClick={() => { resetCustom(); }} className="rounded-full px-4 py-2 border border-border bg-secondary text-muted-foreground">Réinitialiser</button>
              <button onClick={onClose} className="btn-primary-gradient rounded-full px-4 py-2">Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
