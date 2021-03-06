import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'remove-new-line-app';
  name = new FormControl('test', Validators.required);
  email = new FormControl('', Validators.email)

  constructor() {
  }
  
  ngOnInit(): void {
    this.name.valueChanges.subscribe(v => console.log(v))
  }
}
