import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    fruits = [
        {
          id:1,
          nom: 'Salades',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123226.svg',
        },
        {
          id:2,
          nom: 'Tomates',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123223.svg'
        },
        {
          id:3,
          nom: 'Fraise',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123266.svg'
        },
        {
          id:4,
          nom: 'Banane',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123224.svg'
        }
      ];

      legumes = [
        {
          id:5,
          nom: 'Carotte',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123236.svg'
        },
        {
          id:6,
          nom: 'Aubergine',
          image: 'https://www.flaticon.com/svg/static/icons/svg/286/286695.svg'
        },
        {
          id:7,
          nom: 'Oignons',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123238.svg'
        },
        {
          id:8,
          nom: 'Navets',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123225.svg'
        }
      ];

    constructor() {}


}
