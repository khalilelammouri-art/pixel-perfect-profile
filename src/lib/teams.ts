export type Team = {
  id: number | string;
  name: string;
  type: "club" | "selection";
  country: string;
  logo: string;
  league: string;
};

export const teams: Team[] = [
  {
    id: 1,
    name: "Real Madrid",
    type: "club",
    country: "Espagne",
    logo: "https://media.api-sports.io/football/teams/541.png",
    league: "Liga",
  },
  {
    id: 2,
    name: "FC Barcelone",
    type: "club",
    country: "Espagne",
    logo: "https://media.api-sports.io/football/teams/529.png",
    league: "Liga",
  },
  {
    id: 3,
    name: "PSG",
    type: "club",
    country: "France",
    logo: "https://media.api-sports.io/football/teams/85.png",
    league: "Ligue 1",
  },
  {
    id: 4,
    name: "Manchester City",
    type: "club",
    country: "Angleterre",
    logo: "https://media.api-sports.io/football/teams/50.png",
    league: "Premier League",
  },
  {
    id: 5,
    name: "Liverpool",
    type: "club",
    country: "Angleterre",
    logo: "https://media.api-sports.io/football/teams/40.png",
    league: "Premier League",
  },
  {
    id: 6,
    name: "Wydad AC",
    type: "club",
    country: "Maroc",
    logo: "https://media.api-sports.io/football/teams/967.png",
    league: "Botola Pro",
  },
  {
    id: 7,
    name: "Raja Club Athletic",
    type: "club",
    country: "Maroc",
    logo: "https://media.api-sports.io/football/teams/968.png",
    league: "Botola Pro",
  },
  {
    id: 8,
    name: "Ittihad Tanger",
    type: "club",
    country: "Maroc",
    logo: "https://media.api-sports.io/football/teams/1434.png",
    league: "Botola Pro",
  },
  {
    id: 9,
    name: "Maroc",
    type: "selection",
    country: "Maroc",
    logo: "https://media.api-sports.io/flags/ma.svg",
    league: "Équipe nationale",
  },
  {
    id: 10,
    name: "France",
    type: "selection",
    country: "France",
    logo: "https://media.api-sports.io/flags/fr.svg",
    league: "Équipe nationale",
  },
  {
    id: 11,
    name: "Espagne",
    type: "selection",
    country: "Espagne",
    logo: "https://media.api-sports.io/flags/es.svg",
    league: "Équipe nationale",
  },
  {
    id: 12,
    name: "Brésil",
    type: "selection",
    country: "Brésil",
    logo: "https://media.api-sports.io/flags/br.svg",
    league: "Équipe nationale",
  },
  {
    id: 13,
    name: "Argentine",
    type: "selection",
    country: "Argentine",
    logo: "https://media.api-sports.io/flags/ar.svg",
    league: "Équipe nationale",
  },
  {
    id: 14,
    name: "Allemagne",
    type: "selection",
    country: "Allemagne",
    logo: "https://media.api-sports.io/flags/de.svg",
    league: "Équipe nationale",
  },
  {
    id: 15,
    name: "Portugal",
    type: "selection",
    country: "Portugal",
    logo: "https://media.api-sports.io/flags/pt.svg",
    league: "Équipe nationale",
  },
];

export default teams;
