import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    fruits = [
        {
          id:1,
          nom: 'salades',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123226.svg',
        },
        {
          id:2,
          nom: 'tomates',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123223.svg'
        },
        {
          id:3,
          nom: 'fraise',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123266.svg'
        },
        {
          id:4,
          nom: 'banane',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123224.svg'
        }
      ];
    
      legumes = [
        {
          id:5,
          nom: 'carotte',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123236.svg'
        },
        {
          id:6,
          nom: 'aubergine',
          image: 'https://www.flaticon.com/svg/static/icons/svg/286/286695.svg'
        },
        {
          id:7,
          nom: 'oignons',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123238.svg'
        },
        {
          id:8,
          nom: 'navets',
          image: 'https://www.flaticon.com/svg/static/icons/svg/123/123225.svg'
        }
      ];

    constructor() {}

    
}