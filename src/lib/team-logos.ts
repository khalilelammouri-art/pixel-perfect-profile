const teamLogos: Record<string, string> = {
  "Real Madrid": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
  "FC Barcelone": "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
  PSG: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
  Liverpool: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
  "Manchester City": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
  Maroc: "https://upload.wikimedia.org/wikipedia/en/2/2d/Morocco_national_football_team_logo.svg",
  "Équipe nationale du Brésil": "https://upload.wikimedia.org/wikipedia/en/0/05/CBF_logo.svg",
  Wydad: "https://upload.wikimedia.org/wikipedia/en/7/76/Wydad_AC_logo.svg",
  Raja: "https://upload.wikimedia.org/wikipedia/en/2/2b/Raja_Club_Athl%C3%A9tique_logo.svg",
  "Ittihad Tanger": "https://www.irtofficiel.ma/wp-content/uploads/2019/04/logo-irt-bleu-1.png",
  Senegal: "https://upload.wikimedia.org/wikipedia/en/f/fd/Senegal_national_football_team_logo.svg",
  "Sénégal": "https://upload.wikimedia.org/wikipedia/en/f/fd/Senegal_national_football_team_logo.svg",
  Valencia: "https://upload.wikimedia.org/wikipedia/en/7/71/Valencia_CF_logo.svg",
  Lyon: "https://upload.wikimedia.org/wikipedia/en/3/37/Olympique_Lyonnais.svg",
};

export function getTeamLogo(name: string) {
  return teamLogos[name] ?? "/placeholder.svg";
}
