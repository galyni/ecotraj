import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.css']
})
export class ConseilsComponent implements OnInit {

  liste;
  elementsSelectionnes = [];
  listeSelectionnes = [];

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.elementsSelectionnes = localStorage.getItem('elemRecuperes').split('-').map(Number);
    this.liste = this.api.fruitsEtLegumes;
    for(let id of this.elementsSelectionnes){
      this.listeSelectionnes.push(this.getItem(id));
    }
  }

  getItem(id) {
    for (let element of this.liste) {
      if (element.id === id)
         return element;
    }
  }

}
