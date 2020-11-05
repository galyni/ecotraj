import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  
  fruits;
  legumes;

  checkedItems = []

  constructor(private api: ApiService, private router: Router) {

   }

  ngOnInit(): void {
    this.fruits = this.api.fruits;
    this.legumes = this.api.legumes;
  }

  getResults() {
    var checkedItemsSerialises = this.checkedItems.join('-'); 
    localStorage.setItem('elemRecuperes', checkedItemsSerialises);
    
    this.router.navigate(['conseils']);   
  }

  onChange(id: number) {
    if (!this.checkedItems.includes(id)) {
      this.checkedItems.push(id);
    } else {
      var index = this.checkedItems.indexOf(id);
      if (index > -1) {
        this.checkedItems.splice(index, 1);
      }
    }
  }
}
