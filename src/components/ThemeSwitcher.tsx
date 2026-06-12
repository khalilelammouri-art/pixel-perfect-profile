import { useEffect, useState } from 'react';
import teams from '@/lib/teams';

export type Theme = 'pitch-green' | 'stadium-night' | 'tifosi-red' | 'champions-gold' | 'ocean-blue' | 'match-light';

export const THEMES: { value: Theme; label: string; color: string }[] = [
  { value: 'pitch-green', label: 'Pelouse Verte', color: '#1F8A3D' },
  { value: 'stadium-night', label: 'Stade Nocturne', color: '#0F1724' },
  { value: 'tifosi-red', label: 'Tifosi Rouge', color: '#C62828' },
  { value: 'champions-gold', label: 'Or Champions', color: '#D4AF37' },
  { value: 'ocean-blue', label: 'Bleu Océan', color: '#1E88E5' },
  { value: 'match-light', label: 'Lumière du Match', color: '#F3F4F6' },
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('pitch-green');
  const [premium, setPremium] = useState(false);
  const [showPersonalizeModal, setShowPersonalizeModal] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState<string | null>(null);
  const [previewBackground, setPreviewBackground] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const theme = savedTheme && THEMES.some((item) => item.value === savedTheme) ? savedTheme : 'pitch-green';
    const savedPremium = localStorage.getItem('isPremiumUser') === 'true' || localStorage.getItem('premium') === 'true';
    const savedBg = localStorage.getItem('premiumBackground');

    setCurrentTheme(theme);
    setPremium(savedPremium);
    applyTheme(theme);
    applyPremium(savedPremium);
    if (savedBg) {
      try {
        const parsed = JSON.parse(savedBg);
        if (parsed && parsed.url) {
          setSelectedBackground(parsed.url);
          setPreviewBackground(parsed.url);
          document.documentElement.style.setProperty('--background-image', `url('${parsed.url}')`);
        }
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    if (theme === 'dark-terrain') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
  };

  const applyPremium = (enabled: boolean) => {
    const root = document.documentElement;
    root.setAttribute('data-premium', enabled ? 'true' : 'false');
    localStorage.setItem('premium', enabled ? 'true' : 'false');
    localStorage.setItem('isPremiumUser', enabled ? 'true' : 'false');
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
  };

  const togglePremium = () => {
    const next = !premium;
    setPremium(next);
    applyPremium(next);
  };

  function applyBackground(url: string | null) {
    if (!url) {
      document.documentElement.style.setProperty('--background-image', 'none');
      localStorage.removeItem('premiumBackground');
      setSelectedBackground(null);
      setPreviewBackground(null);
      return;
    }
    const cssVal = `url('${url}')`;
    document.documentElement.style.setProperty('--background-image', cssVal);
    localStorage.setItem('premiumBackground', JSON.stringify({ url }));
    setSelectedBackground(url);
    setPreviewBackground(url);
  }

  function handleFileUpload(file: File | null) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreviewBackground(result);
      applyBackground(result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 p-4 bg-slate-900/80 backdrop-blur rounded-lg border border-slate-700">
      <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Thèmes Footballistiques</div>
      <div className="flex flex-wrap gap-2">
        {THEMES.map((theme) => (
          <button
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className="relative group"
            title={theme.label}
          >
            <div
              className={`w-8 h-8 rounded-full transition-all duration-300 border-2 ${
                currentTheme === theme.value
                  ? 'border-white scale-110 shadow-lg'
                  : 'border-slate-600 hover:border-slate-400'
              }`}
              style={{ backgroundColor: theme.color }}
            />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {theme.label}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={togglePremium}
        className={`rounded-full border px-3 py-2 text-sm transition ${
          premium
            ? 'border-emerald-400 bg-emerald-500/15 text-emerald-100'
            : 'border-slate-600 text-slate-200 hover:border-slate-400'
        }`}
      >
        {premium ? 'Premium activé — 20€/mois' : 'Activer premium (20€/mois)'}
      </button>
      {premium && (
        <button onClick={() => setShowPersonalizeModal(true)} className="rounded-full border px-3 py-2 text-sm transition border-slate-600 bg-secondary text-muted-foreground">Personnaliser le fond</button>
      )}

      {showPersonalizeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-w-2xl w-full rounded-md bg-background p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Personnaliser le fond</h3>
              <button onClick={() => setShowPersonalizeModal(false)} className="text-sm text-muted-foreground">Fermer</button>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <div className="text-sm font-medium">Choisir le fond de votre équipe</div>
                <div className="mt-3 grid grid-cols-3 gap-3 max-h-56 overflow-auto">
                  {teams.slice(0, 15).map((t) => (
                    <button key={t.id} onClick={() => { setPreviewBackground(t.logo); }} className={`flex flex-col items-center gap-2 rounded-md border p-2 ${previewBackground === t.logo ? 'ring-2 ring-offset-2 ring-primary' : ''}`}>
                      <img src={t.logo} alt={t.name} className="h-12 w-12 object-contain" />
                      <div className="text-xs text-muted-foreground text-center">{t.name}</div>
                    </button>
                  ))}
                </div>
                <div className="mt-3 text-xs text-muted-foreground">Sélectionnez un des fonds basés sur l'équipe. Les images proviennent du dataset local.</div>
              </div>

              <div>
                <div className="text-sm font-medium">Ou téléverser votre propre image</div>
                <div className="mt-3 flex items-center gap-3">
                  <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e.target.files?.[0] ?? null)} />
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium">Aperçu</div>
                  <div className="mt-2 h-40 w-full rounded-md border border-border bg-[rgba(0,0,0,0.12)] overflow-hidden">
                    {previewBackground ? (
                      <div className="h-full w-full" style={{ backgroundImage: `url(${previewBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-muted-foreground">Aucun fond sélectionné</div>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <button onClick={() => applyBackground(previewBackground)} className="btn-primary-gradient rounded-full px-4 py-2">Appliquer</button>
                  <button onClick={() => applyBackground(null)} className="rounded-full px-4 py-2 border border-border bg-secondary text-muted-foreground">Réinitialiser</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
