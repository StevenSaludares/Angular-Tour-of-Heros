import { Component, OnInit } from '@angular/core';
hero = 'Windstorm';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
 
})
export class HeroesComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }

}
