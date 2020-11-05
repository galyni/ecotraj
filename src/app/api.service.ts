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
      recolte: "après 8 à 10 semaines",
      conditions: "Exposition semi-ombragé, chaleur modéré",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123226.svg',
    },
    {
      id: 2,
      nom: 'Tomates',
      graines: "15 graines par m2",
      arrosage: "1L d'eau par jour",
      date: "à partir d'août jusqu'à la fin de l'automne",
      recolte: "après le début de l'été",
      conditions: "en prendre soin",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123223.svg'
    },
    {
      id: 3,
      nom: 'Fraise',
      graines: "4 à 6 plants par m2",
      arrosage: "2 à 3 par semaine",
      date: "printemps jusqu'à l'hiver",
      recolte: "de mai jusqu'à juillet ou de septembre à fin octobre",
      conditions: "exposition au soleil",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123266.svg'
    },
    {
      id: 4,
      nom: 'Banane',
      graines: "1 babanier à mettre dans un pot rempli de terreau",
      arrosage: "tous les 2, 3 jours",
      date: "n'importe quel moment de l'année",
      recolte: "lorsque les bananes sont mûres",
      conditions: "température entre 18 et 22°C, beaucoup de lumière",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123224.svg'
    },
    {
      id: 11,
      nom: 'Citrouille',
      graines: "3 graines par m2",
      arrosage: "2 fois par semaine",
      date: 'de fin mai à début juin',
      recolte: "après le début de l'automne",
      conditions: "plus de 17°C",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123234.svg'
    },
    {
      id: 13,
      nom: 'Framboise',
      graines: "1 pied par framboisier, à espacer de 1.2 m",
      arrosage: "tous les 2 jours",
      date: 'octobre à mars',
      recolte: "de juin à septembre",
      conditions: "planter en plein soleil",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/815/815590.svg'
    },
    {
      id: 5,
      nom: 'Carotte',
      graines: "1 à 1.5kg par m2",
      arrosage: "1 fois par semaine",
      date: 'mars à début juillet',
      recolte: "du début d'avril jusqu'à début décembre",
      conditions: "température entre 8 et 29°C",
      lien: [
        {
          nom: "Google",
          url: "https://www.google.com/"
        },
        {
          nom: "Google2",
          url: "https://www.google.fr/"
        }
      ],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123236.svg'
    },
    {
      id: 6,
      nom: 'Aubergine',
      graines: "220g par m2",
      arrosage: "1 à 2 fois par semaine selon la sécheresse",
      date: "mi-février jusqu'à fin avril",
      recolte: "à partir de début août jusqu'à octobre",
      conditions: "température entre 15 et 20°C",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/286/286695.svg'
    },
    {
      id: 7,
      nom: 'Oignons',
      graines: "2.5 à 5g par m2",
      arrosage: "rarement, 1 fois par semaine en cas de sécheresse",
      date: 'août',
      recolte: "après le début de l'hiver",
      conditions: "Apprécie le temps sec",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123238.svg'
    },
    {
      id: 8,
      nom: 'Navets',
      graines: "4 à 6 en les espaçant de plusieurs cm",
      arrosage: "1 à 2 par semaine",
      date: 'mi-février à avril',
      recolte: "mai à juillet et septembre à novembre",
      conditions: "conserver l'humidité dans l'environnement de pousse",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123225.svg'
    },
    {
      id: 9,
      nom: 'Brocolis',
      graines: "3 à 4 plants par m2",
      arrosage: "1 à 2 fois par semaine",
      date: 'de mai à juin',
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
      date: 'de préférence en été',
      recolte: "après 4 à 6 semaines",
      conditions: "Au soleil ou à l'ombre légère",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/680/680948.svg'
    },
    {
      id: 14,
      nom: 'Poireaux',
      graines: "4 à 5g par m2",
      arrosage: "chaque jour pour maintenir le sol humide",
      date: 'en août',
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
      date: 'durant l\'été',
      recolte: "début juillet jusqu'à octobre",
      conditions: "en prendre soin",
      lien: ["google", "duckduckgo"],
      image: 'https://www.flaticon.com/svg/static/icons/svg/1466/1466059.svg'
    }

  ];

  constructor() { }

}
