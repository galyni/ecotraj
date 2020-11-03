import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.css']
})
export class ConseilsComponent implements OnInit {

  fruits;
  legumes;
  elementsSelectionnes;

  constructor(private api: ApiService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {   
    this.elementsSelectionnes = this.route.snapshot.paramMap.get('objets').split('');
    console.log(this.elementsSelectionnes);
  }

  test(){
    var elementsSelectionnes = localStorage.getItem['elemRecuperes'].split('-');
    console.log(elementsSelectionnes);
  }
}
