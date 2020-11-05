import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `<div style="display: flex; justify-content: center;">
                <h4>Ne nous contactez pas</h4>
            </div>`
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
