import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  fruits = [
    {
      nom: 'salades',
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123226.svg'
    },
    {
      nom: 'tomates',
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123223.svg'
    },
    {
      nom: 'fraise',
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123266.svg'
    },
    {
      nom: 'banane',
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123224.svg'
    }
  ];

  legumes = [
    {
      nom: 'carotte',
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123236.svg'
    },
    {
      nom: 'aubergine',
      image: 'https://www.flaticon.com/svg/static/icons/svg/286/286695.svg'
    },
    {
      nom: 'oignons',
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123238.svg'
    },
    {
      nom: 'navets',
      image: 'https://www.flaticon.com/svg/static/icons/svg/123/123225.svg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
