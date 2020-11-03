import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  fruits = [
    {
      nom: 'tomate'
    },
    {
      nom: 'pomme'
    },
    {
      nom: 'poire'
    },
    {
      nom: 'banane'
    }
  ];

  legumes = [
    {
      nom: 'poireaux'
    },
    {
      nom: 'aubergine'
    },
    {
      nom: 'endives'
    },
    {
      nom: 'haricots verts'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
