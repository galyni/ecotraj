import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    fruits = [
        {
          id:1,
          nom: 'Salades',
          graines: 4,
          arrosage: 3,
          date: 'Bientôt',
          recolte: 5,
          conditions: "en prendre soin",
          lien: ["google", "duckduckgo"],
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123226.svg',
        },
        {
          id:2,
          nom: 'Tomates',
          graines: 4,
          arrosage: 3,
          date: 'Bientôt',
          recolte: 5,
          conditions: "en prendre soin",
          lien: ["google", "duckduckgo"],
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123223.svg'
        },
        {
          id:3,
          nom: 'Fraise',
          graines: 4,
          arrosage: 3,
          date: 'Bientôt',
          recolte: 5,
          conditions: "en prendre soin",
          lien: ["google", "duckduckgo"],
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123266.svg'
        },
        {
          id:4,
          nom: 'Banane',
          graines: 4,
          arrosage: 3,
          date: 'Bientôt',
          recolte: 5,
          conditions: "en prendre soin",
          lien: ["google", "duckduckgo"],
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123224.svg'
        }
      ];

      legumes = [
        {
          id:5,
          nom: 'Carotte',
          graines: 4,
          arrosage: 3,
          date: 'Bientôt',
          recolte: 5,
          conditions: "en prendre soin",
          lien: ["google", "duckduckgo"],
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123236.svg'
        },
        {
          id:6,
          nom: 'Aubergine',
          graines: 4,
          arrosage: 3,
          date: 'Bientôt',
          recolte: 5,
          conditions: "en prendre soin",
          lien: ["google", "duckduckgo"],
          image: 'https://www.flaticon.com/svg/static/icons/svg/286/286695.svg'
        },
        {
          id:7,
          nom: 'Oignons',
          graines: 4,
          arrosage: 3,
          date: 'Bientôt',
          recolte: 5,
          conditions: "en prendre soin",
          lien: ["google", "duckduckgo"],
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123238.svg'
        },
        {
          id:8,
          nom: 'Navets',
          graines: 4,
          arrosage: 3,
          date: 'Bientôt',
          recolte: 5,
          conditions: "en prendre soin",
          lien: ["google", "duckduckgo"],
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123225.svg'
        }
      ];

    constructor() {}


}
