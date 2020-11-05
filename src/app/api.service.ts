import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  fruitsEtLegumes = [
    {
      id: 1,
      nom: 'Salades',
      graines: '10 à 15 graines par m2',
      arrosage: '2 à 3 fois par semaine en temps sec',
      date: "n'importe quelle période de l'année",
      recolte: "8 à 10 semaines",
      conditions: "Exposition semi-ombragé, chaleur modéré",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123226.svg',
    },
    {
      id: 2,
      nom: 'Tomates',
      graines: "15 graines par m2",
      arrosage: "1L d'eau par jour",
      date: "Août jusqu'à fin Automne",
      recolte: "le début de l'été",
      conditions: "en prendre soin",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123223.svg'
    },
    {
      id: 3,
      nom: 'Fraise',
      graines: "4 à 6 plants par m2",
      arrosage: "2 à 3 par semaine",
      date: "Printemps jusqu'à l'Hiver",
      recolte: "Mai jusqu'à Juillet ou Semptembre à fin Octobre",
      conditions: "exposition au soleil",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123266.svg'
    },
    {
      id: 4,
      nom: 'Banane',
      graines: 4,
      arrosage: 3,
      date: 'bientôt',
      recolte: 5,
      conditions: "en prendre soin",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123224.svg'
    },
    {
      id: 11,
      nom: 'Citrouille',
      graines: "3 graines par m2",
      arrosage: "2 fois par semaine",
      date: 'Fin mai à début juin',
      recolte: "le début de l'Automne",
      conditions: "plus de 17°C",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123234.svg'
    },
    {
      id: 13,
      nom: 'Framboise',
      graines: 4,
      arrosage: 3,
      date: 'bientôt',
      recolte: 5,
      conditions: "en prendre soin",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/815/815590.svg'
    },

    {
      id: 5,
      nom: 'Carotte',
      graines: "1 à 1.5kg par m2",
      arrosage: "1 fois par semaine",
      date: 'Mars à début juillet',
      recolte: "le début d'Avril jusqu'à début Décembre",
      conditions: "température entre 8 et 29°C",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123236.svg'
    },
    {
      id: 6,
      nom: 'Aubergine',
      graines: "220g par m2",
      arrosage: "1 à 2 fois par semaine selon la sécheresse",
      date: "Mi-février jusqu'à fin Avril",
      recolte: "début Août jusqu'à Octobre",
      conditions: "température entre 15 et 20°C",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/286/286695.svg'
    },
    {
      id: 7,
      nom: 'Oignons',
      graines: "2.5 à 5g par m2",
      arrosage: "rarement, 1 fois par semaine en cas de sécheresse",
      date: 'Août',
      recolte: "le début de l'hiver",
      conditions: "Apprécie le temps sec",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123238.svg'
    },
    {
      id: 8,
      nom: 'Navets',
      graines: 4,
      arrosage: 3,
      date: 'bientôt',
      recolte: 5,
      conditions: "en prendre soin",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123225.svg'
    },
    {
      id: 9,
      nom: 'Brocolis',
      graines: "3 à 4 plants par m2",
      arrosage: "1 à 2 fois par semaine",
      date: 'de Mai à Juin',
      recolte: "55 à 85 jours",
      conditions: "tolère le froid, température entre 15 et 24°C",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123229.svg'
    },
    {
      id: 10,
      nom: 'Radis',
      graines: "300g par m2",
      arrosage: "1 à 2 fois par semaine selon la sécheresse",
      date: 'de préférence en Eté',
      recolte: "4 à 6 semaines",
      conditions: "Au soleil ou à l'ombre légère",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/680/680948.svg'
    },
    {
      id: 14,
      nom: 'Poireaux',
      graines: "4 à 5g par m2",
      arrosage: "chaque jour pour maintenir le sol humide",
      date: 'en Août',
      recolte: "le début de l'hiver",
      conditions: "repiquer après 3 mois",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/1135/1135528.svg'
    },
    {
      id: 15,
      nom: 'Courgettes',
      graines: "6 à 8 graines par m2",
      arrosage: "2 à 3 fois par semaine",
      date: 'durant l\'Eté',
      recolte: "début juillet jusqu'à octobre",
      conditions: "en prendre soin",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/1466/1466059.svg'
    }

  ];

  constructor() { }

}
